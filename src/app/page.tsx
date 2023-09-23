import { IconArrowLeft, IconArrowRight, IconBrandGithubFilled } from '@tabler/icons-react';

import { Button } from '@/components/Button';
import { CodeBlock } from '@/components/CodeBlock';
import { FnHeading } from '@/components/FnHeading';
import { Header } from '@/components/Header';
import { KeyValuePair } from '@/components/KeyValuePair';
import { LinkPreview } from '@/components/LinkPreview';
import { Slide } from '@/components/Slide';

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
						<h1 className="text-5xl font-medium">Intro to React Workshop</h1>
						<span className="text-2xl">MOBI x HackUTA</span>
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
			<Slide>
				<div className="grid grid-cols-2 h-full">
					<section className="bg-slate-50 p-4">
						Column 1
					</section>
					<section className="bg-white p-4">
						Column 2
					</section>
				</div>
			</Slide>
			<Slide className='p-24 gap-8' slideNum={{current: 3, total: 23}}>
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
			<Slide className='p-24 gap-8'>
				<h2 className="text-2xl">Where to go from here?</h2>
				<div className="grid grid-cols-3 gap-4">
					<LinkPreview
						siteName='React Docs'
						url='https://react.dev/'
						desc='The official documentation by the engineers on the React team.' />
					<LinkPreview
						siteName='React Patterns'
						url='https://reactpatterns.com/'
						desc='A cheatsheet of short snippets and patterns for developing in React. Your new best friend.' />
					<LinkPreview
						siteName='MDN Web Docs'
						url='https://developer.mozilla.org/en-US/'
						desc='Documentation for HTML, CSS, JS, and more. Created by Mozilla, co-maintained by the open-source community.' />
					<LinkPreview
						siteName='Next.js Docs'
						url='https://nextjs.org/docs'
						desc='Documentation for the Next.js framework by Vercel, made for writing full-stack React applications.' />
					<LinkPreview
						siteName='Vite'
						url='https://vitejs.dev/'
						desc='A modern build tool and development server by Evan You, also fantastic for creating React applications.' />
					<LinkPreview
						siteName='Reactiflux Discod'
						url='https://discord.gg/reactiflux'
						desc='A friendly, online Discord community with over 200K members. Frequently hosts Q&As with engineers in the industry!' />
				</div>
			</Slide>
		</main>
	)
}
