"use client"; // This is a client component 👈🏽
import { Heading } from '@/components/Heading';
import { SlideShow } from '@/components/Slide';
import { ResourcesSlide } from '@/slides/ResourcesSlide';
import { TitleSlide } from '@/slides/TitleSlide';
import { UseCallbackSlide } from '@/slides/UseCallbackSlide';
import { UseEffectSlide } from '@/slides/UseEffectSlide';
import { UseStateSlide } from '@/slides/UseStateSlide';
import { MOMOClicker } from '@/slides/MOMOClicker';
import { _1_0_React } from '@/slides/_1_0_React';
import { _1_1_History } from '@/slides/_1_1_History';
import { _1_2_Industry } from '@/slides/_1_2_Industry';
import { _2_0_Components } from '@/slides/_2_0_Components';
import { _2_1_ComponentBasics } from '@/slides/_2_1_ComponentBasics';
import { _2_2_Functional } from '@/slides/_2_2_Functional';
import { _2_3_Class } from '@/slides/_2_3_Class';
import { _2_4_Properties } from '@/slides/_2_4_Properties';
import { _2_5_States } from '@/slides/_2_5_States';
import { _2_6_vDOM } from '@/slides/_2_6_vDOM';
import {_3_0_Hooks } from '@/slides/_3_0_Hooks';
import {_3_1_HookBasics } from '@/slides/_3_1_HookBasics';


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
					content: <_1_1_History />,
				},
				{
					layout: 'single',
					props: { className: "p-24 justify-between" },
					showSlideNum: true,
					content: <_1_2_Industry />,
				},
				{
					layout: 'single',
					props: { className: "p-24 justify-between" },
					showSlideNum: true,
					content: <_1_0_React />,
				},
				
				{
					layout: 'two-column',
					content: {
						column1:
							<header className='flex flex-col gap-2'>
								<span>Chapter 2</span>
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
					props: { className: "p-24 justify-between" },
					showSlideNum: true,
					content: <_2_1_ComponentBasics />,
				},
				{
					layout: 'single',
					props: { className: "p-24 justify-between" },
					showSlideNum: true,
					content: <_2_2_Functional />,
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
					content: <_3_0_Hooks />,
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
					content: <ResourcesSlide />,
				},
			]} />
		</main>
	)
}
