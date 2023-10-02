import { Heading } from '@/components/Heading'
import { Slide, SlideProps } from '@/components/Slide'


export type IntroSlideProps = SlideProps
export const IntroSlide = ({ children, className, slideNum, ...props }: IntroSlideProps) => {
    return (
        <Slide className='p-24'>
			<Heading level={2}>What is React all about?</Heading>
		</Slide>
    )
}