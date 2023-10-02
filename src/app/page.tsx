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
import { ResourcesSlide } from '@/slides/ResourcesSlide';
import { TableOfContents } from '@/slides/TableOfContentsSlide';

export default function Home() {
	return (
		<main className="text-slate-800">
			<Header />
			<div className='fixed bottom-0 right-0 m-4 p-4 flex flex-row gap-2 z-10'>
				<Button kind="tertiary"><IconArrowLeft size={24} /></Button>
				<Button kind="tertiary"><IconArrowRight size={24} /></Button>
			</div>
			<Slide className="p-24 justify-between">
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
			</Slide>
			<Slide className='p-24'>
				<Heading level={2}>What is React all about?</Heading>
			</Slide>
			<TableOfContents slideNum={{current: 2, total: 24}} />
			<ComponentsSlide slideNum={{current: 3, total: 24}} />
			<Slide className='p-24 gap-8' slideNum={{current: 4, total: 24}}>
				<FnHeading fnName='useEffect' fnArgs={[
					{name: 'effect'},
					{name: 'dependencies', isOptional: true},
				]} />
				<div className="flex flex-col gap-2 max-w-[70ch]">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt volutpat interdum. Curabitur hendrerit aliquam auctor. Donec vestibulum ex eget pellentesque semper. Donec auctor bibendum erat, fermentum posuere mauris pulvinar ut.</p>
					<p>Nullam eu sapien euismod, sagittis neque sit amet, elementum risus.</p>
					<CodeBlock language='javascript'>
						{`const HelloWorld = () => <div>Hello World</div>;`}
					</CodeBlock>
				</div>
			</Slide>
			<Slide className='p-24 gap-8' slideNum={{current: 4, total: 23}}>
				<FnHeading fnName='useState' fnArgs={[
					{name: 'initialState'},
				]} />
				<div className="flex flex-col gap-2 max-w-[70ch]">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt volutpat interdum. Curabitur hendrerit aliquam auctor. Donec vestibulum ex eget pellentesque semper. Donec auctor bibendum erat, fermentum posuere mauris pulvinar ut.</p>
					<p>Nullam eu sapien euismod, sagittis neque sit amet, elementum risus.</p>
					<CodeBlock language='javascript'>
						{`const HelloWorld = () => <div>Hello World</div>;`}
					</CodeBlock>
				</div>
			</Slide>
			<ResourcesSlide />
		</main>
	)
}
