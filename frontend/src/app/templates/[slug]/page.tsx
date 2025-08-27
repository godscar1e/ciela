import Image from 'next/image'
import { templates } from '../../constants/templates'

interface TemplatePageProps {
	params: Promise<{ slug: string }>
}

export default async function TemplatePage({ params }: TemplatePageProps) {
	const resolvedParams = await params // Resolve the Promise
	const template = templates.find(t => t.slug === resolvedParams.slug)

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

export async function generateStaticParams() {
	return templates.map(template => ({
		slug: template.slug,
	}))
}
