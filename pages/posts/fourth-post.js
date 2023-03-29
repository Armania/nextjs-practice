import Link from 'next/link'

export default function FourthPost() {
	return (
    <div>
      <h1>When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</h1>
      <p>I am not too familiar with developing apps on servless could infrastructure. I would not know when to use edge functions, serverless functions or edge middleware. I would have to do more research on this topic.</p>
      <p><Link href="/posts/third-post">&lt;- Prev post</Link> | <Link href="/posts/fifth-post">Next post -&gt;</Link></p>
    </div>
	);
}