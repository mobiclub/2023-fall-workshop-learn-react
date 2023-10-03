import { Header } from '@/components/Header';
import { SlideShowNav } from '@/components/Slide';
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
			<SlideShowNav />
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
