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

export type InlineCodeFnArg = {
	name: string,
	isOptional?: boolean,
}
export type InlineCodeFnSignatureProps = InlineCodeProps & {
	fnName: string,
	fnArgs?: InlineCodeFnArg[],
	fnNameClassName?: string,
}
InlineCode.FnSignature = ({
	fnName,
	fnArgs = [],
	fnNameClassName,
	...props
}: InlineCodeFnSignatureProps) => {
	const fnNameTw = 'text-purple-700';
	const outerSynTw = 'text-slate-400';
	const innerSynTw = 'text-slate-300';

	const argItems = fnArgs && fnArgs.map((arg, i) => {
		const lastIndex = fnArgs.length - 1;
		return (
			<span>
				<span className="text-slate-800">{arg.name}</span>
				{arg.isOptional && <span className={innerSynTw}>?</span>}
				{i !== lastIndex && <span className={innerSynTw}>,</span>}
			</span>
		)
	})

	return (
		<InlineCode className="bg-[unset]" {...props}>
			<span className={twMerge(fnNameTw, fnNameClassName)}>{fnName}</span>
			<span className={outerSynTw}>(</span>
			{argItems && <span className="flex flex-row gap-1">{argItems}</span>}
			<span className={outerSynTw}>)</span>
		</InlineCode>
	)
}
