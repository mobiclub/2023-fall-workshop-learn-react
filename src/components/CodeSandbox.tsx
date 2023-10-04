'use client';

import {
	CodeEditorProps,
	PreviewProps,
	SandpackCodeEditor,
	SandpackPreview,
	SandpackProps,
	SandpackProvider,
} from '@codesandbox/sandpack-react'

export type CodeSandboxProps = {
	props: SandpackProps,
	previewProps?: PreviewProps,
	codeEditorProps?: CodeEditorProps,
}

export const CodeSandbox = ({previewProps, codeEditorProps, ...props}: CodeSandboxProps) => {
	return (
		<SandpackProvider template="react" {...props}>
			<div className='w-full flex flex-col border border-slate-100'>
				<SandpackCodeEditor {...codeEditorProps} />
				<SandpackPreview {...previewProps} />
			</div>
		</SandpackProvider>
	)
}
