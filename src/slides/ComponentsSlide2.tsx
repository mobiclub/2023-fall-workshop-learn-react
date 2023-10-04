import { Heading } from '@/components/Heading'

export const C2Column1 = () => {
	return (
		<header className='flex flex-col gap-2'>
			<span>Chapter 1</span>
			<Heading level={1}>
				Functional vs Class Components
			</Heading>
		</header>
	)
}

export const C2Column2 = () => {
	return <p>functional components are … functions, and class components are … classes. Surprising, I know!</p>
}
