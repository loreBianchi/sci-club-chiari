export default function TesseramentoCard({ title, price, children }) {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <div className="flex justify-center items-baseline my-4">
        <span className="mr-2 text-3xl font-extrabold">{price}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}


