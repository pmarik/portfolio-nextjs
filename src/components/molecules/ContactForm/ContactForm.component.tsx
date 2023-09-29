import { useRef, useState, useEffect } from 'react'
import { useForm, SubmitHandler} from 'react-hook-form';
import { useContactContext } from '@/contexts/contact-context';
import axios from 'axios'
import { useWindowSize } from '@/hooks/useWindowSize';
import { buttonVariants } from "@/components/atoms/ButtonLink/ButtonLink.component"


type Inputs = {
    name: string
    email: string
    message: string
}

interface ValidRefTarget {
    contains(target: EventTarget | null): any;
}

interface EncodeData {
   "form-name": React.RefObject<ValidRefTarget>
}


const ContactForm:React.FC = () => {

    
    // const formRef = useRef<HTMLFormElement>(null);
    // const nameRef = useRef<HTMLInputElement>(null);
    // const emailRef = useRef<HTMLInputElement>(null);
    // const messageRef = useRef<HTMLInputElement>(null);

    const { isContact } = useContactContext()

    const [feedbackMsg, setFeedbackMsg] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false)
    const formRef = useRef<HTMLFormElement>(null);
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();

    const { ref, ...rest} = register('name')


    /**
    // Check window location if loading page externally to #contact will focus first input
    // of contact form
    // TODO: doesn't work when clicking "contact" on portfolio grid page, and then clicking another project img to direct to new page
    **/
    // useEffect(() => {
    //     if(window.location.hash === "#contact") {
    //         console.log({firstInputRef})
    //         setTimeout(() => {
    //             firstInputRef.current?.focus()
    //         }, 1);
    //     }
    //  });


    const size = useWindowSize();

    useEffect(() => {
        let setContactFocus = undefined as any
        if(isContact){
            setContactFocus = size?.width > 900 ? setTimeout(() => {
                firstInputRef.current?.focus()
            }, 650) : setTimeout(() => {
                firstInputRef.current?.focus()
            }, 700)
        }
        return () => {
            clearTimeout(setContactFocus)
        }
    }, [isContact])


    // const encode = data => {
    //     return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    // }


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // event.preventDefault();
        //const form = formRef.current;

        setIsLoading(true)

        const access = {
            'access_key': `${process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY}`
        }
    
        const axiosOptions = {
          url: 'https://api.web3forms.com/submit',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          data: {...access, ...data}
        //   data: encode({
        //     "form-name": formRef.current.getAttribute("name"),
        //     name: nameRef.current.value,
        //     email: emailRef.current.value,
        //     message: messageRef.current.value,
        //   })
        }
          
        // console.log({axiosOptions})
    
        axios(axiosOptions)
          .then(response => {


            // setTimeout(() => {
            //     setIsLoading(false)
            // }, 1000)

            console.log({response})


              setFeedbackMsg("Form submitted successfully!");
            //   setFeedbackMsg(<Loader/>)
              
              formRef.current?.reset()
          })
          .catch(err => {
              setFeedbackMsg("Form could not be submitted. Please refresh and try again.");
              console.log(err)
          })
    }

    return (
         <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="
            row-start-4 md:col-start-7 md:col-end-13 md:row-start-2 md:row-span-5
            flex flex-col text-slate-950 p-8 bg-slate-400 bg-opacity-10 rounded-xl leading-relaxed"
            name="Contact" 
            method="POST" 
            ref={formRef}
            action="https://api.web3forms.com/submit"
        >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            {/* <input type="hidden" name="form-name" value="Contact" /> */}

            {/* <input type="hidden" name="project-type" value={`${state.pricingText}`} aria-label="Project type"/> */}
            <div hidden style={{display: 'none'}}>
            <label>
                Don’t fill this out:{' '}
                <input name="bot-field" /> 
            </label>
            </div>

            <label htmlFor={'name'}>
                    <span className="form-label-text text-white">Name</span>
                    <input 
                        {...register('name', {required: true, minLength: 2 })}
                        // placeholder="enter your name" 
                        aria-label="Enter Name"
                        className={`w-full rounded p-2 mt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-color-300 ${errors.name ? 'mb-[unset]' : 'mb-5 '} `}
                        ref={(e) => {
                            ref(e)
                            firstInputRef.current = e
                        }}
                    />
                    {errors.name && <p className="text-red-600 mb-5">Name is required</p>}
            </label>

            <label htmlFor={'email'}>
                    <span className="form-label-text text-white">Email</span>
                    <input 
                        className={`w-full rounded p-2 mt-1  focus:outline focus:outline-2 focus:outline-color-300 ${errors.email ? 'mb-[unset]' : 'mb-5 '} `}
                        {...register('email', {required: true, pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }})} 
                        type="email"
                        // placeholder="enter your email" 
                        aria-label="Enter Email"
                    />
                    {errors.email && <p className="text-red-600 mb-5">Please enter a valid email address</p>}
            </label>

            <label htmlFor={'message'} className='textarea-wrap '>
                    <span className="form-label-text text-white">
                        Message
                        {/* {state.pricingText && (<span className="pricing-text"> ({state.pricingText})</span>)} */}
                    </span>
                    <textarea
                        className="mb-8 w-full p-2 rounded h-[200px] max-h-[250px]  focus:outline focus:outline-2 focus:outline-color-300 "
                        {...register('message', {required: true})}
                        // placeholder="type your message" 
                        aria-label="Type Message"
                    />
            </label>

            {/* {isLoading ? 
                    <Loader />
                :
                    <button type="submit" className={buttonVariants({variant: 'default'})}>Send Message</button>
            } */}

            <button type="submit" className={buttonVariants({variant: 'default'})}>Send Message</button>

            {feedbackMsg && <p className="text-white" style={{color: '#FFF !important', marginTop: '1.5em', textAlign: 'center'}}>{feedbackMsg}</p>}

        </form>
    )
}


function Loader() {
    return (
        <div className="animate loader">
            <svg className="circular" viewBox="50 50 60 60">
            <circle className="path" cx="75" cy="75" r="20" fill="none" strokeWidth="6" strokeMiterlimit="10" />
            </svg>
        </div>  
        )
}

export default ContactForm