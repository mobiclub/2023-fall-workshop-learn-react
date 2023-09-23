import Link, { LinkProps } from 'next/link'
import { FnSignature, FnSignatureArg } from '@/components/FnSignature'
import { IconExternalLink } from '@tabler/icons-react'
import { twMerge } from 'tailwind-merge'

export type FnHeadingProps = {
	fnName: string,
	fnArgs?: FnSignatureArg[],
}
export const FnHeading = ({fnName, fnArgs}: FnHeadingProps) => {
	const Separator = () => <span className="text-sm text-slate-400 select-none" aria-hidden>/</span>;

	return (
		<header className='flex flex-col gap-4'>
			<h2 className="text-2xl">
				<FnSignature
					fnName={fnName}
					fnNameClassName="text-blue-700" />
			</h2>
			<span className="flex flex-row gap-4 items-center text-l">
				<FnSignature
					fnName={fnName}
					fnArgs={fnArgs} />
				<Separator />
				<FnHeadingLink
					fnName={fnName}
					baseUrl='https://react.dev/reference/react/' />
			</span>
		</header>
	)
}

export type FnHeadingLinkProps = Omit<LinkProps, 'href'> & {
	fnName: string,
	baseUrl: string,
}
export const FnHeadingLink = ({fnName, baseUrl}: FnHeadingLinkProps) => {
	const styles = twMerge(
		'flex flex-row items-center gap-1',
		'text-slate-500',
		'border-b border-b-white',
		'hover:border-b hover:border-b-slate-500'
	)

	return (
		<Link
			href={`${baseUrl}${fnName}`}
			target='_blank'
			className={styles}
		>
			Docs
			<IconExternalLink size={24} className="ml-1" />
		</Link>
	)
}
