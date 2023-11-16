import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Container from "../../components/container";
import { useMemo } from "react";
import dynamic from "next/dynamic";

export default function Contatti() {
  const Map = useMemo(
    () => 
      dynamic(() => import("../../components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const position: [number, number] = [45.5392, 9.9278];
  
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - Contatti`}</title>
      </Head>
      <Container>
        <div className="py-10 sm:py-12">
          <div className="lg:px-8">
            <div className="mx-auto px-4 mb-20">
              <h1 className="mt-4 text-3xl">Contatti</h1>
              <table className="my-10 table-auto">
                <tbody>
                  <tr>
                    <td className="py-4 pr-6 text-slate-800">Telefono</td>
                    <td className="py-4 pr-6 text-slate-800">
                      +39 366 300 58 02
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-slate-800">Facebook</td>
                    <td className="py-4 pr-6 text-slate-800">
                      <a
                        href="https://it-it.facebook.com/sciclubchiari.it/"
                        target="blank"
                        className="text-blue-600 hover:underline"
                      >
                        https://it-it.facebook.com/sciclubchiari.it/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-slate-800">E-mail</td>
                    <td className="py-4 pr-6 text-slate-800">
                      <a
                        className="text-blue-600 hover:underline"
                        href="mailto:info@sciclubchiari.it"
                      >
                        info@sciclubchiari.it{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-slate-800">Web</td>
                    <td className="py-4 pr-6 text-slate-800">
                      <a href="www.sciclubchiari.it">www.sciclubchiari.it</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <div className="flex h-12 bg-gray-100 d-flex justify-center items-center">
                  <h2 className="text-lg text-slate-900">
                    SCI CLUB CHIARI Via San Bernardino, 8 25032 Chiari (BS)
                  </h2>
                </div>
                <Map position={position} zoom={15} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
