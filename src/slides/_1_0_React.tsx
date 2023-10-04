import { CodeBlock } from '@/components/CodeBlock'
import { SlideHeading } from '@/components/Heading'

export const _1_0_React = () => {
	return (
		<div className='flex flex-col gap-8'>
			<SlideHeading level={2} subHeading='Chapter 1' heading='About React' />
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
