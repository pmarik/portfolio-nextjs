import IconEmail from '@/assets/email-icon.svg'
import IconLinkedIn from '@/assets/linkedin-icon.svg'
import IconGithub from '@/assets/github-icon.svg'


const ContactIcons:React.FC = () => {

    const openInNewTab = (url: string )=> {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <nav className="space-x-4 md:space-x-12 text-lg md:row-start-4 md:row-end-6 row-start-5 md:col-start-1 md:col-end-6 mt-20 md:mt-[unset] md:pt-40 pl-5 border-l border-white">
            <ul>
                <li className="flex items-center mb-5">
                    <div role="button" onClick={() => openInNewTab('mailto:paul@marik.tech')} className="rounded-full bg-white inline-block bg-opacity-10 drop-shadow-2xl">
                        <IconEmail />
                    </div>
                    <a href='mailto:paul@marik.tech' className="ml-5">Email</a>
                </li>
                <li className="flex items-center mb-5"> 
                    <div role="button" onClick={() => openInNewTab('https://www.linkedin.com/in/paul-marik-web-developer/')} className="rounded-full bg-white inline-block bg-opacity-10">
                        <IconLinkedIn />
                    </div>
                    <a href="https://www.linkedin.com/in/paul-marik-web-developer/" target="_blank" className="ml-5">LinkedIn</a>
                </li> 
                <li className="flex items-center">              
                    <div role="button" onClick={() => openInNewTab('https://github.com/pmarik')} className="rounded-full bg-white inline-block bg-opacity-10">
                        <IconGithub />
                    </div>
                    <a href='https://github.com/pmarik' target="_blank" className="ml-5">Github</a>
                </li>
            </ul>
        </nav>
    )
}

export default ContactIcons
