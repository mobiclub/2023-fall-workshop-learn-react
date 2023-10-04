"use client"; // This is a client component 👈🏽
import { Heading } from '@/components/Heading';
import { SlideShow } from '@/components/Slide';
import { _1_0_React } from '@/slides/_1_0_React';
import { _2_0_Components } from '@/slides/_2_0_Components';
import { _2_4_Properties } from '@/slides/_2_4_Properties';
import { _2_5_States } from '@/slides/_2_5_States';
import { _2_6_vDOM } from '@/slides/_2_6_vDOM';
import {_3_1_HookBasics } from '@/slides/_3_1_HookBasics';
import { C1Column1, C1Column2 } from '@/slides/ComponentsSlide1';
import { MOMOClicker } from '@/slides/MOMOClicker';
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
					props: { className: "justify-between gap-[unset]" },
					showSlideNum: false,
					content: <TitleSlide />,
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
								<li>About React</li>
								<li>Components</li>
								<li>Hooks</li>
								<li>MOMO Clicker!</li>
							</ol>
					}
				},
				{
					layout: 'single',
					props: { className: "p-24 justify-between" },
					showSlideNum: true,
					content: <_1_0_React />,
				},
				{
					layout: 'two-column',
					props: { className: "p-24 gap-8" },
					content: {
						column1: <C1Column1 />,
						column2: <C1Column2 />,
					}
				},
				{
					layout: 'single',
					props: { className: "p-24 justify-between" },
					showSlideNum: false,
					content: <_2_4_Properties />,
				},
				{
					layout: 'single',
					props: { className: "p-24 justify-between" },
					showSlideNum: false,
					content: <_2_5_States />,
				},
				{
					layout: 'single',
					props: { className: "p-24 justify-between" },
					showSlideNum: false,
					content: <_3_1_HookBasics />,
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
					content: <MOMOClicker />,
				},
				{
					layout: 'single',
					props: { className: "p-24 gap-8" },
					showSlideNum: false,
					content: <ResourcesSlide />,
				},
				
			]} />
		</main>
	)
}
