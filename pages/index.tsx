import Investments from "../components/Home/Investments/Investments";
import Posts from "../components/Home/Posts/Posts";
import Profile from "../components/Home/Profile/Profile";
import Projects from "../components/Home/Projects/Projects";
import { Client } from "@notionhq/client";
import Head from "next/head";
import Contact from "../components/Home/Contact/Contact";
import userData from "../components/userData";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
// import Stats from "../components/Home/Stats/Stats";
import BigNumber from "bignumber.js";

const Home = ({
  posts,
  projects,
  fundData,
}: {
  posts: Array<{ [key: string]: any }>;
  projects: Array<{ [key: string]: any }>;
  stats: Array<{ [key: string]: any }>;
  fundData: {
    aum: number;
    totalCapitalContributed: number;
    currentPrice: number;
    roi: number;
  };
}) => {
  return (
    <>
      <Head>
        <title key="title">{`web3 crypto fund - ${userData.name}`}</title>
      </Head>
      <Profile />
      <div className="mt-12 text-xl mb-20">{userData.quote}</div>
      <div className="mt-12 text-xl mb-20">
        AUM:{" "}
        {fundData.aum.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
      <div className="mt-12 text-xl mb-20">
        Capital Contributed:{" "}
        {fundData.totalCapitalContributed.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
      <div className="mt-12 text-xl mb-20">
        Price:{" "}
        {fundData.currentPrice.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 4,
        })}
      </div>
      <div className="mt-12 text-xl mb-20">
        ROI:{" "}
        {fundData.roi.toLocaleString("en-US", {
          style: "percent",
          maximumFractionDigits: 2,
        })}
      </div>
      {/* <span className="text-sm mb-3">investments</span>
      <Investments /> */}
      <span className="text-sm mt-16 mb-3">updates</span>
      <Posts posts={posts} />
      <Link href="/posts">
        <a className="mt-6 text-gray-300 flex items-center gap-x-2 underline">
          see more updates <BsArrowRight />
        </a>
      </Link>
      <span className="text-sm mt-24 mb-3">projects</span>
      <Projects projects={projects} />
      <Link href="/projects">
        <a className="mt-4 text-gray-300 flex items-center gap-x-2 underline">
          see more projects <BsArrowRight />
        </a>
      </Link>
      <Contact />
      <div className="border-t-2 h-6 w-4/5 sm:w-5/12 mt-28 border-neutral-600" />
    </>
  );
};

export default Home;

export async function getStaticProps() {
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
  const projectsResponse = await notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DATABASE_ID!,
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
      posts: postsResponse.results,
      projects: projectsResponse.results,
      fundData: {
        aum: aumNumber,
        totalCapitalContributed: totalCapitalContributedNumber,
        currentPrice: currentPriceNumber,
        roi: roiNumber,
      },
    },
    revalidate: 60,
  };
}
