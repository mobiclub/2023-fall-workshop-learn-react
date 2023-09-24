import { ReactNode } from 'react'
import { SectionProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

export type KeyValuePairProps = SectionProps & {
	k: ReactNode,
	v: ReactNode,
	kClassName?: string,
	vClassName?: string,
}
export const KeyValuePair = ({
	k,
	v,
	className,
	kClassName,
	vClassName,
	...props
}: KeyValuePairProps) => {
	return (
		<section className={twMerge("flex flex-col gap-2", className)} {...props}>
			<p className={twMerge('uppercase', kClassName)}>{k}</p>
			<p className={twMerge('text-xl', vClassName)}>{v}</p>
		</section>
	)
}
