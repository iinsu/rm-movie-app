import Head from "next/head";

interface SeoType {
  title: string;
}

const Seo = ({ title }: SeoType) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default Seo;
