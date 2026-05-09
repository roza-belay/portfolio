import {
  FaDatabase,
  FaMobileScreen,
  FaShieldHalved,
} from 'react-icons/fa6';

import { SiKotlin } from 'react-icons/si';

export default function ThesisSection() {
  return (
    <section
      className="section-block thesis-section"
      data-glow
    >
      <div>
        <p className="eyebrow">Examensarbete</p>

        <h2>
          POS-system med Payment SDK och
          betalterminalintegration.
        </h2>
      </div>

      <div className="thesis-grid">
        <article data-glow>
          <FaMobileScreen />
          <span>
            On-device och off-device arkitekturer
          </span>
        </article>

        <article data-glow>
          <SiKotlin />
          <span>
            Android/Kotlin i verklig betalmiljö
          </span>
        </article>

        <article data-glow>
          <FaDatabase />
          <span>
            Produktvarianter, kvittoflöden och orderdata
          </span>
        </article>

        <article data-glow>
          <FaShieldHalved />
          <span>
            Analys av funktionella skillnader och
            utvecklingskomplexitet
          </span>
        </article>
      </div>
    </section>
  );
}