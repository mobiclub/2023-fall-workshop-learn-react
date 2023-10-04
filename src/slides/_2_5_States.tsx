import { CodeBlock } from '@/components/CodeBlock'
import { CodeSandbox } from '@/components/CodeSandbox'
import { Heading } from '@/components/Heading'

export const _2_5_States = () => {
	return (
		<div className='flex flex-row gap-8'>
			<section>
				<span>Chapter 2</span>
				<Heading level={2}>Component states</Heading>
				<div className="flex flex-col gap-2 max-w-[70ch]">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt volutpat interdum. Curabitur hendrerit aliquam auctor. Donec vestibulum ex eget pellentesque semper. Donec auctor bibendum erat, fermentum posuere mauris pulvinar ut.</p>
					<p>Nullam eu sapien euismod, sagittis neque sit amet, elementum risus.</p>
					<CodeBlock language='javascript'>
						{`const HelloWorld = () => <div>Hello World</div>;`}
					</CodeBlock>
				</div>
			</section>
			<CodeSandbox
				props={{
					files: {},
					theme: 'auto',
					template: 'nextjs',
					options: {
						editorHeight: "400px",
						editorWidthPercentage: 50,
					}
				}} />
		</div>
	)
}
