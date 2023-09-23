import { IconMenuDeep } from '@tabler/icons-react'

export const Header = () => {
	return (
		<header className="sticky top-0 mb-[-100px] flex flex-row p-8">
			<IconMenuDeep
				size={36}
				strokeWidth={1.5}
				strokeLinecap='square'
				shapeRendering='crispEdges'
				className='cursor-pointer ml-auto' />
		</header>
	)
}