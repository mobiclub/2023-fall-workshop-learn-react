import { Slide, SlideProps } from '@/components/Slide'

import { Heading } from '../components/Heading'

export type ComponentsSlideProps = SlideProps
export const ComponentsSlide = ({ children, className, slideNum, ...props }: ComponentsSlideProps) => {
	return (
		<Slide {...props}>
			<div className ="grid grid-cols-2 h-full">
				<section className="bg-slate-50 p-24">
					<header>
						<Heading level={3}>
							Chapter 1
						</Heading>
						<Heading level={1}>
							Components
						</Heading>
						<Heading level={2}>
							A reuable unit of some UI
						</Heading>
					</header>
				</section>
				<section className="bg-white p-24">
					<p>1. Functional components</p>
					<p>2. Component properties</p>
					<p>3. Component states</p>
				</section>
			</div>
		</Slide>
	)
}
