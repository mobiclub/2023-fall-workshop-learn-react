import { SectionProps, SpanProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'
import { FnHeading } from './FnHeading'
import { Header } from './Header'
import { Heading } from './Heading'

export type SlideProps = SectionProps & {
	slideNum?: {current: number, total: number}
}
export const TableOfContents = ({ children, className, slideNum, ...props }: SlideProps) => {
	return (
		<section
			className={twMerge("flex flex-col", "h-screen border-b border-b-slate-200", className)}
			{...props}
		>
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
					<p>04. The "Rendering Lifecycle"</p>
				</section>
			</div>
			{slideNum && <SlideNum current={slideNum.current} total={slideNum.total} />}
		</section>
	)
}

export type SlideNumProps = SpanProps & {
	current: number,
	total: number,
}
export const SlideNum = ({current, total, className, ...props}: SlideNumProps) => {
	const totalFmt = total.toString().padStart(2, '0');
	const currentFmt = current.toString().padStart(2, '0');

	return (
		<span className="flex flex-row text-slate-400 mt-auto" {...props}>
			{currentFmt} / {totalFmt}
		</span>
	)
}
