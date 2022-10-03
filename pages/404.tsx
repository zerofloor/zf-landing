// import React from "react";
// import Layout from "../components/Layout/Layout.component";
// import PageError from "../component/PageError/PageError";

// export default function NotFoundPage() {
//   return <Layout>{/* <PageError /> */}</Layout>;
// }

import { useRouter } from 'next/router';
import { FC } from 'react';
import { CSSProperties } from 'react';

const NotFound: FC = () => {
  const { locale } = useRouter();

  const style: CSSProperties = {
      height: '100vh',
      fontSize: '3em',
      textAlign: 'center',
      padding: '15%',
  };

  return (
      <div style={style}>
        <h1>404</h1>
        <p>Page not 
            <span className="
            font-extrabold
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-purple-400
            to-pink-600"> found </span> 
            🥺</p>
      </div>
  );
};

export default NotFound;