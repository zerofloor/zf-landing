import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const Portfolio = ({
  portfolio,
}: {
  portfolio: Array<{ [key: string]: any }>;
}) => {
  return (
    <>
      <div
      style={{ maxWidth: "60%" }}
      className="flex justify-center flex-wrap gap-x-4 gap-y-3 mt-12 mb-4 "
    >
      <div className="relative cursor-pointer rounded-md flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/bitcoin.png" className="w-32" alt="ethereum" />
      </div>
      <div className="relative cursor-pointer rounded-md flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/ethereum.png" className="w-36" alt="dydx" />
      </div>
      <div className="relative cursor-pointer flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/polygon.png" className="w-32" alt="polygon" />
      </div>
    </div>
    <div
      style={{ maxWidth: "60%" }}
      className="flex justify-center flex-wrap gap-x-4 gap-y-3"
    >
      <div className="relative cursor-pointer rounded-md flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/deus.png" className="w-36" alt="deus" />
      </div>
      
      <div className="relative cursor-pointer flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/binance.png" className="w-36" alt="binance" />
      </div>
      <div className="relative cursor-pointer rounded-md flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/uniswap.webp" className="w-36" alt="uniswap" />
      </div>
    </div>
    <div
      style={{ maxWidth: "60%" }}
      className="flex justify-center flex-wrap gap-x-4 gap-y-3 "
    >
      <div className="relative cursor-pointer rounded-md flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/dydx.svg" className="w-16" alt="dydx" />
      </div>
      <div className="relative cursor-pointer flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/okx.png" className="w-20" alt="okx" />
      </div>
      <div className="relative cursor-pointer flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/ftx.png" className="w-20" alt="ftx" />
      </div>
    </div>
    
    </>
  );
};
export default Portfolio;
