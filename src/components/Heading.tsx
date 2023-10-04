import { HeadingProps as HtmlHeadingProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

export type HeadingLevel = HeadingProps['level']
export type HeadingProps = HtmlHeadingProps & {
	level: 1|2|3|4|5|6,
}

export const Heading = ({level, children, className, ...props}: HeadingProps) => {
	const HtmlTag = `h${level}` as const
	const styles = twMerge(
		level === 1 && 'text-5xl font-medium',
		level === 2 && 'text-3xl',
		level === 3 && 'text-xl font-medium',
	)

	return (
		<HtmlTag className={styles} {...props}>
			{children}
		</HtmlTag>
	)
}

export type SlideHeadingProps = Omit<HeadingProps, 'children'> & {
	heading: string,
	subHeading: string,
}
export const SlideHeading = ({level, subHeading, heading, className, ...props}: SlideHeadingProps) => {
	return (
		<header className='flex flex-col gap-1' {...props}>
			<span>{subHeading}</span>
			<Heading level={level}>{heading}</Heading>
		</header>
	)
}
