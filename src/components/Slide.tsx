import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { ReactNode } from 'react'
import { DivProps, SectionProps, SpanProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/Button'
import { Header } from '@/components/Header'

export type SlideShowSlideLayout = SlideShowSlide['layout']
export type SlideShowSlide = 
	{ props?: SlideProps, showSlideNum?: boolean } & (
		| { layout: 'single', content: ReactNode }
		| { layout: 'two-column', content: { column1: ReactNode, column2: ReactNode } }
	)

export type SlideShowProps = Omit<DivProps, 'children'> & {
	slides: SlideShowSlide[],
}

export const SlideShow = ({slides, className, ...props}: SlideShowProps) => {
	const slidesTotal = slides.length;

	return (
		<div {...props}>
			<Header />
			<SlideShowNav />
			{slides.map((slide, i) => {
				const { layout, content, showSlideNum, props } = slide;

				return layout === 'single'
				? <Slide slideNum={{current: i + 1, total: slidesTotal}} showNum={showSlideNum} {...props}>
						{content}
					</Slide>
				 : <SlideSplit {...props}
						column1Content={content.column1}
						column2Content={content.column2} />
			})}
		</div>
	)
}

export type SlideShowNavProps = Omit<DivProps, 'children'>
export const SlideShowNav = ({className, ...props}: SlideShowNavProps) => {
	return (
		<div className={twMerge('fixed bottom-0 right-0 m-4 p-4 flex flex-row gap-2 z-10', className)} {...props}>
			<Button kind="tertiary"><IconArrowLeft size={24} /></Button>
			<Button kind="tertiary"><IconArrowRight size={24} /></Button>
		</div>
	)
}

export type SlideProps = SectionProps & {
	slideNum?: {current: number, total: number},
	showNum?: boolean,
}
export const Slide = ({ children, className, slideNum, showNum = true, ...props }: SlideProps) => {
	return (
		<section
			className={twMerge("flex flex-col", "h-screen border-b border-b-slate-200", className)}
			{...props}
		>
			{children}
			{showNum && slideNum && <SlideNum current={slideNum.current} total={slideNum.total} />}
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
		<Slide {...props} showNum={false}>
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
