import ContactForm from "@/components/molecules/ContactForm/ContactForm.component"
import ContactIcons from "@/components/molecules/ContactIcons/ContactIcons.component"
import FooterLinks from "@/components/molecules/FooterLinks/FooterLinks.component"

const Footer:React.FC = () => {
    return (
        <footer className=" bg-smudge bg-cover relative jagged-before pt-20 max-w-maximum min-w-minimum m-[0_auto]">
            <div id="contact" className="px-6 pb-20 md:px-10 lg:px-20 md:py-12 xlg:px-[unset] xlg:mx-[unset] grid grid-cols-1 md:grid-cols-12 leading-relaxed">
                <h3 className="text-xl text-color-300 row-start-1 md:col-start-1 md:col-end-7">Let&apos;s talk.</h3>
                <h2 className="title-clamp mb-4 row-start-2 md:col-start-1 md:col-end-7 md:row-start-2">Get in touch</h2>
                <p className="row-start-3 md:col-start-1 md:col-end-7 mb-20 md:pr-5" >Interested in working together? Contact now, and let&apos;s turn your ideas into reality.</p>
                <ContactForm />
                <ContactIcons />
                {/* <FooterLinks /> */}
            </div>
        </footer>
    )
}

export default Footer