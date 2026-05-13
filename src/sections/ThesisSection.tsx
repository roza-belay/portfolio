import {
  SiJetpackcompose,
  SiKotlin,
  SiNodedotjs,
  SiSqlite,
} from 'react-icons/si';

import './styles/ThesisSection.css';

type ThesisResult = {
  label: string;
  value: string;
  detail: string;
};

const thesisHighlights: string[] = [
  'Systemarkitektur',
  'Nätverkskommunikation',
  'Skanner- och kvittohantering',
  'Utvecklingskomplexitet',
  'Hårdvaruberoenden',
];

const thesisResults: ThesisResult[] = [
  {
    label: 'Payment App',
    value: '5,9%',
    detail: 'snabbare initiering i OD',
  },
  {
    label: 'Skanning',
    value: '77,6%',
    detail: 'snabbare skanning med extern skanner',
  },
  {
    label: 'Kvittoutskrift',
    value: '55,1%',
    detail: 'snabbare utskrift med Epson',
  },
];

export default function ThesisSection(): JSX.Element {
  return (
    <section
      className="section-block thesis-section"
      data-glow
    >
      <div className="thesis-copy">
        <p className="eyebrow">Examensarbete</p>

        <h3>
          On-device kontra off-device integration
          med Verifones PSDK
        </h3>

        <p>
          Explorativ fallstudie där två Android-baserade
          POS-integrationer jämfördes utifrån teknisk implementation,
          nätverkskommunikation, hårdvaruberoenden och
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
          <p className="eyebrow">Fokusområden</p>

          <ul>
            {thesisHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="thesis-grid">
          <article data-glow>
            <SiJetpackcompose />
            <span>
              OD gav en mer sammanhållen arkitektur där betalning,
              skanner och kvittoutskrift hanterades inom samma enhet.
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
              OffD introducerade nätverkslogik och anslutningshantering
              genom kommunikation mellan flera enheter via TCP/IP.
            </span>
          </article>

          <article data-glow>
            <SiSqlite />
            <span>
              Ett gemensamt abstraktionslager möjliggjorde hög
              kodåteranvändning mellan OD och OffD.
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
            OD gav en mer sammanhållen och mobil lösning medan OffD
            gav större flexibilitet genom extern hårdvara och
            kringutrustning.
          </p>
        </div>
      </div>
    </section>
  );
}