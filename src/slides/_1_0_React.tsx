import { SlideHeading } from '@/components/Heading'

export const _1_0_React = () => {
	return (
		<div className='flex flex-col gap-8'>
			<SlideHeading level={2} subHeading='Chapter 1' heading='About React' />
			<div className="flex flex-col gap-3 max-w-[70ch]">
				<p>React was created by Jordan Walke, a software engineer at Facebook. He built a framework called FBolt in 2011, and this project evolved into React, which was open sourced in 2013, at JSConf US. From then on, React&rsquo;s popularity rose steadily.</p>
				<br />
				<p>React is a way to build user interfaces. It is only concerned with what you see on the front-end. It makes user interfaces very easy to build by cutting each page into pieces. We call these pieces components.</p>
				<br />
				<p>Many well-known companies (including startups) use React, like: Amazon, Netflix, Twitter(?), Uber, Airbnb, Slack, Pinterest, and Facebook (duh!).</p>
			</div>
		</div>
	)
}
