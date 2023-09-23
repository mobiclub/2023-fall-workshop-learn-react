import { ButtonProps as HtmlButtonProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

export type ButtonProps = HtmlButtonProps & {
	kind?: 'primary' | 'secondary' | 'tertiary',
	shape?: 'rounded' | 'circle',
	size?: 'sm' | 'md',
}

export const Button = ({
	className,
	children,
	kind = 'primary',
	shape = 'rounded',
	size = 'md',
	...props}: ButtonProps
) => {
	const circleShape = ['rounded-full',
		size === 'sm' && 'p-1',
		size === 'md' && 'p-2'];
	
	const roundedShape = ['rounded-md',
		size === 'sm' && 'py-1 px-2',
		size === 'md' && 'py-2 px-4'];

	const styles = twMerge(
		'inline-flex gap-2 items-center justify-center',
		shape === 'rounded' && roundedShape,
		shape === 'circle' && circleShape,
		kind === 'primary' && 'bg-slate-800 text-white',
		kind === 'secondary' && 'bg-white text-slate-800 border-2 border-slate-800',
		kind === 'tertiary' && 'bg-white text-slate-800 border border-slate-200 drop-shadow-sm',
		className,
	)

	return (
		<button className={styles} {...props}>
			{children}
		</button>
	)
}

export const FloatingButton = ({className, children, ...props}: ButtonProps) => {
	return (
		<Button
			shape='circle'
			className={twMerge("fixed bottom-0 right-0 m-8 p-4", className)}
			{...props}
		>
			{children}
		</Button>
	)
}
