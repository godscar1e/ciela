import Image from 'next/image'
import { client } from '@/sanity/client' // поправь путь
import type { Metadata } from 'next'

type TemplateDoc = {
	title: string
	// добавь поля, которые тебе нужны
}

export async function generateStaticParams() {
	// верни массив СТРОК slug
	const slugs: string[] = await client.fetch(
		`*[_type == "template" && defined(slug.current)].slug.current`
	)
	return slugs.map(slug => ({ slug }))
}

// опционально, для SEO
export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const data = await client.fetch<TemplateDoc | null>(
		`*[_type == "template" && slug.current == $slug][0]{ title }`,
		{ slug: params.slug }
	)
	return {
		title: data?.title ?? 'Template',
	}
}

export default async function TemplatePage({
	params,
}: {
	params: { slug: string }
}) {
	const template = await client.fetch<TemplateDoc | null>(
		`*[_type == "template" && slug.current == $slug][0]{
      title,
      // пример: картинка с url
      image{
        asset->{
          url
        }
      },
      demoUrl,
      buyUrl
    }`,
		{ slug: params.slug }
	)

	if (!template) return <div>Template not found</div>

	return (
		<div className='mt-[30px]'>
			<div className='flex justify-between items-center'>
				<h1 className='text-5xl font-semibold'>{template.title}</h1>
				<button type='button' className='flex gap-5 glow-underline'>
					<Image src='/icons/arrow.svg' width={26} height={16} alt='' />
					<p className='text-2xl'>Back to Home</p>
				</button>
			</div>

			<p className='mt-4 text-lg text-gray-500'>
				Здесь описание шаблона, цена, кнопка покупки и т.д.
			</p>
		</div>
	)
}
