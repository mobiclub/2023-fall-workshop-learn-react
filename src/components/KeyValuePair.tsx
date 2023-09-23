import { ReactNode } from 'react'
import { SectionProps } from 'react-html-props'

export type KeyValuePairProps = SectionProps & {
	k: ReactNode,
	v: ReactNode,
}
export const KeyValuePair = ({k, v}: KeyValuePairProps) => {
	return (
		<section className="flex flex-col gap-2">
			<p className='uppercase'>{k}</p>
			<p className='text-xl'>{v}</p>
		</section>
	)
}
