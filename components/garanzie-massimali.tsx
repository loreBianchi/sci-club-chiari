import GaranziaMassimale from "../interfaces/garanzia-massimale";

interface GaranzieMassimaliProps {
  infortuni: GaranziaMassimale[];
  respCivileTerzi: GaranziaMassimale[];
  assistenza: GaranziaMassimale[];
}

export default function GaranzieMassimali({
  infortuni,
  respCivileTerzi,
  assistenza,
}: GaranzieMassimaliProps) {
  return (
    <div className="mx-auto px-4 mt-10">
      <h1 className="my-4 text-2xl">TESSERAMENTO PREMIUM - SCI SICURO</h1>
      <p className="mt-2 text-base leading-7 text-slate-700">
        Le seguenti informazioni sono applicate per il tesseramento Premium - sci sicuro
      </p>
      <h1 className="my-4 text-2xl">Garanzie e massimali</h1>
      <div className="my-10">
        <h2 className="my-2 text-lg font-medium text-slate-900">
          ASSICURAZIONE INFORTUNI
        </h2>
        <table className="table-auto w-full text-left order-separate border-spacing-2 border border-slate-400 border-collapse">
          <thead>
            <tr>
              <th className="w-2/3 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 text-left">
                Garanzie
              </th>
              <th className="w-1/3 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 text-left">
                Massimali
              </th>
            </tr>
          </thead>
          <tbody>
            {infortuni.map((infortunio: any) => (
              <tr key={infortunio.garanzia}>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500">
                  {infortunio.garanzia}
                  <br />
                  {infortunio?.subGaranzia && (
                    <span className="text-sm">{infortunio.subGaranzia}</span>
                  )}
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500">
                  {infortunio.massimale}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-base leading-7 text-slate-700">
          Le spese mediche relative ai punti <b>6/7/8</b> saranno rimborsate
          solo per le cure ricevute al rientro al luogo di residenza, purche’
          effettuate nei <b>90 giorni</b> successivi la data dell’infortunio. La
          liquidazione avverra’ applicando una franchigia sul totale spesepunti
          4-5-6-7-8 pari a <b>30,00 Euro</b>.
        </p>
      </div>
      <div className="my-10">
        <h2 className="my-2 text-lg font-medium text-slate-900">
          ASSICURAZIONE RESPONSABILITA’ CIVILE VERSO TERZI
        </h2>
        <table className="table-auto w-full text-left order-separate border-spacing-2 border border-slate-400 border-collapse">
          <thead>
            <tr>
              <th className="w-2/3 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 text-left">
                Garanzie
              </th>
              <th className="w-1/3 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 text-left">
                Massimali
              </th>
            </tr>
          </thead>
          <tbody>
            {respCivileTerzi.map((infortunio: any) => (
              <tr key={infortunio.garanzia}>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500">
                  {infortunio.garanzia}
                  <br />
                  {infortunio?.subGaranzia && (
                    <span className="text-sm">{infortunio.subGaranzia}</span>
                  )}
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500">
                  {infortunio.massimale}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-base leading-7 text-slate-700">
          La franchigia (Euro 400,00) verrà richiesta all’Assicurato dalla
          Società dopo la liquidazione del danno a terzi.
        </p>
      </div>
      <div className="my-10">
        <h2 className="my-2 text-lg font-medium text-slate-900">
          ASSICURAZIONE RESPONSABILITA’ CIVILE VERSO TERZI
        </h2>
        <p className="mt-2 text-base text-bold leading-7 text-slate-700 mb-2">
          Inoltre Assistiamo 24.00 su 24.00 tramite Centrale Operativa ERV dal 1907 specialista Assicurazione Viaggi e Turismo per:
        </p>
        <table className="table-auto w-full text-left order-separate border-spacing-2 border border-slate-400 border-collapse">
          <tbody>
            {assistenza.map((infortunio: any) => (
              <tr key={infortunio.garanzia}>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500">
                  {infortunio.garanzia}
                  <br />
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500">
                  {infortunio.massimale}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
