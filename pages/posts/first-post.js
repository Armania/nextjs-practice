import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost(){
	return (
		<>
      <Head>
        <title>Question #1</title>
        <meta name="description" content="Answer to question number 1." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
		  <h1>What do you want to learn or do more of at work?</h1>
		   <p>Fundementally, I love to solve complex problems. I enjoy building and working with technology. Last but not least, I enjoy working with customers and helping them solve their problems. I hope to do all of this in my next role.</p>
			 <p>I would also like to.</p>
			<ul>
				<li>learn more about the product development process.</li>
				<li>earn more about cloud infrastructure and how to build serverless applications.</li>
				<li>earn more about the design process and how to build a great user experience.</li>
			</ul>
			<p>My goal is to build a product managers skill set. I believe that as a PM I will be able to use my versatility to be most impactful on a team.</p>
			<p><Link href="/posts/second-post">Next -&gt;</Link></p>
		</>
	);
}
