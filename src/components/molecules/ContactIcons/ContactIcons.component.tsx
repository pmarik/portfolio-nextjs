import IconEmail from '@/assets/email-icon.svg'
import IconLinkedIn from '@/assets/linkedin-icon.svg'
import IconGithub from '@/assets/github-icon.svg'


const ContactIcons:React.FC = () => {
    return (
        <nav className="space-x-4 md:space-x-12 text-lg row-start-4 row-end-6 col-start-1 col-end-6 pt-40 pl-5 border-l border-white">
            <ul>
                <li className="flex items-center mb-5">
                    <div className="rounded-full bg-white inline-block bg-opacity-10 drop-shadow-2xl">
                        <IconEmail />
                    </div>
                    <a href='/' className="ml-5">Email</a>
                </li>
                <li className="flex items-center mb-5"> 
                    <div className="rounded-full bg-white inline-block bg-opacity-10">
                        <IconLinkedIn />
                    </div>
                    <a href='/' className="ml-5">LinkedIn</a>
                </li> 
                <li className="flex items-center">              
                    <div className="rounded-full bg-white inline-block bg-opacity-10">
                        <IconGithub />
                    </div>
                    <a href='/' className="ml-5">Github</a>
                </li>
            </ul>
        </nav>
    )
}

export default ContactIcons