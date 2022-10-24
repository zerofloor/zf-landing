
const Portfolio = ({
}: {
}) => {
  return (
    <>
      <div
      style={{ maxWidth: "60%" }}
      className="flex justify-center flex-wrap gap-x-4 gap-y-3 mt-12 mb-4 "
    >
      <div className="relatisve cursor-pointer flex mb-2 mt-2 items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/bitcoin.png" className="w-28" alt="bitoin" />
      </div>
      <div className="relative cursor-pointer flex mb-2 mt-2 items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/ethereum.png" className="w-28" alt="ethereum" />
      </div>
      <div className="relative cursor-pointer flex mb-2 mt-2 items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/polygon.png" className="w-28" alt="polygon" />
      </div>
      <div className="relative cursor-pointer mb-2 mt-2 flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/deus.png" className="w-28" alt="deus" />
      </div>
      <div className="relative cursor-pointer mb-2 mt-2 flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/uniswap.webp" className="w-28" alt="uniswap" />
      </div>
      <div className="relative cursor-pointer mb-2 mt-2 flex items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/dydx.svg" className="w-28" alt="dydx" />
      </div>
      <div className="relative cursor-pointer flex mb-0 mt-2 items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/okx.png" className="w-28" alt="okx" />
      </div>
      <div className="relative cursor-pointer flex mb-0 mt-0 items-center justify-center text-lg leading-5">
      {/* eslint-disable @next/next/no-img-element */}
        <img src="../images/ftx.png" className="w-28" alt="ftx" />
      </div>
    </div>
    </>
  );
};
export default Portfolio;
