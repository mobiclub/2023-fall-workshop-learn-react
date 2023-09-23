import { SyntaxHighlighterProps } from 'react-syntax-highlighter'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { Button } from '@/components/Button'
import { IconClipboard } from '@tabler/icons-react'

export type CodeBlockProps = SyntaxHighlighterProps & {
	canCopy?: boolean,
}
export const CodeBlock = ({
	children,
	canCopy = true,
	...props
}: SyntaxHighlighterProps) => {
	return (
		<div className="flex flex-row p-4 rounded-md bg-slate-100">
			<SyntaxHighlighter
				useInlineStyles={false}
				{...props}
			>
				{children}
			</SyntaxHighlighter>
			{canCopy && 
			<Button kind="tertiary" className="p-0 ml-auto bg-[unset] border-0">
				<IconClipboard size={16} />
			</Button>}
		</div>
	)
}
