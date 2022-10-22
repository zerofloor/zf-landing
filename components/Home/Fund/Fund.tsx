import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const Fund = ({
  fund,
}: {
  fund: Array<{ [key: string]: any }>;
}) => {
  return (
    <>
    
      {fund.map((fund_item, index) => {
        return <FundCard key={index} fund_item={fund_item} />;
      })}
    </>
  );
};
export default Fund;

const FundCard = ({ fund_item }: { [key: string]: any }) => {
  return (
    <div className="flex-col w-11/12 sm:w-5/12 sm:flex-row border border-neutral-700 rounded-md  flex justify-between sm:items-center p-2 px-4 mb-2">
      <div className="flex flex-col ">
        <span className="text-xl leading-5 mt-3">
          {fund_item.properties.Name.title[0].plain_text}
        </span>
        <span className="text-sm text-gray-300">
          {fund_item.properties.Description.rich_text[0].plain_text}
        </span>
      </div>
      <div className="flex mt-2 sm:mt-0 gap-x-4">
        <a
          className="bg-white text-gray-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-x-1 px-2 sm:px-3 p-1 sm:pb-0  sm:pt-1  rounded-full"
          target="_blank"
          rel="noreferrer"
          href={fund_item.properties.Visit.url}
        >
          visit <BsArrowUpRight />
        </a>
        {/* <a
          className="bg-white text-gray-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-x-1  px-2 sm:px-3 p-1 sm:pb-0 sm:pt-1 rounded-full"
          target="_blank"
          rel="noreferrer"
          href={portfolio_item.properties.Github.url}
        >
          github <BsGithub />
        </a> */}
      </div>
    </div>
  );
};
