import { CodeBlock } from '@/components/CodeBlock'
import { FnHeading } from '@/components/FnHeading'

export const UseEffectSlide = () => {
	return (
		<div className='flex flex-col gap-8'>
			<FnHeading fnName='useEffect' fnArgs={[
				{name: 'effect'},
				{name: 'dependencies', isOptional: true},
			]} />
			<div className="flex flex-col gap-2 max-w-[70ch]">
				<p>Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.</p>
				<br/>
				<p>Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, you might not need an Effect.</p>
			</div>
		</div>
	)
}
