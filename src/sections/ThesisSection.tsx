import {
  SiJetpackcompose,
  SiKotlin,
  SiNodedotjs,
  SiSqlite,
} from 'react-icons/si';

import './styles/ThesisSection.css';

const thesisQuestions = [
  'Vilka tekniska skillnader och likheter finns mellan on-device och off-device integration med Verifones PSDK?',
  'Hur påverkar integrationsvalet kassasystemets funktioner och hårdvaruberoenden?',
  'Hur påverkas utvecklingsprocessen och implementationskomplexiteten av OD respektive OffD?',
];

const thesisResults = [
  {
    label: 'Payment App',
    value: '5,9%',
    detail: 'kortare initieringstid i OD implementationen',
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

        <h3>
          On-device kontra off-device:
          tekniska konsekvenser av
          betalterminalintegrationsstrategi med Verifones PSDK
        </h3>

        <p>
          Examensarbetet undersöker hur valet mellan on-device (OD)
          och off-device (OffD) integration påverkar implementationen
          av Android-baserade kassasystem. Studien genomfördes som en
          explorativ fallstudie där två integrationsstrategier jämfördes
          utifrån teknisk implementation, funktionella skillnader och
          utvecklingskomplexitet.
        </p>

        <div className="thesis-meta">
          <span>FWK24S</span>
          <span>VT 26</span>
          <span>Angelika Friis & Roza Belay</span>
        </div>
      </div>

      <div className="thesis-content">
        <div className="thesis-question-card" data-glow>
          <p className="eyebrow">Syfte och frågeställningar</p>

          <p>
            Syftet var att analysera hur integrationsstrategin påverkar
            systemarkitektur, hårdvaruberoenden, funktionalitet och
            utvecklingsprocess vid implementation av Verifones Payment SDK.
          </p>

          <ul>
            {thesisQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>

        <div className="thesis-grid">
          <article data-glow>
            <SiJetpackcompose />
            <span>
              OD gav en mer sammanhållen arkitektur där betalning,
              scanner och kvittoutskrift kunde hanteras inom samma enhet.
            </span>
          </article>

          <article data-glow>
            <SiKotlin />
            <span>
              Båda implementationerna utvecklades i Kotlin för Android
              och använde samma grundläggande betalningsflöde via PSDK.
            </span>
          </article>

          <article data-glow>
            <SiNodedotjs />
            <span>
              OffD introducerade mer nätverkslogik och anslutningshantering
              genom kommunikation mellan flera enheter via TCP/IP.
            </span>
          </article>

          <article data-glow>
            <SiSqlite />
            <span>
              Ett gemensamt abstraktionslager gjorde det möjligt att
              återanvända stora delar av betalningslogiken mellan OD och OffD.
            </span>
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
            Resultatet visar att OD lämpar sig bäst i miljöer där enkel
            installation, mobilitet och begränsat beroende av nätverk är
            viktigt. OffD lämpar sig bättre när verksamheten behöver större
            flexibilitet i val av kringutrustning såsom externa scanners och
            kvittoskrivare. Studien visar även att tydliga abstraktionslager
            minskar beroendet till specifik hårdvara och förenklar framtida
            byte av integrationsstrategi.
          </p>
        </div>
      </div>
    </section>
  );
}