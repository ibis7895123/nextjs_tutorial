import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";
import Alert from "../../components/alert";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`);
        }}
      />

      <h1 className="rounded-2xl bg-slate-300 p-2 dark:bg-slate-500">
        First Post
      </h1>

      <Alert type="success">
        <p>Success!!!</p>
      </Alert>
      <Alert type="error">Error!!!</Alert>
    </Layout>
  );
}
