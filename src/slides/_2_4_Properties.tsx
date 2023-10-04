import { CodeBlock } from '@/components/CodeBlock'
import { SlideHeading } from '@/components/Heading'

export const _2_4_Properties = () => {
	return (
		<div className='flex flex-col gap-8'>
			<SlideHeading level={2} subHeading='Chapter 2' heading='Component Properties' />
			<div className="flex flex-col gap-2 max-w-[70ch]">
				<p>React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. </p>
				<p>Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.</p>
				<CodeBlock language='javascript' Url='https://codesandbox.io/s/properties-2jjgrr?file=/src/App.js'>
					{ComponentExample}
				</CodeBlock>
			</div>
		</div>
	)
}

const ComponentExample = `function Momo({ image }) {
  return (
    <button>
      <img src={image} alt="MOMO" height="100" />
    </button>
  );
}
export default function App() {
  return <Momo image="./MOMO.png"></Momo>;
}

`