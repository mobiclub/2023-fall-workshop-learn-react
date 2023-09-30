import { Heading } from '@/components/Heading'
import { SlideProps, SlideSplit } from '@/components/Slide'

export type TableOfContentsProps = SlideProps
export const TableOfContents = ({ children, className, slideNum, ...props }: TableOfContentsProps) => {
	return (
		<SlideSplit {...props}
			column1Content={
				<header>
					<Heading level={1}>
						Table of Contents
					</Heading>
				</header>
			}
			column2Content={
				<ol className='list-decimal list-inside'>
					<li>Preparing your environment</li>
					<li>Components</li>
					<li>React hooks and state</li>
					<li>The Rendering Lifecycle</li>
				</ol>
			} />
	)
}
