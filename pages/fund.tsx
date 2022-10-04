import { Client } from "@notionhq/client";
import Head from "next/head";
import Fund from "../components/Home/Fund/Fund";
import userData from "../components/userData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const FundPage = ({
  fund,
}: {
  fund: Array<{ [key: string]: any }>;
}) => {
  return (
    <>
      <Head>
        <title key="title">{`fund - ${userData.name}`}</title>
      </Head>
      
      <div className="flex flex-col w-full items-center mt-8">
        <h1 className="mb-3">fund</h1>
        
        <Fund fund={fund} />
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      fund: fundResponse.results,
    },
    // revalidate: 10,
  };
}
