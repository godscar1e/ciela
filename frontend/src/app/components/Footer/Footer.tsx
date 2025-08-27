import Image from "next/image"

export default function Footer() {
    return (
        <div className='mt-[90px]'>
            <Image src='/logo.svg' width={148} height={67} alt='' />
            <p className='mt-[15px] text-lg font-light'>
                © 2025 Ciela S. Personalized approach for every client.
            </p>
        </div>
    )
}
