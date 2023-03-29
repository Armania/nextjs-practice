export default function SecondPost(){
	return (
		<div>
      <h1>Describe how you solved a challenge that one of your previous support teams faced. How did you determine your solution was successful?</h1>

      <p>While working as a product support engineer at VisualIQ, our support team had difficulty tracking the progress/statuses of our customers &quot;data ingestion&quot; process. </p>

      <p>Our team&quot;s responsibility was to track our customers&quot; daily data ingestion processes. These process jobs took 6-10 hours to complete for each customer, and it was common for errors to arise and then crash the servers processing the data.</p>

      <p>Our team worked on a 24-hour rotation to support our customers around the globe. Therefore, we would have to hand over the status of each active customer to our teams in India to monitor the process that carried over from shift to shift.</p>

      <p>I decided to build a tool that would automate the process of tracking the data ingestion process&quot;s status and display the customer&quot;s current status.</p>

      <p>This dashboard allowed us to, at a glance, check the status of all running processes of our customers.</p>

      <h2>How we were able to measure the impact of this tool?</h2>

      <p>If a customer&quot;s previous data had not been processed by the time the next day&quot;s data came in, this forced us to start the data ingestion process for that customer manually. We called this a &ldquo;delayed data ingestions process.&rdquo; We noticed that we no longer had customers whose data ingestion needed to be delayed. </p>

      <p>If a customer&quot;s data were ingested late, they would see the data missing in their UI. This would lead to a ticket or email to our account team for help. We tracked these requests. Before the dashboard, we would have 5-7 delayed data a week on avg. After the dashboard, this happened once or twice every two weeks. </p>

      <p>These delays were more commonly due to data size rather than due to the time-consuming procedure of finding and restarting processes.</p>

      <p><a href="/posts/first-post">&lt;- Prev post</a> | <a href="/posts/third-post">Next post -&gt;</a></p>
		</div>
	);
}