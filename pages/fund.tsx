import { Client } from "@notionhq/client";
import Head from "next/head";
// import Fund from "../components/Home/Fund/Fund";
import userData from "../components/userData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BigNumber from "bignumber.js";
import { useTranslation } from "next-i18next";
import ReactTooltip from 'react-tooltip';


const date = new Date();

const FundPage = ({
  fund,
  fundData,
  dYdXData,
}: {
  fund: Array<{ [key: string]: any }>;
  fundData: {
    aum: number;
    totalCapitalContributed: number;
    currentPrice: number;
    roi: number;
  };
  dYdXData: {
    absolutePnl30D: number;
    percentPnl30D: number;
    volume30D: number;
  };
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title key="title">{`fund - ${userData.name}`}</title>
      </Head>
      
      <div className="flex flex-col w-full items-center mt-8">
        {/* <h1 className="mb-3">fund</h1> */}
        {/* <h2 className="mb-3">coming soon...</h2> */}
        {/* <Fund fund={fund} /> */}
        <div className="mt-6 sm:ml-12 sm:mt-12 flex flex-col gap-y-1 w-10/12  sm:w-3/5 md:w-1/2">
          <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
            <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
          <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
          </div>
          <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
          </div>
          <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
          </div>
        <div className="mx-auto pr-16" id="terminaltitle">
        <p className="text-center text-sm">Terminal</p>
        </div>

        </div>
          <div className="pl-1 pt-1 h-auto  text-green-200 font-mono text-s bg-black" id="console">
          <p className="pb-1 pt-2">{date.toUTCString()}</p>
          {/* <p className="pb-1">fund@zerofloor performance$ ./results</p> */}
          <p className="pb-10"></p>
          <p className="pb-1"><span className="
            from-purple-400 
            to-pink-600 
            bg-clip-text
            font-extrabold
            text-transparent
            bg-gradient-to-r">ZSL Fund Performance</span></p>
            <p data-tip="Total amount of money that shareholders invest in the fund" className="pb-1 text-white">Total Capital Contributed: <span className="pb-1 text-white">
            {fundData.totalCapitalContributed.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}</span></p>
          <p data-tip="Total market value of the fund investments" className="pb-1 text-white">Assets Under Management (AUM): <span className="pb-1 text-red-400">
            {fundData.aum.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}</span></p>
          <p className="pb-1 text-white">Return Of Investment (ROI): <span className="pb-1 text-red-400">
            {fundData.roi.toLocaleString("en-US", {
                style: "percent",
                maximumFractionDigits: 2,
              })}</span></p>
          <p data-tip="Total market value of the fund investments" className="pb-1 text-white">Current Token Price (ZSL): <span className="pb-1 text-red-400">
            {fundData.currentPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 3,
            })}</span></p>
          <p className="pb-10"></p>
          <p className="pb-1"><span className="
            from-purple-400 
            to-pink-600 
            bg-clip-text
            font-extrabold
            text-transparent
            bg-gradient-to-r">ZSL Fund Conditions</span></p>
            <ReactTooltip place="bottom" effect="solid" arrowColor="black" type="dark" textColor="black" backgroundColor="white" />
          <p data-tip="Percent of capital contributed paid to the manager yearly" className="pb-1 text-white">Management Fee: <span className="pb-1 text-white">2%</span></p>
          <p data-tip="Investors pay a percentage of profits to Fund Managers when exiting a fund." className="pb-1 text-white">Performance Fee: <span className="pb-1 text-white ">20%</span></p>
          <p className="pb-1 text-white">Minimum Investment Amount: <span className="pb-1 text-white ">$10</span></p>
          <p className="pb-1 text-white">Investment Lockup: <span className="pb-1 text-white ">No</span></p>
          <p className="pb-1 text-white">Token Symbol: <span className="pb-1 text-white ">ZSL</span></p>
          <p data-tip="The price increases accordingly as the fund's NAV grows." className="pb-1 text-white">Initial Token Price: <span className="pb-1 text-white ">$0.01</span></p>
          <p className="pb-1 text-white">Contract Address: <span className="pb-1 text-white ">0x2347...dc89</span></p>
          <p className="pb-1 text-white">Manager Address: <span className="pb-1 text-white ">0x5d54...d7bc</span></p>
          <p className="pb-1 text-white">Fee Beneficiary: <span className="pb-1 text-white ">0x0000...0000</span></p>
        </div>
        <p className="pb-10"></p>
          <p className="pb-1"><span className="
            bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
            bg-clip-text
            font-extrabold
            text-transparent">ZSL dYdX Trading (last 30 days)</span></p>
          <p className="pb-1 text-white">Profit & Loss: <span className="pb-1 text-green-400">
          {dYdXData.absolutePnl30D.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })} ({dYdXData.percentPnl30D.toLocaleString("en-US", {
              style: "percent",
              currency: "USD",
              maximumFractionDigits: 2,
            })})</span></p>
          <p className="pb-1 text-white">Volume traded: <span className="pb-1">
            {dYdXData.volume30D.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}</span></p>

          <p className="pb-10"></p>
      </div> 
      </div>
        
      </div>
      
      
      {/* <a
        href={userData.github}
        target="_blank"
        rel="noreferrer"
        className="mt-10 text-gray-300 text-sm underline"
      >
        view more on my github <BsGithub className="inline" />
      </a> */}
    </>
  );
};
export default FundPage;

export async function getStaticProps( { locale} : {locale: any} ) {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const fundResponse = await notion.databases.query({
    database_id: process.env.NOTION_PORTFOLIO_DATABASE_ID!,
    sorts: [
      {
        property: "Rank",
        direction: "ascending",
      },
    ],
  });

  // Smartfund integration
  const resp = await fetch(
    "https://api.thegraph.com/subgraphs/name/smart-money-finance/smartfunds-v2-polygon",
    {
      method: "POST",
      body: JSON.stringify({
        query: `{
                  funds(where: { id: "0x2347254d5e6ee2505466452910379cb72ce5dc89" }, first: 1) {
                    initialPrice
                    latestNav {
                      aum
                      supply
                      totalCapitalContributed
                    }
                  }
                }
              `,
      }),
    }
  );
  // extract all values from the json response
  const respJson = await resp.json();
  const { initialPrice, latestNav } = respJson.data.funds[0];
  const { aum, totalCapitalContributed, supply } = latestNav;
  // convert units and calculate roi with BigNumber.js
  const initialPriceBN = new BigNumber(initialPrice).div(
    new BigNumber(10).pow(18)
  );
  const aumBN = new BigNumber(aum).div(new BigNumber(10).pow(6));
  const supplyBN = new BigNumber(supply).div(new BigNumber(10).pow(6));
  const totalCapitalContributedBN = new BigNumber(totalCapitalContributed).div(
    new BigNumber(10).pow(6)
  );
  let currentPriceBN = aumBN.div(supplyBN);
  if (currentPriceBN.isNaN()) {
    currentPriceBN = initialPriceBN;
  }
  const roiBN = currentPriceBN.div(initialPriceBN).minus(1);
  // convert bignumbers to regular js numbers
  const aumNumber = aumBN.toNumber();
  const totalCapitalContributedNumber = totalCapitalContributedBN.toNumber();
  const currentPriceNumber = currentPriceBN.toNumber();
  const roiNumber = roiBN.toNumber();


  // Smartfund integration
  const dydx_resp = await fetch(
      "https://api.dydx.exchange/v3/profile/ELDGHYWS",
      {
        method: "GET",
      }
    );
  
    const dydxRespJson = await dydx_resp.json();
    console.log(dydxRespJson);
    // const { absolutePnl30D, percentPnl30D, volume30D } = dydxRespJson.tradingPnls[0];
    // console.log(absolutePnl30D, percentPnl30D, volume30D);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      fundData: {
        aum: aumNumber,
        totalCapitalContributed: totalCapitalContributedNumber,
        currentPrice: currentPriceNumber,
        roi: roiNumber,
      },
      dYdXData: {
        absolutePnl30D: Number(dydxRespJson.tradingPnls.absolutePnl30D),
        percentPnl30D: Number(dydxRespJson.tradingPnls.percentPnl30D),
        volume30D: Number(dydxRespJson.tradingPnls.volume30D),
      },
    },
    // revalidate: 60,
  };
}
