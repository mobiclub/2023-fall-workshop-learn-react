import { CodeBlock } from '@/components/CodeBlock'
import { SlideHeading } from '@/components/Heading'

export const _2_5_States = () => {
	return (
		<div className='flex flex-col gap-8'>
			<SlideHeading level={2} subHeading='Chapter 2' heading='Component states' />
			<div className="flex flex-col gap-2 max-w-[70ch]">
				<p>Components often need to change what’s on the screen as a result of an interaction. </p>
				<p>Components need to “remember” things: the current input value, the current image, the number of MOMO coins. In React, this kind of component-specific memory is called state.</p>
				<CodeBlock language='javascript' Url='https://codesandbox.io/s/usestate-wc9zy9?file=/src/App.js'>
					{ComponentExample}
				</CodeBlock>
			</div>
		</div>
	)
}

const ComponentExample = `import { useState } from "react";

function Momo({ image, onGetRich }) {
  return (
    <button onClick={() => onGetRich()}>
      <img src={image} alt="MOMO" height="100" />
    </button>
  );
}

`