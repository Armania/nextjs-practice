import Link from 'next/link';
import Head from 'next/head';

export default function SixthPost(){
  return (
    <div>
      <Head>
        <title>Question #6</title>
        <meta name="description" content="Answer to question number 6." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>What do you think is one of the most common problems which customers ask Vercel for help with? <br/> How would you help customers to overcome common problems, short-term and long-term? </h1>
      <p>I am not sure what would be the most common issue customers face. I would assume it would be handling build issues.</p>
      <p>To answer the second part of this question there are a few ways I would suggest to help cusomters.</p>
      <ul>
        <li>Provide a library of documentation, blog articles, and other learning outlets for customers to find answers to their questions or issues.</li>
        <li>Improve the details in the error messages customers are seeing. </li>
        <li>Provide training and education events to help customers stay informed on common product issues, or updates on product releases/updates.</li>
      </ul>
      <p><Link href="/posts/fifth-post">&lt;- Prev post</Link> | <Link href="/posts/seventh-post">Next post -&gt;</Link></p>
    </div>
  )
}