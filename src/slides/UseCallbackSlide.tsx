import { CodeBlock } from '@/components/CodeBlock'
import { FnHeading } from '@/components/FnHeading'

export const UseCallbackSlide = () => {
	return (
		<>
			<FnHeading fnName='useCallback' fnArgs={[
				{name: 'computeValue'},
				{name: 'dependencies', isOptional: true},
			]} />
			<div className="flex flex-col gap-2 max-w-[70ch]">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt volutpat interdum. Curabitur hendrerit aliquam auctor. Donec vestibulum ex eget pellentesque semper. Donec auctor bibendum erat, fermentum posuere mauris pulvinar ut.</p>
				<p>Nullam eu sapien euismod, sagittis neque sit amet, elementum risus.</p>
				<CodeBlock language='javascript'>
					{`const HelloWorld = () => <div>Hello World</div>;`}
				</CodeBlock>
			</div>
		</>
	)
}
