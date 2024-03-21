import Hero from "@/components/screens/home/hero";
import AboutOurProducts from "@/components/screens/home/about-our-products";
import OurWorks from "@/components/screens/home/our-works";
import OurProducts from "@/components/screens/home/our-products";
import { useQuery } from "@apollo/client";
import GET_HOME, { GetHomeResponse } from "@/lib/gql/queries/home.query";
import Config from "@/lib/config";
import Head from "next/head";

export default function Home() {
  const { data, loading } = useQuery<GetHomeResponse>(GET_HOME, {
    variables: {
      locale: Config.defaultLocale,
    },
  });

  if (loading) {
    return <></>;
  }
  return (
    <>
      <Head>
        <title>Solar</title>
      </Head>
      <main>
        <Hero
          background={data?.homePage.data.attributes.background || null}
          title={data?.homePage.data.attributes.title || ""}
          animatedTexts={data?.homePage.data.attributes.animatedTexts || []}
        />
        <AboutOurProducts data={data?.homePage.data.attributes.about || []} />
        <OurWorks data={data?.projects.data || []} />
        <OurProducts data={data?.products.data || []} />
      </main>
    </>
  );
}
