import { CodeBlock } from '@/components/CodeBlock'
import { SlideHeading } from '@/components/Heading'
import { LearnTerm } from '@/components/LearnTerm'

export const C1Column1 = () => {
	return (
		<SlideHeading level={1} subHeading='Chapter 2' heading='What is a component?' />
	)
}

export const C1Column2 = () => {
	return <div className='flex flex-col gap-4'>
		<p>A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
		<p>You're separating that component's logic away from the rest of your application. Let's say you have a playing card, but you copy and pasted the card styles everywhere in your application.</p>
		<p>If you want to make a change to it, it'll be extremely tedious. Instead, you can make a <LearnTerm term="component" def="some text" /> and only change once to change everywhere! Think of it like a template.</p>
		<CodeBlock language='javascript' Url='https://codesandbox.io/s/component-z2ff99?file=/src/App.js:0-139'>
			{ComponentExample}
		</CodeBlock>
	</div>
}

const ComponentExample = `
function Momo() {
  return <button>MOMO coin</button>;
}
export default function App() {
  return <Momo></Momo>;
}
`