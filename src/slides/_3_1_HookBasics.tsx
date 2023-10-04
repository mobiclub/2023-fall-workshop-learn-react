import { CodeBlock } from '@/components/CodeBlock'
import { SlideHeading } from '@/components/Heading'

export const _3_1_HookBasics = () => {
	return (
		<div className='flex flex-col gap-8'>
			<SlideHeading level={2} subHeading='Chapter 3' heading='Hook Basics' />
			<div className="flex flex-col gap-2 max-w-[70ch]">
				<p>Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. </p>
				<p>A few examples of hooks include:</p>
				<li>useEffect</li>
				<li>useState</li>
				<li>useCallBack</li>
				
			</div>
		</div>
	)
}
