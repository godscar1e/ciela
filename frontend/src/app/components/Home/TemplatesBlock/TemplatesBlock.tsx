
import TemplatesList from './TemplateList'

export default function TemplatesBlock() {
	const tabs = ['Web', 'Mobile', 'Presentations', 'UI Kits']

	return (
		<div className='mt-[60px]'>
			<h2 className='text-4xl font-normal'>Templates</h2>

			<div className='mt-[30px]'>
				<div className='max-w-[478px] h-[37px] flex justify-between text-2xl font-light'>
					{tabs.map(label => (
						<button key={label} className='glow-underline'>
							{label}
						</button>
					))}
				</div>
				<TemplatesList/>
			</div>
		</div>
	)
}
