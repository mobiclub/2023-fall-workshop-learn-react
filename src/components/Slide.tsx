import { ReactNode } from 'react'
import { SectionProps, SpanProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

export type SlideProps = SectionProps & {
	slideNum?: {current: number, total: number}
}
export const Slide = ({ children, className, slideNum, ...props }: SlideProps) => {
	return (
		<section
			className={twMerge("flex flex-col", "h-screen border-b border-b-slate-200", className)}
			{...props}
		>
			{children}
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

export type SlideSplitProps = SlideProps & {
	column1Content: ReactNode,
	column2Content: ReactNode,
}
export const SlideSplit = ({
	children,
	className,
	slideNum,
	column1Content,
	column2Content,
	...props
}: SlideSplitProps) => {
	return (
		<Slide {...props}>
			<div className ="grid grid-cols-2 h-full">
				<section className="bg-slate-50 p-24">
					{column1Content}
				</section>
				<section className="bg-white p-24">
					{column2Content}
				</section>
			</div>
		</Slide>
	)
}
