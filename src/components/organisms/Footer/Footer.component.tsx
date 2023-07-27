import ContactForm from "@/components/molecules/ContactForm/ContactForm.component"
import ContactIcons from "@/components/molecules/ContactIcons/ContactIcons.component"
import FooterLinks from "@/components/molecules/FooterLinks/FooterLinks.component"

const Footer:React.FC = () => {
    return (
        <footer className=" bg-smudge relative jagged-before" id="contact">
            <div className="md:px-20 md:py-12 grid  grid-cols-1 md:grid-cols-12 ">
                <h3 className="text-xl text-color-300 col-start-1 col-end-7">Let&apos;s talk.</h3>
                <h2 className="title-clamp mb-4 col-start-1 col-end-7 row-start-2">Get in touch</h2>
                <p className="col-start-1 col-end-7 mb-20" >Start the conversation to help improve your online presence to get real results for your business</p>
                <ContactForm />
                <ContactIcons />
                <FooterLinks />
            </div>
        </footer>
    )
}

export default Footer