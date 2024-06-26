import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/gql/apollo-client";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
