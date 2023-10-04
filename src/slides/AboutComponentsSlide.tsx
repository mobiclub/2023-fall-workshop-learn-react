import { Heading } from '@/components/Heading'

export const AboutComponentsColumn1 = () => {
	return (
		<header className='flex flex-col gap-2'>
			<span>Chapter 2</span>
			<Heading level={1}>
				Components
			</Heading>
			<Heading level={2}>
				A reusable unit of some UI
			</Heading>
		</header>
	)
}

export const AboutComponentsColumn2 = () => {
	return (
		<ol className='list-decimal list-inside'>
			<li>Functional components</li>
			<li>Component properties</li>
			<li>Component states</li>
		</ol>
	)
}
