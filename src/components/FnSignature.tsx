import { twMerge } from 'tailwind-merge';

import { InlineCode,InlineCodeProps } from '@/components/InlineCode';

export type FnSignatureArg = {
	name: string,
	isOptional?: boolean,
}
export type FnSignatureProps = InlineCodeProps & {
	fnName: string,
	fnNameClassName?: string,
	fnArgs?: FnSignatureArg[],
	fnArgClassName?: string,
	fnArgListClassName?: string,
}

export const FnSignature = ({
	fnName,
	fnNameClassName,
	fnArgs = [],
	fnArgClassName,
	fnArgListClassName,
	...props
}: FnSignatureProps) => {
	const fnNameTw = twMerge('text-purple-700', fnNameClassName);
	const outerSynTw = 'text-slate-400';
	const innerSynTw = 'text-slate-300';
	const argListTw = twMerge("flex flex-row gap-1", fnArgListClassName);

	const argList = fnArgs && fnArgs.map((arg, i) => {
		const lastIndex = fnArgs.length - 1;
		const uniqueKey = `${fnName}-arg-${i}-${arg.name}`;
		return (
			<span key={uniqueKey} className={argListTw}>
				<span className="text-slate-800">{arg.name}</span>
				{arg.isOptional && <span className={innerSynTw}>?</span>}
				{i !== lastIndex && <span className={innerSynTw}>,</span>}
			</span>
		)
	})

	return (
		<InlineCode className="bg-[unset]" {...props}>
			<span className={fnNameTw}>{fnName}</span>
			{argList.length !== 0
				? <>
					<span className={outerSynTw}>(</span>
					<span className={argListTw}>{argList}</span>
					<span className={outerSynTw}>)</span>
				</>
				: <span className={outerSynTw}>()</span>}
		</InlineCode>
	)
}
