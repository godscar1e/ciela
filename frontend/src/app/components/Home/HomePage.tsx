import Link from "next/link"
import Image from "next/image"
import TemplatesBlock from "./TemplatesBlock/TemplatesBlock"
import HowItWorksBlock from "./HowItWorksBlock/HowItWorksBlock"

export default function HomePage() {
    return (
        <div className=''>
            <div className=''>
                <h1 className='max-w-[845px] text-5xl font-bold leading-tight'>
                    Ready-made templates and design mockups for quick start
                </h1>
                <Link href='/templates' className='cursor-pointer'>
                    <button className='max-w-[302px] w-full h-[52px] mt-[30px] bg-purple rounded-[5px] text-[18px] text-white font-light'>
                        View templates
                    </button>
                </Link>
                <TemplatesBlock />
                <div className='mt-[60px]'>
                    <h2 className='text-4xl'>Why Us?</h2>
                    <ul className='mt-[30px] flex flex-col gap-[15px]'>
                        <li className='flex gap-5'>
                            <Image
                                src='/icons/mark.svg'
                                width={26}
                                height={19}
                                alt=''
                            />
                            <p className='text-2xl font-light'>
                                Fast integration
                            </p>
                        </li>
                        <li className='flex gap-5'>
                            <Image
                                src='/icons/mark.svg'
                                width={26}
                                height={19}
                                alt=''
                            />
                            <p className='text-2xl font-light'>Modern style</p>
                        </li>
                        <li className='flex gap-5'>
                            <Image
                                src='/icons/mark.svg'
                                width={26}
                                height={19}
                                alt=''
                            />
                            <p className='text-2xl font-light'>
                                Affordable price
                            </p>
                        </li>
                    </ul>
                </div>
                <HowItWorksBlock />
                <div className='mt-[60px]'>
                    <h2 className='text-4xl'>About us</h2>
                    <p className='mt-[15px] text-lg leading-6 font-light'>
                        We are a team of developers with over 5 years of
                        experience in creating complex game algorithms, user
                        interfaces, and website background <br /> solutions.
                        Every project is unique, and we take a personal approach
                        to each client, carefully considering all requirements
                        and business specifics. We offer a full range of
                        services to adapt layouts to your needs, including logo
                        changes, colors, text, and other design elements. Our
                        mission is to turn ideas into efficient, stable, and
                        visually impressive solutions that help businesses grow
                        and stand out from the competition.
                    </p>
                </div>
            </div>
        </div>
    )
}
