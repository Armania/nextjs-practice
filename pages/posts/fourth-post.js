import Link from 'next/link';
import Head from 'next/head';


export default function FourthPost() {
	return (
    <>
      <Head>
        <title>Question #4</title>
        <meta name="description" content="Answer to question number 7." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</h1>
      <p>I am not too familiar with developing apps on servless could infrastructure. I would not know when to use edge functions, serverless functions or edge middleware. I would have to do more research on this topic.</p>
      <p><Link href="/posts/third-post">&lt;- Prev post</Link> | <Link href="/posts/fifth-post">Next post -&gt;</Link></p>
    </>
	);
}