"use client"
import { useRef } from 'react'
import Link from "next/link"
import { useForm, SubmitHandler} from 'react-hook-form';
import axios from 'axios'

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

    
    const formRef = useRef<HTMLFormElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();


    // const encode = data => {
    //     return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    // }


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // event.preventDefault();
        //const form = formRef.current;
    
        const axiosOptions = {
          url: window.location.href,
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: data
        //   data: encode({
        //     "form-name": formRef.current.getAttribute("name"),
        //     name: nameRef.current.value,
        //     email: emailRef.current.value,
        //     message: messageRef.current.value,
        //   })
        }
          
        console.log({axiosOptions})
    
        axios(axiosOptions)
          .then(response => {
              console.log({response})
            //   setFeedbackMsg("Form submitted successfully!");
            //   formRef.current.reset()
          })
          .catch(err => {
            //   setFeedbackMsg("Form could not be submitted. Please refresh and try again.");
              console.log(err)
          })
    }




    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     //const form = formRef.current;
    
    //     const axiosOptions = {
    //       url: window.location.href,
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       data: data
    //     //   data: encode({
    //     //     "form-name": formRef.current.getAttribute("name"),
    //     //     name: nameRef.current.value,
    //     //     email: emailRef.current.value,
    //     //     message: messageRef.current.value,
    //     //   })
    //     }
          
    //     console.log({axiosOptions})
    
    //     axios(axiosOptions)
    //       .then(response => {
    //           console.log({response})
    //           setFeedbackMsg("Form submitted successfully!");
    //           formRef.current.reset()
    //       })
    //       .catch(err => {
    //           setFeedbackMsg("Form could not be submitted. Please refresh and try again.");
    //           console.log(err)
    //       })
    // }

    return (
         <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="
            col-start-7 col-end-13 row-start-2 row-span-3
            flex flex-col text-slate-950 p-8 bg-slate-400 bg-opacity-10 rounded-xl"
            name="Contact Form" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
        >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="Contact Form" />
            {/* <input type="hidden" name="project-type" value={`${state.pricingText}`} aria-label="Project type"/> */}
            <div hidden style={{display: 'none'}}>
            <label>
                Don’t fill this out:{' '}
                <input name="bot-field" /> 
            </label>
            </div>

            <label htmlFor={'name'}>
                    <span className="form-label-text">Name</span>
                    <input 
                        {...register('name', {required: true })}
                        placeholder="enter your name" 
                        aria-label="Enter Name"
                    />
                    {errors.name && <p className="text-red-600">Last name is required.</p>}
            </label>

            <label htmlFor={'email'}>
                    <span className="form-label-text">Email</span>
                    <input 
                        className="mt-8"
                        {...register('email', {required: true, pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }})} 
                        type="email"
                        placeholder="enter your email" 
                        aria-label="Enter Email"
                    />
                    {errors.email && <p className="text-red-600">Please enter a valid email address</p>}
            </label>

            <label htmlFor={'message'} className='textarea-wrap mt-8'>
                    <span className="form-label-text">
                        Message 
                        {/* {state.pricingText && (<span className="pricing-text"> ({state.pricingText})</span>)} */}
                    </span>
                    <textarea
                        className="mb-8"
                        {...register('message', {required: true})}
                        placeholder="type your message" 
                        aria-label="Type Message"
                    />
            </label>

            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default ContactForm