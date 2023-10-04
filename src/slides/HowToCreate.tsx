import { CodeBlock } from '@/components/CodeBlock'
import { Heading } from '@/components/Heading'

export const HowToCreateSlide1 = () => {
	return (
		<>
			<Heading level={2}>Creating a component</Heading>
			<div className='flex flex-row gap-4 align-center'>
				<div>
					{/* <Heading level={3}></Heading> */}
					<CodeBlock language='javascript'>
						{FunctionalComponentExample}
					</CodeBlock>
				</div>
				{/* <div>
					<Heading level={3}>Classes</Heading>
					<CodeBlock language='javascript'>
						{ClassComponentExample}
					</CodeBlock>
				</div> */}
			</div>
		</>
	)
}

const FunctionalComponentExample = `export function Greeting = () => {
	return (
		<div>Hello World!</div>
	)
}`

const ClassComponentExample = `import { Component } from 'react'

export class Greeting extends React.Component {
	render() {
		return (
			<div>Hello World!</div>
		)
	}
}`
