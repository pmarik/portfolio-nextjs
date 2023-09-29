import CodeIcon from '@/assets/code-icon.svg'
import ComputerIcon from '@/assets/computer-icon.svg'
import LinkIcon from '@/assets/link-icon.svg'
import SettingsIcon from '@/assets/link-icon.svg'
import RevealOnScroll from '@/components/atoms/RevealOnScroll/RevealOnScroll.component'

const ServicesSection:React.FC = () => {
    return (
        <div id="services" className="w-full pt-12 pb-[2rem] px-6 md:px-10 lg:px-20 md:flex justify-between bg-cover bg-dark-gradient max-w-maximum  min-w-minimum ">
            <div className="md:w-1/2 md:pr-6  md:sticky top-20 h-min">
                <p className="text-xl text-color-300 mt-16">For hire.</p>
                <h2 className="text-2xl md:title-clamp mb-4">Digital Solutions</h2>
                <p className="leading-relaxed">Your site, your brand. Experience what a personalized online presence can do for your business. I make your ideas a reality with the following focus:</p>
                <div className="border-l border-white z-10 h-[100px] md:h-[200px] col-end-13 row-start-1 row-end-7 mt-7"/>

            </div>
            <div className="md:w-[40%] mt-16 md:ml-8 mb-20 leading-relaxed" >

                <RevealOnScroll className='h-[200px] mb-24'>
                    <CodeIcon />
                    <h3 className="text-2xl mb-4 mt-2">Frontend Development</h3>
                    <p className="max-w-[40ch]">Looking to create a new site, or improve the one you currently have? I will work with you to bring your ideas to life.</p>
                </RevealOnScroll>

                <RevealOnScroll className='h-[200px] mb-24'>
                    <ComputerIcon />
                    <h3 className="text-2xl mb-4 mt-2">Design and Identity</h3>
                    <p className="max-w-[40ch]">Experience what a personalized online presence with a powerful brand identity can do for your business.</p>
                </RevealOnScroll>

                <RevealOnScroll className='h-[200px] mb-24'>
                    <LinkIcon />
                    <h3 className="text-2xl mb-4 mt-2">SEO and Accessibility</h3>
                    <p className="max-w-[40ch]">Boost your website&apos;s search engine rankings and ensure inclusivity for all users using modern web standards.</p>
                </RevealOnScroll>

                <RevealOnScroll className='h-[200px] mb-24'>
                    <SettingsIcon />
                    <h3 className="text-2xl mb-4 mt-2">Performance and Speed</h3>
                    <p className="max-w-[40ch]">Don&apos;t lose potential customers due to a slow website. Increase the load speed of your site to prevent users from leaving prematurely.</p>
                </RevealOnScroll>

            </div>
        </div>
    )
}

export default ServicesSection