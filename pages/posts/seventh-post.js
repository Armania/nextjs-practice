import Link from 'next/link'

export default function SeventhPost(){
  return (
    <div>
      <h1>How could we improve or alter this familiarization exercise?</h1>
      <p>I would add a section or question to have candidates describe themself. This would allow you to get to know the candidate more. Also, It could be a good writing warm-up exercise to write about yourself before writing the answers to the questions above.</p>
      <p>With that....</p>
      <h2>About Armani Appolon</h2>
      <ul>
        <li>Pronouns: <em>He/Him</em></li>
        <li>Fun fact: I am <strong>6&quot;8&ldquo;</strong> <em>(201cm) tall</em></li>
        <li>I love to read/listen/watch anything on <strong>History</strong></li>
        <li>Currently listening to &rdquo;The Silk Road&ldquo; by Peter Frankopan</li>
        <li>Lover of <strong>Jazz, 90&quot;s RnB &amp; Hip-Hop</strong></li>
        <li>I play the Alto-Saxophone</li>
        <li>I play hours of <strong>Call of Duty: Warzone</strong> in my spare time <em>(psn: TheRealArmani)</em></li>
        <li>Currently Watching <strong>Abbot Elementary.</strong>
        </li>
        <li>Currently reading, <em>&rdquo;Kill the Price&ldquo;</em> by Dan Fogarty </li>
        <li>How to reach me: <em><Link href="mailto:armaniappolon@gmail.com">armaniappolon@gmail.com</Link></em> </li>
      </ul>
			<p><Link href="/posts/sixth-post">-&lt; Prev post</Link> | <Link href="/posts/second-post">First post -&gt;</Link></p>
    </div>
  )
}


