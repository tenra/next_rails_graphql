import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from "@auth0/auth0-react";
import { RecoilRoot } from "recoil";
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Auth0Provider
      domain={process.env["NEXT_PUBLIC_AUTH0_DOMAIN"]!}
      clientId={process.env["NEXT_PUBLIC_AUTH0_CLIENT_ID"]!}
      audience={process.env["NEXT_PUBLIC_AUTH0_AUDIENCE"]!}
      redirectUri={`${process.env["NEXT_PUBLIC_BASE_URL"]}/login`}
    >
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </Auth0Provider>
  )
}
