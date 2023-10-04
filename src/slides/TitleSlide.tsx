import { IconArrowRight, IconBrandGithubFilled } from '@tabler/icons-react'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { KeyValuePair } from '@/components/KeyValuePair';

export const TitleSlide = () => {
	return (
		<>
			<header className="flex flex-col gap-8 items-start">
				<div className="flex flex-col gap-1 items-start">
					<Heading level={1}>Intro to React Workshop</Heading>
					<Heading level={2}>MOBI x HackUTA</Heading>
				</div>
				<div className="flex flex-row gap-4">
					<Button kind='primary'>Enter <IconArrowRight size={24} /></Button>
					<Button kind='secondary'><IconBrandGithubFilled size={24} /> Source code</Button>
				</div>
			</header>
			<section className="flex flex-row gap-8">
				<KeyValuePair k='Location' v='UH 121' />
				<KeyValuePair k='Date' v={<>October 4<sup>th</sup>, 2023</>} />
				<KeyValuePair k='Time' v='6:00 to 8:00 PM' />
			</section>
		</>
	)
}
