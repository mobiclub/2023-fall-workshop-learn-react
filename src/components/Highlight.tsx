import { MarkProps } from 'react-html-props';

export type HighlightProps = MarkProps
export const Highlight = ({children, className, ...props}: HighlightProps) => {
	return (
		<mark className='border-dashed border-b-2 border-yellow-500 bg-yellow-100 px-2 bold' {...props}>
			{children}
		</mark>
	)
}
