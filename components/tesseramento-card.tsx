import React from "react";

type Props = {
  title: string
  subTitle?: string
  price: string
  children: React.ReactNode
  icon?: React.ReactNode
  classNames?: string
}

export default function TesseramentoCard({ title, price, children, classNames = 'border-gray-100 bg-white', subTitle = '-', icon }: Props) {
  return (
    <div className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg border shadow-md xl:p-8 ${classNames}`}>
      <h3 className="mb-4 text-2xl font-semibold">
        {title}{icon}
      </h3>
      <h4 className="text-xl">{subTitle}</h4>
      <div className="flex justify-center items-baseline my-4">
        <span className="mr-2 text-3xl font-extrabold">{price}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}


