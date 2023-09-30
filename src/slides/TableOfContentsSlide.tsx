import { Heading } from '../components/Heading'
import { Slide, SlideProps } from '../components/Slide'

export type TableOfContentsProps = SlideProps & {
	slideNum?: {current: number, total: number}
}
export const TableOfContents = ({ children, className, slideNum, ...props }: TableOfContentsProps) => {
	return (
		<Slide {...props}>
			<div className ="grid grid-cols-2 h-full">
				<section className="bg-slate-50 p-24">
					<header>
						<Heading level={1}>
							Table of Contents
						</Heading>
					</header>
				</section>
				<section className="bg-white p-24">
					<p>01. Preparing your environment</p>
					<br></br>
					<p>02. Components</p>
					<br></br>
					<p>03. React hooks and state</p>
					<br></br>
					<p>04. The Rendering Lifecycle</p>
				</section>
			</div>
		</Slide>
	)
}
