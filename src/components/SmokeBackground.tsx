
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  theme: 'dark' | 'light';
};

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uIntensity;
  uniform vec2 uMouse;
  uniform float uHover;

  varying vec2 vUv;

  // Random noise
  float hash(vec2 p) {
    return fract(
      sin(dot(p, vec2(127.1, 311.7)))
      * 43758.5453123
    );
  }

  // Smooth noise
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(
        hash(i + vec2(0.0, 0.0)),
        hash(i + vec2(1.0, 0.0)),
        u.x
      ),
      mix(
        hash(i + vec2(0.0, 1.0)),
        hash(i + vec2(1.0, 1.0)),
        u.x
      ),
      u.y
    );
  }

  // Fractal smoke texture
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    mat2 rotation = mat2(
      0.86, -0.5,
      0.5, 0.86
    );

    for (int i = 0; i < 6; i++) {
      value += amplitude * noise(p);

      p = rotation * p * 2.05 + 17.0;

      amplitude *= 0.52;
    }

    return value;
  }

  void main() {
    vec2 uv = vUv;

    // Screen aspect ratio
    float aspect = uResolution.x / max(uResolution.y, 1.0);

    vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

    // Animation speed
    float t = uTime * 0.20;

    // Mouse position
    vec2 mouse = (uMouse - 0.5) * vec2(aspect, 1.0);

    // Distance to mouse
    float mouseDistance = length(p - mouse);

    // Mouse interaction
    float mouseInfluence =
      exp(-mouseDistance * 3.0) * uHover;

    // Flow upward
    vec2 flow = vec2(
      t * 0.18,
      t * 0.75
    );

    // Curved smoke waves
    float wave1 = sin(
      p.x * 3.0 +
      p.y * 2.0 -
      t * 1.5
    );

    float wave2 = sin(
      p.x * 5.0 -
      p.y * 2.5 +
      t * 1.1
    );

    // Distort smoke
    p.x += wave1 * 0.10;
    p.x += wave2 * 0.045;

    // Smoke expands around the mouse
    p += (p - mouse) * mouseInfluence * 0.15;

    // Smoke texture
    float n = fbm(
      p * 2.1 +
      flow +
      fbm(p * 2.5 - flow)
    );

    // Create soft smoke wisps
    float wisp = smoothstep(
      0.18,
      0.82,
      n + wave1 * 0.12
    );

    // More detail
    float detail = fbm(
      p * 4.0 -
      flow * 1.3
    );

    wisp *= smoothstep(
      0.12,
      0.8,
      detail + 0.25
    );

    // Neon colors
    vec3 violet = vec3(0.72, 0.72, 0.76);
    vec3 cyan = vec3(0.96, 0.96, 0.98);
    vec3 pink = vec3(0.34, 0.34, 0.38);
    vec3 blue = vec3(0.62, 0.62, 0.66);

    // Color movement
    float colorWave = sin(
      p.y * 4.0 +
      p.x * 2.0 -
      t * 2.0
    );

    vec3 colorA = mix(
      violet,
      cyan,
      smoothstep(-0.8, 0.8, colorWave)
    );

    vec3 colorB = mix(
      pink,
      blue,
      smoothstep(-0.6, 0.8, wave2)
    );

    vec3 smokeColor = mix(
      colorA,
      colorB,
      smoothstep(0.15, 0.85, n)
    );

    // Black background
    vec3 background = vec3(0.0);

    // Smoke brightness
    float smoke = wisp * 0.65;

    // Stronger smoke near mouse
    smoke += mouseInfluence * wisp * 0.35;

    // Fade out at edges
    float edgeFade = smoothstep(
      0.0,
      0.18,
      uv.y
    );

    edgeFade *= smoothstep(
      1.0,
      0.75,
      uv.y
    );

    // Final transparency
    float alpha = smoke * uIntensity * edgeFade;

    // Preserve black background
    vec3 finalColor = mix(
      background,
      smokeColor,
      clamp(alpha, 0.0, 1.0)
    );

    gl_FragColor = vec4(
      finalColor,
      1.0
    );
  }
`;

export default function SmokeBackground({ theme }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef(theme);

  themeRef.current = theme;

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1.5)
    );

    renderer.setClearColor(0x000000, 1);

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      -1,
      1,
      1,
      -1,
      -1,
      1
    );

    const uniforms = {
      uTime: {
        value: 0,
      },

      uResolution: {
        value: new THREE.Vector2(1, 1),
      },

      uIntensity: {
        value: themeRef.current === 'dark' ? 1.0 : 0.22,
      },

      uMouse: {
        value: new THREE.Vector2(0.5, 0.5),
      },

      uHover: {
        value: 0,
      },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: false,
      depthWrite: false,
      depthTest: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);

    const mesh = new THREE.Mesh(
      geometry,
      material
    );

    scene.add(mesh);

    const resize = () => {
      const width =
        container.clientWidth || window.innerWidth;

      const height =
        container.clientHeight || window.innerHeight;

      renderer.setSize(width, height, false);

      uniforms.uResolution.value.set(
        width,
        height
      );
    };

    container.appendChild(renderer.domElement);

    resize();

    let raf = 0;
    let disposed = false;

    const tick = () => {
      if (disposed) return;

      raf = requestAnimationFrame(tick);

      if (document.visibilityState === 'hidden') {
        return;
      }

      // Dark mode: vivid neon smoke
      // Light mode: subtle smoke
      uniforms.uIntensity.value =
        themeRef.current === 'dark'
          ? 1.0
          : 0.22;

      if (!prefersReducedMotion) {
        uniforms.uTime.value += 0.016;
      }

      renderer.render(scene, camera);
    };

    tick();

    // Mouse interaction
    const onMouseMove = (event: MouseEvent) => {
      uniforms.uMouse.value.set(
        event.clientX / window.innerWidth,
        1.0 - event.clientY / window.innerHeight
      );

      uniforms.uHover.value = 1.0;
    };

    const onMouseLeave = () => {
      uniforms.uHover.value = 0.0;
    };

    const onResize = () => {
      resize();
    };

    window.addEventListener(
      'mousemove',
      onMouseMove
    );

    window.addEventListener(
      'mouseleave',
      onMouseLeave
    );

    window.addEventListener(
      'resize',
      onResize
    );

    // Cleanup
    return () => {
      disposed = true;

      cancelAnimationFrame(raf);

      window.removeEventListener(
        'mousemove',
        onMouseMove
      );

      window.removeEventListener(
        'mouseleave',
        onMouseLeave
      );

      window.removeEventListener(
        'resize',
        onResize
      );

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (
        renderer.domElement.parentElement === container
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="smoke-background"
      data-theme={theme}
      aria-hidden="true"
    />
  );
}
