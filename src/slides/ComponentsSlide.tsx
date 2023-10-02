import { Heading } from '@/components/Heading'
import { SlideProps, SlideSplit } from '@/components/Slide'

export type ComponentsSlideProps = SlideProps
export const ComponentsSlide = ({ children, className, slideNum, ...props }: ComponentsSlideProps) => {
	return (
		<SlideSplit {...props}
			column1Content={
				<header className='flex flex-col gap-2'>
					<span>Chapter 1</span>
					<Heading level={1}>
						Components
					</Heading>
					<Heading level={2}>
						A reuable unit of some UI
					</Heading>
				</header>
			}
			column2Content={
				<ol className='list-decimal list-inside'>
					<li>Functional components</li>
					<li>Component properties</li>
					<li>Component states</li>
				</ol>
			} 
		/>
	)
}
