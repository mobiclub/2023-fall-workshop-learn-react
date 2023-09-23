import { Button, FloatingButton } from '@/components/Button';
import { CodeBlock } from '@/components/CodeBlock';
import { Header } from '@/components/Header';
import { HookHeading } from '@/components/HookHeading';
import { Slide } from '@/components/Slide';
import { IconArrowLeft, IconArrowRight, IconBrandGithubFilled } from '@tabler/icons-react';

export default function Home() {
	return (
		<main className="text-slate-800">
			<Header />
			<div className='fixed bottom-0 right-0 m-4 p-4 flex flex-row gap-2'>
				<Button kind="tertiary" className='border border-slate-200 drop-shadow-sm'><IconArrowLeft size={24} /></Button>
				<Button kind="tertiary" className='border border-slate-200 drop-shadow-sm'><IconArrowRight size={24} /></Button>
			</div>
			{/* <FloatingButton>
				<IconArrowDown size={24} />
			</FloatingButton> */}
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
					<section className="flex flex-col gap-2">
						<p className='uppercase'>Location</p>
						<p className='text-xl'>UH 121</p>
					</section>
					<section className="flex flex-col gap-2">
						<p className='uppercase'>Date</p>
						<p className='text-xl'>October 4<sup>th</sup>, 2023</p>
					</section>
					<section className="flex flex-col gap-2">
						<p className='uppercase'>Time</p>
						<p className='text-xl'>6:00 to 8:00 PM</p>
					</section>
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
				<HookHeading hookName='useEffect' fnArgs={[
					{name: 'effect', isOptional: false},
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
				<HookHeading hookName='useState' fnArgs={[
					{name: 'initialState', isOptional: false},
				]} />
				<div className="flex flex-col gap-2 max-w-[70ch]">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt volutpat interdum. Curabitur hendrerit aliquam auctor. Donec vestibulum ex eget pellentesque semper. Donec auctor bibendum erat, fermentum posuere mauris pulvinar ut.</p>
					<p>Nullam eu sapien euismod, sagittis neque sit amet, elementum risus.</p>
					<CodeBlock language='javascript'>
						{`const HelloWorld = () => <div>Hello World</div>;`}
					</CodeBlock>
				</div>
			</Slide>
		</main>
	)
}
