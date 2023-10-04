import { IconExternalLink } from '@tabler/icons-react'
import Link from 'next/link'
import { SyntaxHighlighterProps } from 'react-syntax-highlighter'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/Button'

export type CodeBlockProps = SyntaxHighlighterProps & {
	canCopy?: boolean,
}
export const CodeBlock = ({
	children,
	canCopy = true,
	Url,
	...props
}: SyntaxHighlighterProps) => {
	const styles = twMerge(
		'flex flex-row items-center gap-1',
		'text-slate-500',
		'border-b border-b-white',
		'hover:border-b hover:border-b-slate-500'
	)
	return (
		<div className="flex flex-row items-start justify-between p-4 rounded-md bg-slate-100">
			<SyntaxHighlighter
				useInlineStyles={false}
				{...props}
			>
				{children}
			</SyntaxHighlighter>
			{canCopy && 
			<Link
				href={`${Url}`}
				target='_blank'
				className={styles}
				>
				<IconExternalLink size={24} className="ml-1" />
			</Link>}
		</div>
	)
}
