import { twMerge } from 'tailwind-merge';
import { InlineCodeProps, InlineCode } from './InlineCode';

export type FnSignatureArg = {
	name: string,
	isOptional?: boolean,
}
export type FnSignatureProps = InlineCodeProps & {
	fnName: string,
	fnArgs?: FnSignatureArg[],
	fnNameClassName?: string,
}

export const FnSignature = ({
	fnName,
	fnArgs = [],
	fnNameClassName,
	...props
}: FnSignatureProps) => {
	const fnNameTw = twMerge('text-purple-700', fnNameClassName);
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
			<span className={fnNameTw}>{fnName}</span>
			{argItems.length !== 0
				? <>
					<span className={outerSynTw}>(</span>
					<span className="flex flex-row gap-1">{argItems}</span>
					<span className={outerSynTw}>)</span>
				</>
				: <span className={outerSynTw}>()</span>}
		</InlineCode>
	)
}
