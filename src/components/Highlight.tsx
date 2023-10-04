import { MarkProps } from 'react-html-props';
import { twMerge } from 'tailwind-merge';

export type HighlightProps = MarkProps
export const Highlight = ({children, className, ...props}: HighlightProps) => {
	const styles = twMerge(
		'px-2 w-auto h-auto',
		'bg-yellow-200 border-b border-b-yellow-500',
		'cursor-pointer',
		className,
	)
	return (
		<mark className={styles} {...props}>
			{children}
		</mark>
	)
}
