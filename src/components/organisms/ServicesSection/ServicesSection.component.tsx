import CodeIcon from '@/assets/code-icon.svg'
import ComputerIcon from '@/assets/computer-icon.svg'
import LinkIcon from '@/assets/link-icon.svg'
import SettingsIcon from '@/assets/link-icon.svg'
import RevealOnScroll from '@/components/atoms/RevealOnScroll/RevealOnScroll.component'

const ServicesSection:React.FC = () => {
    return (
        <div className="w-full py-12 px-20 flex justify-between">
            <div className="w-1/2 pr-6  sticky top-20 h-min">
                <p className="text-xl text-color-300 mt-16">For hire.</p>
                <h2 className="title-clamp mb-4">Services</h2>
                <p>Your site, your brand. Experience what a personalized online presence can do for your business. I make your ideas a reality with the following focus:</p>
                <div className="border-l border-white z-10 h-[200px] col-end-13 row-start-1 row-end-7 mt-7"/>

            </div>
            <div className="w-[40%] mt-16 ml-8 mb-20 " >

                <RevealOnScroll className='h-[200px] mb-24'>
                    <CodeIcon />
                    <h3 className="text-2xl mb-4 mt-2">Frontend Development</h3>
                    <p className="max-w-[40ch]">Experience what a personalized online presence can do for your business.</p>
                </RevealOnScroll>

                <RevealOnScroll className='h-[200px] mb-24'>
                    <ComputerIcon />
                    <h3 className="text-2xl mb-4 mt-2">Design and Identity</h3>
                    <p className="max-w-[40ch]">Experience what a personalized online presence can do for your business.</p>
                </RevealOnScroll>

                <RevealOnScroll className='h-[200px] mb-24'>
                    <LinkIcon />
                    <h3 className="text-2xl mb-4 mt-2">SEO and Marketing</h3>
                    <p className="max-w-[40ch]">Experience what a personalized online presence can do for your business.</p>
                </RevealOnScroll>

                <RevealOnScroll className='h-[200px] mb-24'>
                    <SettingsIcon />
                    <h3 className="text-2xl mb-4 mt-2">Performance and Speed</h3>
                    <p className="max-w-[40ch]">Experience what a personalized online presence can do for your business.</p>
                </RevealOnScroll>

            </div>
        </div>
    )
}

export default ServicesSection