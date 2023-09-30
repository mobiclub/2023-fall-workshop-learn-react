import { DivProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

export type CssValueProps = DivProps
export const CssValue = ({children}: CssValueProps) => {
	return (
		<div>
			{children}
		</div>
	)
}

export type CssSelectorProps = DivProps
export const CssSelector = ({children}: CssSelectorProps) => {
	return (
		<div>
			{children}
		</div>
	)
}

export type CssBlockProps = DivProps & {
	selector: string,
}
export const CssBlock = ({selector, className, children, ...props}: CssBlockProps) => {
	return (
		<div className='flex flex-col gap-1 font-mono' {...props}>
			<div className='flex flex-row gap-3'>
				<div className='text-orange-600'>{selector}</div>
				<div className='text-slate-400'>{'{'}</div>
			</div>
			<div className='ml-4'>
				{children}
			</div>
			<div className='text-slate-400'>{'}'}</div>
		</div>
	)
}

export type CssDeclProps = Omit<DivProps, 'children'> & {
	property: string,
	propertyClassName?: string,
	value: string,
	valueClassName?: string,
	synClassName?: string,
}
export const CssDecl = ({
	property,
	propertyClassName = '',
	value,
	valueClassName = '',
	synClassName = '',
	className,
	...props
}: CssDeclProps) => {
	const propertyTw = twMerge('text-blue-500', propertyClassName)
	const valueTw = twMerge('text-green-500 ml-2', valueClassName)
	const synTw = twMerge('text-slate-400', synClassName)
	const stylesTw = twMerge('flex flex-row font-mono', className)

	return (
		<div className={stylesTw} {...props}>
			<div className={propertyTw}>{property}</div>
			<div className={synTw}>:</div>
			<div className={valueTw}>{value}</div>
			<div className={synTw}>;</div>
		</div>
	)
}
