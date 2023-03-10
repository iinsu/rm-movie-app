import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";
import "../styles/global.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Hydrate state={pageProps.results}>
          <ReactQueryDevtools initialIsOpen={true} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
