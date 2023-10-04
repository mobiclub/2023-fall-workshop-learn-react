import { IconExternalLink } from '@tabler/icons-react'
import Link, { LinkProps } from 'next/link'
import { twMerge } from 'tailwind-merge'

import { Heading } from '@/components/Heading'

export const _1_2_Industry = () => {
	const styles = twMerge(
		'flex flex-row items-center gap-1',
		'text-slate-500',
		'border-b border-b-white',
		'hover:border-b hover:border-b-slate-500'
	)
	return (
		<div className='flex flex-row gap-8'>
				<section>
					<span>Chapter 1</span>
					<Heading level={1}>React in the Industry</Heading>
					<br />
				<div className="flex flex-col gap-2 max-w-[70ch]">
					<p>React is a popular frontend framework for both well-known companies as well as startups.</p>
					<p>Amazon, Netflix, Twitter(?), Uber, Airbnb, Slack, Pinterest, and obviously Facebook all use React.</p>
				</div>
				<Link
					href={`https://www.topdevelopers.co/blog/top-technology-stacks-for-startups/`}
					target='_blank'
					className={styles}
				>
					Source
					<IconExternalLink size={24} className="ml-1" />
				</Link>
			</section>
		</div>
	)
}
