import Link from 'next/link';
import { SectionProps } from 'react-html-props';

export type LinkPreviewProps = SectionProps & {
	siteName: string,
	url: string,
	desc: string,
}
export const LinkPreview = ({siteName, url, desc, ...props}: LinkPreviewProps) => {
	const urlObject = new URL(url);
	const prettyPathName = urlObject.pathname !== '/' ? urlObject.pathname : '';
	const prettyUrl = `${urlObject.hostname}${prettyPathName}`;

	return (
		<section
			className="flex flex-col gap-2 p-4 rounded-md bg-white border border-slate-200 drop-shadow-sm"
			{...props}
		>
			<h3 className="font-semibold">{siteName}</h3>
			<span>{desc}</span>
			<Link href={url} className='text-blue-600'>{prettyUrl}</Link>
		</section>
	)
}
