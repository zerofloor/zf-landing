import { Client } from "@notionhq/client";
import Head from "next/head";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import Assets from "../components/Home/Portfolio/Assets";
import userData from "../components/userData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const PortfolioPage = ({
  ipfsData,
}: {
  ipfsData: {
    absolutePnl30D: number;
    percentPnl30D: number;
    volume30D: number;
  };
}) => {
  return (
    <>
      <Head>
        <title key="title">{`portfolio - ${userData.name}`}</title>
      </Head>
      <div className="flex flex-col w-full items-center mt-8">
        {/* <h1 className="mb-3">portfolio</h1> */}
        {/* <Portfolio/> */}
      </div>
      <p></p>
      {/* <a
        href={userData.github}
        target="_blank"
        rel="noreferrer"
        className="mt-10 text-gray-300 text-sm underline"
      >
        view more on my github <BsGithub className="inline" />
      </a> */}
      <Assets/>
    </>
  );
};
export default PortfolioPage;

export async function getStaticProps( { locale} : {locale: any} ) {
  // Smartfund integration
  const resp = await fetch(
    "https://ipfs.app.smartfunds.xyz/ipfs/bafybeidj63khw7ml4dnmwee3ew3552unzexq7qt35rqy4mlaxxrz6cux3m",
    {
      method: "GET",
    }
  );
  
  const ipfsRespJson = await resp.json();

  console.log(ipfsRespJson);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      ipfsData: {
        absolutePnl30D: "Number(ipfsRespJson.tradingPnls.absolutePnl30D)",
        percentPnl30D: "Number(ipfsRespJson.tradingPnls.percentPnl30D)",
        volume30D: "Number(ipfsRespJson.tradingPnls.volume30D)",
      },
    },
    // revalidate: 10,
  };
}
