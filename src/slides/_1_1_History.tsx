import { SlideHeading } from '@/components/Heading'

export const _1_1_History = () => {
	return (
		<div className='flex flex-col gap-8'>
			<SlideHeading level={2} subHeading='Chapter 2' heading='React History' />
			<div className="flex flex-col gap-2 max-w-[70ch]">
				<p>React was created by Jordan Walke, a software engineer at Facebook. He built a framework called FBolt in 2011, and this project evolved into React, which was open sourced in 2013, at JSConf US. From then on, React&rsquo;s popularity rose steadily. </p> 
			</div>
		</div>
	)
}
