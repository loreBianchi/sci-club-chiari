import { GaranziaMassimale } from "./models";

interface GaranzieMassimaliProps {
  infortuni: GaranziaMassimale[];
  respCivileTerzi: any;
  assistenza: any;
}

export default function GaranzieMassimali({ infortuni, respCivileTerzi, assistenza }: GaranzieMassimaliProps) {
  return (
    <div className="mx-auto px-4">
      <h1 className="my-4 text-2xl">Garanzie e massimali</h1>
      <div className="mt-10">
        <h2 className="my-2 text-lg font-medium text-slate-900">
          ASSICURAZIONE INFORTUNI
        </h2>
        <table className="table-auto w-full text-left order-separate border-spacing-2 border border-slate-400 border-collapse">
          <thead>
            <tr>
              <th className="w-2/3 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 text-left">Garanzie</th>
              <th className="w-1/3 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 text-left">Massimali</th>
            </tr>
          </thead>
          <tbody>
            {infortuni.map((infortunio: any) => (
              <tr key={infortunio.garanzia}>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500">
                  {infortunio.garanzia}<br/>
                  {infortunio?.subGaranzia && <span className="text-sm">{infortunio.subGaranzia}</span>}
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500">{infortunio.massimale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
