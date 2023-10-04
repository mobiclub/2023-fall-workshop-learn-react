'use client';

import {
	PopoverArrow,
	PopoverContent,
	PopoverPortal,
	PopoverProps,
	PopoverTrigger,
	Root as PopoverRoot
} from '@radix-ui/react-popover';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Highlight } from './Highlight';

export type LearnTermProps = PopoverProps & {
	term: string,
	def: ReactNode,
	popoverContentClassName?: string,
}

export const LearnTerm = ({term, def, popoverContentClassName}: LearnTermProps) => {
	const popoverContentTw = twMerge(
		'bg-white',
		'rounded p-2 w-[260px] focus:outline-none',
		'drop-shadow-2xl',
		'data-[state=open]:data-[side=top]:animate-slideDownAndFade',
		'data-[state=open]:data-[side=right]:animate-slideLeftAndFade',
		'data-[state=open]:data-[side=bottom]:animate-slideUpAndFade',
		'data-[state=open]:data-[side=left]:animate-slideRightAndFade',
		popoverContentClassName,
	)

	return (
		<PopoverRoot>
			<PopoverTrigger asChild>
				<Highlight>{term}</Highlight>
			</PopoverTrigger>
			<PopoverPortal>
				<PopoverContent
				className={popoverContentTw}
				sideOffset={5}
				>
				<div className="flex flex-col gap-1">
					<div className="text-l font-bold">
						{term}
					</div>
					<div className="text-md">{def}</div>
				</div>
				<PopoverArrow className="fill-white drop-shadow-2xl" />
				</PopoverContent>
			</PopoverPortal>
		</PopoverRoot>
	)
}
