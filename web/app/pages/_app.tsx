import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from "@auth0/auth0-react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  //ログイン後のリダイレクト先を指定
  const redirectUri = `${process.env["NEXT_PUBLIC_BASE_URL"]}/login`;
  return (
    <Auth0Provider
      domain={process.env["NEXT_PUBLIC_AUTH0_DOMAIN"]!}
      clientId={process.env["NEXT_PUBLIC_AUTH0_CLIENT_ID"]!}
      audience={process.env["NEXT_PUBLIC_AUTH0_AUDIENCE"]!}
      redirectUri={redirectUri}
    >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Auth0Provider>
  )
}
