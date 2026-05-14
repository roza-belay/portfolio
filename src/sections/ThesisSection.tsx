import {
  SiKotlin,
  SiAndroid,
  SiJetpackcompose,
  SiSqlite,
} from 'react-icons/si';

import './styles/ThesisSection.css';

type ThesisResult = {
  label: string;
  value: string;
  detail: string;
};

const thesisHighlights = [
  'Systemarkitektur',
  'Nätverkskommunikation',
  'Hårdvaruberoenden',
  'Kvittoutskrift och skanning',
  'Integrations- och utvecklingskomplexitet',
];

const thesisResults: ThesisResult[] = [
  {
    label: 'Betalningsinitiering',
    value: '5,9%',
    detail: 'kortare initieringstid i on-device implementationen',
  },
  {
    label: 'Skanning',
    value: '77,6%',
    detail: 'snabbare skanning med extern handskanner',
  },
  {
    label: 'Kvittoutskrift',
    value: '55,1%',
    detail: 'snabbare utskrift med extern kvittoskrivare',
  },
];

export default function ThesisSection()  {
  return (
    <section className="section-block thesis-section" data-glow>
      <div className="thesis-copy">
        <p className="eyebrow">Examensarbete</p>

        <h3>
          On-device kontra off-device integration med Verifones Payment SDK
        </h3>

        <p>
          Explorativ fallstudie som undersöker hur valet mellan on-device och
          off-device integrationsstrategier påverkar implementationen av
          Android-baserade kassasystem utifrån systemarkitektur,
          nätverkskommunikation, hårdvaruberoenden och integrationskomplexitet.
        </p>

        <div className="thesis-meta">
          <span>FWK24S</span>
          <span>VT 26</span>
          <span>Angelika Friis & Roza Belay</span>
        </div>
      </div>

      <div className="thesis-content">
        <div className="thesis-question-card" data-glow>
          <p className="eyebrow">Analyserade områden</p>

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
              On-device gav en mer sammanhållen arkitektur där betalning,
              skanning och kvittoutskrift hanteras i samma enhet utan externa
              beroenden.
            </span>
          </article>

          <article data-glow>
            <SiKotlin />
            <span>
              Båda strategierna utvecklades i Kotlin och använde samma
              betalningsflöde via Verifones Payment SDK.
            </span>
          </article>

          <article data-glow>
            <SiAndroid />
            <span>
              Off-device introducerade nätverkskommunikation via TCP/IP mellan
              POS-applikation och betalterminal, vilket ökade komplexiteten.
            </span>
          </article>

          <article data-glow>
            <SiSqlite />
            <span>
              Ett gemensamt API-lager för betalnings- och integrationslogik
              möjliggjorde hög kodåteranvändning mellan
              integrationsstrategierna trots skillnader i hårdvara och
              kommunikation.
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
            Resultatet visar att skillnaderna främst ligger i arkitektur,
            nätverksberoenden och kringutrustning snarare än betalningslogiken.
            On-device är mer självständigt, medan off-device ger större
            flexibilitet.
          </p>
        </div>
      </div>
    </section>
  );
}