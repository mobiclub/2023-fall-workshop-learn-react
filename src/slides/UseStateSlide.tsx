import { CodeBlock } from '@/components/CodeBlock'
import { FnHeading } from '@/components/FnHeading'
import { Heading, SlideHeading } from '@/components/Heading'

export const UseStateSlide = () => {
	return (
		<>
			<FnHeading fnName='useState' fnArgs={[
				{name: 'initialState'},
			]} />
			<div className="flex flex-col gap-2 max-w-[70ch]">
				<p>State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.</p>
				<p>To add state to a component, use one of these Hooks:</p>
				<li>useState declares a state variable that you can update directly.</li>
				<li>useReducer declares a state variable with the update logic inside a reducer function.</li>
			</div>
		</>
	)
}
