import TesseramentoCard from "./tesseramento-card";

export default function TesseramentoContent() {
  return (
    <div className="mx-auto px-4 mb-20">
      <h1 className="my-4 text-3xl">Tesseramento</h1>
      <div>
        <p className="mt-1 text-base leading-7 text-slate-700">
          Per partecipare alle nostre iniziative è necessario sottoscrivere la
          TESSERA SCI CLUB CHIARI ASD
        </p>
        <p className="mt-1 text-base leading-7 text-slate-700">
          Per sottoscrivere la tessera segui le seguenti istruzioni:
        </p>
        <ul className="list-disc text-base leading-7 text-slate-700 list-inside">
          <li>
            1 - ENTRA NEL FORMAT TESSERAMENTI TRAMITE IL LINK IN EVIDENZA E
            RICHIEDI LA TUA ISCRIZIONE
          </li>
          <li>2 - ATTENDI APPROVAZIONE DA PARTE DEL DIRETTIVO</li>
          <li>
            3 - UNA VOLTA APPROVATA L’ISCRIZIONE, RICEVERAI UNA MAIL CON IL LINK
            PER IL PAGAMENTO: E SARAI TESSERATO!
          </li>
        </ul>

        <p className="mt-1 text-base leading-7 text-slate-500">
          LINK TESSERAMENTO:{" "}
          <a
            href="https://www.wespoort.it/modulo-iscrizione-societa?society=32ad6a1a-5c52-4665-bf58-5623afdcfb98"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Modulo iscrizione
          </a>
        </p>
      </div>
      <div className="mt-10">
        <p className="mt-1 text-base leading-7 text-slate-500 mb-8 text-center">
          Per la stagione 2023/24 abbiamo previsto due possibilità di
          tesseramento.
        </p>
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-4 xl:gap-10 lg:space-y-0">
          <TesseramentoCard title="TESSERAMENTO BASE" price={"15 €"}>
            <>
              <p className="mt-1 text-base leading-7 text-slate-700">
                Per la stagione invernale 2023/2024 il costo è di 15€
                comprensivo di iscrizione allo Sci Club e di Assicurazione
                obbligatoria. L’iscrizione può essere effettuata direttamente in
                sede o tramite il link presente in questa pagina.
              </p>
              <h2 className="my-4 text-lg font-medium text-slate-900">
                Cosa viene assicurato:
              </h2>
              <div className="text-left">                
                <ul className="list-disc text-base leading-7 text-slate-700 list-inside">
                  <li>Morte (Massimali 80.000,00 €)</li>
                  <li>
                    Invalidità permanente (Massimali 80.000,00 € - Franchigia 9%
                    assoluta. “Tabella Lesioni” di cui all’Allegato “A” del
                    D.P.C.M. 3 novembre 2010.)
                  </li>
                  <li>Garanzie speciali - Art. 18 Punto h</li>
                  <li>
                    Responsabilità Civile Terzi (Massimali 100.000,00 € -{" "}
                    <b>franchigia 500,00 €</b>)
                  </li>
                </ul>
                <p>
                  Per le condizioni di polizza “TESSERA TIPO A” potete visionare
                  il{" "}
                  <a
                    href="https://www.opeslombardia.it/_files/ugd/c0f4ae_1e3ebab6fac6497c8ebf42d6207f87aa.pdf"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    modulo
                  </a>
                </p>
              </div>
            </>
          </TesseramentoCard>
          <TesseramentoCard title="TESSERAMENTO PREMIUM - SCI SICURO" price={"30 €"}>
            <>
              <p className="mt-1 text-base leading-7 text-slate-700">
                Per la stagione invernale 2023/2024 il costo è di 30€
                comprensivo di iscrizione allo Sci Club e di Assicurazione
                obbligatoria. L’iscrizione può essere effettuata direttamente in
                sede o tramite il link presente in questa pagina.
              </p>
              <div className="text-left">

                <p className="mt-1 text-base leading-7 text-slate-700">
                  L’Assicurazione Sci Sicuro vale per l’attività sciistica
                  ricreativa sulla neve degli iscritti agli Sci Club (Sci Alpino,
                  Sci di Fondo e Snowboard Alpino).
                </p>
                <h2 className="mt-2 text-lg font-medium text-slate-900">
                  Altre attività incluse nell’Assicurazione:
                </h2>
                <p className="mt-1 text-base leading-7 text-slate-700">
                  L’Assicurazione Sci Sicuro è valida anche per le attività
                  organizzate dalla propria Associazione quali:
                </p>
                <ul className="list-disc text-base leading-7 text-slate-700 list-inside">
                  <li>Ginnastica pre sciistica</li>
                  <li>
                    Escursionismo in Montagna, sino al livello EEA=Escursionismo
                    esperti con attrezzature e EAI=Escursionismo in ambienti
                    innevati, ciaspole
                  </li>
                </ul>
                <h2 className="mt-2 text-lg font-medium text-slate-900">
                  Durata dell’assicurazione:
                </h2>
                <p className="mt-1 text-base leading-7 text-slate-700">
                  L’Assicurazione Sci Sicuro è stagionale .<br />
                  La polizza è valida dalle ore 24.00 del giorno di attivazione e
                  cessa alle ore 24.00 del 30/09/2024.
                </p>
                <h2 className="mt-2 text-lg font-medium text-slate-900">
                  Validità territoriale:
                </h2>
                <p className="mt-1 text-base leading-7 text-slate-700">
                  L’Assicurazione Sci Sicuro è valida per tutti i sinistri
                  avvenuti in Italia e in Europa.
                </p>
                <h2 className="mt-2 text-lg font-medium text-slate-900">
                  Limiti di età per la sottoscrizione:
                </h2>
                <p className="mt-1 text-base leading-7 text-slate-700">
                  L’Assicurazione Sci Sicuro è sottoscrivibile per Assicurati di
                  età compresa tra i 3 e gli 80 anni.
                </p>
                <p className="mt-1 text-base leading-7 text-slate-700">
                  Per le condizioni di polizza potete visitare il sito:{' '}
                  <a
                    href="https://www.scisicuro.it"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    scisicuro.it
                  </a>

                </p>
              </div>
            </>
          </TesseramentoCard>
        </div>
      </div>
    </div>
  );
}
