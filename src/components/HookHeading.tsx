import Link from 'next/link'
import { InlineCode, InlineCodeFnArg } from './InlineCode'
import { IconExternalLink } from '@tabler/icons-react'
import { twMerge } from 'tailwind-merge'

export type HookHeadingProps = {
	hookName: string,
	fnArgs?: InlineCodeFnArg[],
}
export const HookHeading = ({hookName, fnArgs}: HookHeadingProps) => {
	const Separator = () => <span className="text-sm text-slate-400 select-none" aria-hidden>/</span>;

	return (
		<header className='flex flex-col gap-4'>
			<h2 className="text-2xl">
				<InlineCode.FnSignature fnName={hookName} fnNameClassName="text-blue-700" />
			</h2>
			<span className="flex flex-row gap-4 items-center text-l">
				<InlineCode.FnSignature fnName={hookName} fnArgs={fnArgs} />
				<Separator />
				<HookHeadingLink hookName={hookName} />
			</span>
		</header>
	)
}

export const HookHeadingLink = ({hookName}: {hookName: string}) => {
	const styles = twMerge(
		'flex flex-row items-center gap-1',
		'text-slate-500',
		'hover:border-b hover:border-b-slate-500'
	)

	return (
		<Link
			href={`https://react.dev/reference/react/${hookName}`}
			target='_blank'
			className={styles}
		>
			Docs
			<IconExternalLink size={24} className="ml-1" />
		</Link>
	)
}
