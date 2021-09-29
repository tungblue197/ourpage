import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "store/store";

function MyApp({ Component, pageProps }: AppProps & { Component: any }) {
  const getLayout = Component.getLayout ?? ((page: any) => page)
  return (
    <Provider store={store}>
      {
        getLayout(<Component {...pageProps}/>)
      }
    </Provider>
  );
}
export default MyApp;
