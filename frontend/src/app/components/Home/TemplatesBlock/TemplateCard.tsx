'use client'
import Image from 'next/image'
import Link from 'next/link'

interface TemplateCardProps {
	title: string
	slug: string
	image: string
	demoUrl: string
	buyUrl: string
}

export default function TemplateCard({
	title,
	slug,
	image,
	demoUrl,
	buyUrl,
}: TemplateCardProps) {
	return (
		<div className='max-w-[300px] w-full rounded-[10px] border border-maingray overflow-hidden bg-card-bg shadow-md'>
			<div className='border-b border-b-maingray'>
				<Image
					src={image}
					alt={title}
					width={300}
					height={200}
					className='w-full h-[160px] object-cover'
				/>
			</div>

			<div className='p-5'>
				<h3 className='text-2xl'>
					{title.split(' ')[0]}{' '}
					<span className='text-purple'>{title.split(' ')[1]}</span>
				</h3>

				<div className='flex gap-[10px] mt-8'>
					{demoUrl && (
						<Link
							href={demoUrl}
							target='_blank'
							className='w-3/5 px-3 py-2 border border-maingray rounded-[5px] text-center hover:bg-purple hover:text-white transition'
						>
							View demo
						</Link>
					)}
					{buyUrl && (
						<Link
							href={buyUrl}
							target='_blank'
							className='w-[36%] px-3 py-2 border border-maingray rounded-[5px] text-center hover:bg-purple hover:text-white transition'
						>
							Buy
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
