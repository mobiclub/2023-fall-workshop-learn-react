import { SlideHeading } from '@/components/Heading'
import { CodeBlock } from '@/components/CodeBlock'

export const _1_1_History = () => {
	return (
		<div className='flex flex-col gap-8'>
			<SlideHeading level={2} subHeading='Chapter 1' heading='React History' />
			<div className="flex flex-col gap-2 max-w-[70ch]">
				<p>React was created by Jordan Walke, a software engineer at Facebook. He built a framework called FBolt in 2011, and this project evolved into React, which was open sourced in 2013, at JSConf US. From then on, React&rsquo;s popularity rose steadily. </p> 
			</div>
			<div className="flex flex-col gap-2 max-w-[70ch]">
				<p>React is a way to build user interfaces. It is only concerned with what you see on the front-end. </p>
				<p>React makes user interfaces very easy to build by cutting each page into pieces. We call these pieces components.</p>
				<CodeBlock language='javascript'>
					{`const HelloWorld = () => <div>Hello World</div>;`}
				</CodeBlock>
			</div>
		</div>
	)
}
