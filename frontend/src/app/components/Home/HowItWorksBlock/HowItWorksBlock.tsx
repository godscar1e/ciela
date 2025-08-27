export default function HowItWorksBlock() {
    return (
        <div className='mt-[60px]'>
            <h2 className='text-4xl'>How it works</h2>
            <div className='flex gap-8 mt-[30px]'>
                <div className='max-w-[296px] w-full max-h-[150px] flex gap-[30px] px-[30px] py-9 border border-maingray rounded-[10px] bg-card-bg'>
                    <p className='text-5xl font-semibold text-purple'>1</p>
                    <p className='text-[32px] leading-10'>Choose a template</p>
                </div>
                <div className='max-w-[296px] w-full max-h-[150px] flex gap-[30px] px-[30px] py-9 border border-maingray rounded-[10px] bg-card-bg'>
                    <p className='text-5xl font-semibold text-purple'>2</p>
                    <p className='text-[32px] leading-10'>Make a payment</p>
                </div>
                <div className='max-w-[296px] w-full max-h-[150px] flex gap-[30px] px-[30px] py-9 border border-maingray rounded-[10px] bg-card-bg'>
                    <p className='text-5xl font-semibold text-purple'>3</p>
                    <p className='text-[32px] leading-10'>Download file</p>
                </div>
            </div>
        </div>
    )
}
