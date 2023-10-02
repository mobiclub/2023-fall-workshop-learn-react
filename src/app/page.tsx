import { IconArrowLeft, IconArrowRight, IconBrandGithubFilled } from '@tabler/icons-react';

import { Button } from '@/components/Button';
import { CodeBlock } from '@/components/CodeBlock';
import { FnHeading } from '@/components/FnHeading';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { KeyValuePair } from '@/components/KeyValuePair';
import { LinkPreview } from '@/components/LinkPreview';
import { Slide } from '@/components/Slide';
import { ComponentsSlide } from '@/slides/ComponentsSlide';
import { IntroSlide } from '@/slides/IntroSlide';
import { ResourcesSlide } from '@/slides/ResourcesSlide';
import { TableOfContents } from '@/slides/TableOfContentsSlide';
import { TitleSlide } from '@/slides/TitleSlide';
import { UseEffectSlide } from '@/slides/UseEffectSlide';
import { UseStateSlide } from '@/slides/UseStateSlide';

export default function Home() {
	return (
		<main className="text-slate-800">
			<Header />
			<div className='fixed bottom-0 right-0 m-4 p-4 flex flex-row gap-2 z-10'>
				<Button kind="tertiary"><IconArrowLeft size={24} /></Button>
				<Button kind="tertiary"><IconArrowRight size={24} /></Button>
			</div>
			<TitleSlide />
			<IntroSlide />
			<TableOfContents slideNum={{current: 2, total: 24}} />
			<ComponentsSlide slideNum={{current: 3, total: 24}} />
			<UseEffectSlide slideNum={{current: 4, total: 24}} />
			<UseStateSlide slideNum={{current: 5, total: 24}} />
			<ResourcesSlide />
		</main>
	)
}
