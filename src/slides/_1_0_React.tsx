import { CodeBlock } from '@/components/CodeBlock'
import { CodeSandbox } from '@/components/CodeSandbox'
import { FnHeading } from '@/components/FnHeading'
import { Heading } from '@/components/Heading'

export const _1_0_React = () => {
	return (
		<div className='flex flex-row gap-8'>
				<section>
					<span>Chapter 1</span>
					<Heading level={1}>About React</Heading>
					<br />
				<div className="flex flex-col gap-2 max-w-[70ch]">
					<p>React is a way to build user interfaces. It is only concerned with what you see on the front-end. </p>
					<p>React makes user interfaces very easy to build by cutting each page into pieces. We call these pieces components.</p>
					<CodeBlock language='javascript'>
						{`const HelloWorld = () => <div>Hello World</div>;`}
					</CodeBlock>
				</div>
			</section>
		</div>
	)
}
