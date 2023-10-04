import { Heading } from '@/components/Heading';
import { SlideShow } from '@/components/Slide';
import { IntroSlide } from '@/slides/IntroSlide';
import { ResourcesSlide } from '@/slides/ResourcesSlide';
import { TitleSlide } from '@/slides/TitleSlide';
import { UseCallbackSlide } from '@/slides/UseCallbackSlide';
import { UseEffectSlide } from '@/slides/UseEffectSlide';
import { UseStateSlide } from '@/slides/UseStateSlide';

export default function Home() {
	return (
		<main className="text-slate-800">
			<SlideShow slides={[
				{
					layout: 'single',
					props: { className: "p-24 justify-between" },
					showSlideNum: false,
					content: <TitleSlide />,
				},
				{
					layout: 'single',
					props: { className: "p-24 justify-between" },
					showSlideNum: false,
					content: <IntroSlide />,
				},
				{
					layout: 'two-column',
					content: {
						column1: 
							<header>
								<Heading level={1}>
									Table of Contents
								</Heading>
							</header>,
						column2:
							<ol className='list-decimal list-inside'>
								<li>Preparing your environment</li>
								<li>Components</li>
								<li>React hooks and state</li>
								<li>The Rendering Lifecycle</li>
							</ol>
					}
				},
				{
					layout: 'two-column',
					content: {
						column1:
							<header className='flex flex-col gap-2'>
								<span>Chapter 1</span>
								<Heading level={1}>
									Components
								</Heading>
								<Heading level={2}>
									A reusable unit of some UI
								</Heading>
							</header>,

						column2:
						<ol className='list-decimal list-inside'>
							<li>Functional components</li>
							<li>Component properties</li>
							<li>Component states</li>
						</ol>,
					}
				},
				{
					layout: 'single',
					props: { className: "p-24 gap-8" },
					content: <UseEffectSlide />,
				},
				{
					layout: 'single',
					props: { className: "p-24 gap-8" },
					content: <UseStateSlide />,
				},
				{
					layout: 'single',
					props: { className: "p-24 gap-8" },
					content: <UseCallbackSlide />,
				},
				{
					layout: 'single',
					props: { className: "p-24 gap-8" },
					content: <ResourcesSlide />,
				},
			]} />
		</main>
	)
}
