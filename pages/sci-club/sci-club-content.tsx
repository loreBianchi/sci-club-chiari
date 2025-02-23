export default function SciClubContent() {
  return (
    <div className="mx-auto px-4 mb-20">
      <div className="mt-5 mb-20">
        <h2 className="mt-2 text-lg font-medium text-slate-900">
          Statuto
        </h2>
        <p className="mt-1 text-base leading-7 text-slate-700">
          Scarica lo statuto del nostro Sci Club <a href="/assets/docs/statuto.pdf" className="text-blue-600 hover:underline" target="_blank">statuto</a>
        </p>
      </div>
      <div className="mt-5 mb-20">
        <h2 className="mt-2 text-lg font-medium text-slate-900">
          Regolamento
        </h2>
        <p className="mt-1 text-base leading-7 text-slate-700">
          Clicca il link per scaricare il regolamento <a href="/assets/docs/Regolamento.pdf" className="text-blue-600 hover:underline" target="_blank">regolamento</a>
        </p>
      </div>
      <div className="mt-5 mb-20">
        <h2 className="mt-2 text-lg font-medium text-slate-900">
          Safeguarding
        </h2>
        <p className="mt-1 text-base leading-7 text-slate-700">
          Clicca il link per scaricare l'<a href="/assets/docs/safeguarding.pdf" className="text-blue-600 hover:underline" target="_blank">informativa</a>
        </p>
      </div>
      <div className="mt-5 mb-20">
        <h2 className="mt-2 text-lg font-medium text-slate-900">
          Direttivo
        </h2>
        <ul className="list-disc text-base leading-7 text-slate-700 list-inside mt-1">
          <li><b>Presidente</b>: Luigi Recaldini</li>
          <li><b>Vicepresidente</b>: Simone Bonetti</li>
          <li><b>Segretario</b>: Oscar Recaldini</li>
          <li><b>Consiglieri</b>: Alessandro Clerici, Cesare Paderni</li>
        </ul>

      </div>
    </div>
  );
}
