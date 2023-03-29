import Link from 'next/link'

export default function ThirdPost(){
	return (
		<div>
      <h1>How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.</h1>

      <p>I need to become more familiar with Next.js. I am more familiar with Nuxt.</p>
			<p>My experience working in React vs. Vue has been that React, also Nextjs, by extension, are very JavaScript heavy. For example, you use CSS and HMTL in React via JavaScript. But with Nuxtjs and Vuejs, HTML, CSS, and JavaScript are managed outside JavaScript. </p>
			<p>This makes using HTML and CSS in Vue similar to using them outside of Vue/nuxt. This makes it easier to work with and understand if you are a front-end developer.</p>
      <p><Link href="/posts/second-post">&lt;- Prev post</Link> | <Link href="/posts/fourth-post">Next post -&gt;</Link></p>
		</div>
	);
}