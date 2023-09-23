import { CodeProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

export type InlineCodeProps = CodeProps
export const InlineCode = ({ children, className, ...props }: InlineCodeProps) => {
	return (
		<code
			className={twMerge("inline-flex flex-row bg-slate-50 p-1 rounded-md", className)}
			{...props}
		>
			{children}
		</code>
	)
}
