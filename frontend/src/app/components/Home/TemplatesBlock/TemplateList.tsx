import { client } from '@/sanity/client'
import { templatesQuery } from '@/sanity/queries'
import TemplateCard from './TemplateCard'

export default async function TemplatesList() {
	const templates = await client.fetch(templatesQuery)

	return (
		<div className='flex gap-6 flex-wrap mt-[30px]'>
			{templates.map((t: any) => (
				<TemplateCard
					key={t.slug}
					title={t.title}
					slug={t.slug}
					image={t.image}
					demoUrl={t.demoUrl}
					buyUrl={t.buyUrl}
				/>
			))}
		</div>
	)
}
