import { Heading } from '@/components/Heading'

export const HooksTocColumn1 = () => {
	return (
		<header className='flex flex-col gap-2'>
			<span>Chapter 3</span>
			<Heading level={1}>
				Hooks
			</Heading>
			<Heading level={2}>
				A way of managing component states
			</Heading>
		</header>
	)
}

export const HooksTocColumn2 = () => {
	return (
		<ol className='list-decimal list-inside'>
			<li>Hook basics</li>
			<li>useEffect()</li>
			<li>useState()</li>
			<li>useCallback()</li>
		</ol>
	)
}
