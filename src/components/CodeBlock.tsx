import { SyntaxHighlighterProps } from 'react-syntax-highlighter'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'

export type CodeBlockProps = SyntaxHighlighterProps
export const CodeBlock = ({children, ...props}: SyntaxHighlighterProps) => {
	return (
		<SyntaxHighlighter
			className="p-4 rounded-md bg-slate-100"
			useInlineStyles={false}
			{...props}
		>
			{children}
		</SyntaxHighlighter>
	)
}
