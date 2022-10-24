import Posts from "../components/Home/Posts/Posts";
import Profile from "../components/Home/Profile/Profile";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import { Client } from "@notionhq/client";
import Head from "next/head";
import Contact from "../components/Home/Contact/Contact";
import userData from "../components/userData";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import BigNumber from "bignumber.js";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = ({
  posts,
  portfolio,
  fundData,
}: {
  posts: Array<{ [key: string]: any }>;
  portfolio: Array<{ [key: string]: any }>;
  fundData: {
    aum: number;
    totalCapitalContributed: number;
    currentPrice: number;
    roi: number;
    currentProfits: number;
  };
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title key="title">{`web3 crypto fund - ${userData.name}`}</title>
      </Head>
      <Profile />
      {/* <div className="mt-12 text-xl mb-20">{userData.quote}</div> */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-white-900 sm:text-4xl md:mx-auto">
          {t("home.A crypto native")} <span className="
            bg-clip-text
            font-extrabold
            text-transparent
            bg-gradient-to-r 
            from-purple-400
            to-pink-600">{t("home.web3 fund")}</span>
        </h2>
        <p className="text-base text-white-700 md:text-lg">
        {t("home.Home description")}
        </p>
      </div>
      <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-black rounded-sm transition-color sm:items-stretch sm:flex-row">
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
            {fundData.aum.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
            </h6>
            <p className="text-center md:text-base">
              {t("home.Assets Under Management")}
            </p>
          </div>
          <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
            {fundData.currentProfits.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
            </h6>
            <p className="text-center md:text-base">
            {t("home.Current Profits")}
            </p>
          </div>
          <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
              {fundData.roi.toLocaleString("en-US", {
                style: "percent",
                maximumFractionDigits: 2,
              })}
            </h6>
            <p className="text-center md:text-base">
            {t("home.Return of Investment")}
            </p>
          </div>
        </div>
      </div>
      <p className="mx-auto mb-4 text-white-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
      {t("home.Across")}
      </p>
      </div>
      {/* <span className="text-sm mb-3">investments</span>
      <Investments /> */}
      <span className="text-sm mt-16 mb-3">{t("home.updates")}</span>
      <Posts posts={posts} />
      <Link href="/posts">
        <a className="mt-6 text-gray-300 flex items-center gap-x-2 underline">
        {t("home.see more updates")} <BsArrowRight />
        </a>
      </Link>
      <span className="text-sm mt-24 mb-3">{t("home.portfolio")}</span>
      <Portfolio />
      <Link href="/portfolio">
        <a className="mt-4 text-gray-300 flex items-center gap-x-2 underline">
        {/* {t("home.see more portfolio")} <BsArrowRight /> */}
        </a>
      </Link>
      <Contact />
      <div className="border-t-2 h-6 w-4/5 sm:w-5/12 mt-28 border-neutral-600" />
    </>
  );
};

export default Home;

export async function getStaticProps( { locale} : {locale: any} ) {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const postsResponse = await notion.databases.query({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "Tags",
          multi_select: {
            contains: "homepage",
          },
        },
      ],
    },
  });
  const portfolioResponse = await notion.databases.query({
    database_id: process.env.NOTION_PORTFOLIO_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "Tags",
          multi_select: {
            contains: "homepage",
          },
        },
      ],
    },
    sorts: [
      {
        property: "Rank",
        direction: "ascending",
      },
    ],
  });
  // fetch fund data from the graph endpoint
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      posts: postsResponse.results,
      portfolio: portfolioResponse.results,
      fundData: {
        aum: aumNumber,
        totalCapitalContributed: totalCapitalContributedNumber,
        currentPrice: currentPriceNumber,
        roi: roiNumber,
        currentProfits: aumNumber - totalCapitalContributedNumber,
      },
    },
    // revalidate: 60,
  };
}
