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

  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.52;
    mat2 rot = mat2(0.86, -0.5, 0.5, 0.86);
    for (int i = 0; i < 6; i++) {
      v += a * noise(p);
      p = rot * p * 2.05 + 17.0;
      a *= 0.52;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
    vec2 p = (uv - 0.5) * aspect * 2.4;

    float t = uTime * 0.12;
    vec2 flow = vec2(t * 0.35, t * 0.22);
    float n = fbm(p * 1.6 + flow + fbm(p * 2.4 - flow * 0.7));
    float wisp = smoothstep(0.08, 0.96, n);

    vec3 violet = vec3(0.52, 0.14, 0.72);
    vec3 cyan = vec3(0.05, 0.62, 0.72);
    vec3 deep = vec3(0.03, 0.02, 0.07);

    vec3 col = mix(deep, mix(violet, cyan, wisp), 0.55 + 0.45 * wisp);
    float alpha = (0.14 + 0.42 * wisp * wisp) * uIntensity;

    gl_FragColor = vec4(col, alpha);
  }
`;

export default function SmokeBackground({ theme }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef(theme);

  themeRef.current = theme;

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uIntensity: { value: themeRef.current === 'dark' ? 1 : 0.22 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;

      renderer.setSize(w, h, false);
      uniforms.uResolution.value.set(w, h);
    };

    container.appendChild(renderer.domElement);
    resize();

    let raf = 0;
    let disposed = false;

    const tick = () => {
      if (disposed) return;

      raf = requestAnimationFrame(tick);

      if (document.visibilityState === 'hidden') return;

      uniforms.uIntensity.value = themeRef.current === 'dark' ? 1 : 0.22;

      if (!prefersReduced) {
        uniforms.uTime.value += 0.016;
      }

      renderer.render(scene, camera);
    };

    tick();

    const onResize = () => resize();

    window.addEventListener('resize', onResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
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
