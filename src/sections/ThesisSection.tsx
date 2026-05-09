import {
  FaDatabase,
  FaMobileScreen,
  FaShieldHalved,
} from 'react-icons/fa6';

import { SiKotlin } from 'react-icons/si';

import './styles/ThesisSection.css';

const thesisQuestions = [
  'Vilka tekniska skillnader och likheter finns mellan on-device och off-device integration med Verifones PSDK?',
  'Hur påverkar integrationsvalet kassasystemets funktioner?',
  'Hur påverkas utvecklingsprocessen och implementationskomplexiteten?',
];

const thesisResults = [
  {
    label: 'Payment App',
    value: '0,16 s',
    detail: 'längre initiering i off-device i medelvärde',
  },
  {
    label: 'Skanning',
    value: '77,6%',
    detail: 'kortare scanningstid med extern handskanner',
  },
  {
    label: 'Kvittoutskrift',
    value: '55,1%',
    detail: 'kortare utskriftstid med Epson-skrivare',
  },
];

export default function ThesisSection() {
  return (
    <section
      className="section-block thesis-section"
      data-glow
    >
      <div className="thesis-copy">
        <p className="eyebrow">Examensarbete</p>

        <h2>
          On-device och off-device integration med Verifones Payment SDK.
        </h2>

        <p>
          Examensarbetet undersökte hur valet mellan on-device och
          off-device påverkar implementationen av ett Android-baserat
          kassasystem. Arbetet genomfördes som en explorativ fallstudie
          där två integrationsstrategier jämfördes tekniskt,
          funktionellt och utvecklingsmässigt.
        </p>

        <div className="thesis-meta">
          <span>Frontendutveckling med webbsäkerhet</span>
          <span>Vårtermin 2026</span>
          <span>Roza Belay</span>
        </div>
      </div>

      <div className="thesis-content">
        <div className="thesis-question-card" data-glow>
          <p className="eyebrow">Syfte och frågeställningar</p>

          <p>
            Syftet var att förstå vilka konsekvenser integrationsvalet
            får för arkitektur, funktioner, hårdvaruberoenden och
            utvecklingskomplexitet.
          </p>

          <ul>
            {thesisQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>

        <div className="thesis-grid">
          <article data-glow>
            <FaMobileScreen />
            <span>On-device gav en mer sammanhållen lösning med färre externa beroenden.</span>
          </article>

          <article data-glow>
            <SiKotlin />
            <span>Off-device krävde mer nätverkslogik men gav större flexibilitet i hårdvaruval.</span>
          </article>

          <article data-glow>
            <FaDatabase />
            <span>Betalningslogiken kunde återanvändas genom ett gemensamt API-lager.</span>
          </article>

          <article data-glow>
            <FaShieldHalved />
            <span>Skillnaderna uppstod främst i infrastruktur, kvitto, scanner och uppkoppling.</span>
          </article>
        </div>

        <div className="thesis-results" data-glow>
          {thesisResults.map((result) => (
            <article key={result.label}>
              <span>{result.label}</span>
              <strong>{result.value}</strong>
              <p>{result.detail}</p>
            </article>
          ))}
        </div>

        <div className="thesis-recommendation" data-glow>
          <p className="eyebrow">Slutsats</p>

          <p>
            On-device passar bäst när enkel installation, portabilitet
            och robusthet utan nätverk är viktigast. Off-device passar
            bättre när verksamheten behöver välja separat kvittoskrivare,
            handskanner eller annan specialiserad hårdvara. Ett tydligt
            abstraktionslager rekommenderas eftersom det minskar påverkan
            på affärslogiken när integrationsstrategin behöver bytas.
          </p>
        </div>
      </div>
    </section>
  );
}
