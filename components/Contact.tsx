import React from 'react'
import { PhoneIcon, GlobeAsiaAustraliaIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};


type Props = {}

const Contact = (props: Props) => {
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:saaransh377@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} ${formData.message }`;
    console.log(formData)
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                I have got just what you need.{" "}
                <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
            </h4>

            <div className='space-y-10'>
              <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-2xl font-semibold'>+91 9643061683</p>
              </div>
              <div className="flex items-center space-x-5 justify-center">
                <GlobeAsiaAustraliaIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-2xl font-semibold'>Earth</p>
              </div>
              <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-2xl font-semibold'>saaransh377@gmail.com</p>
              </div>
            </div>
            <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex space-x-2'>
                <input {...register('name')} placeholder='Name' className="contactInput" type='text'/><input {...register('email')} placeholder='Email' className="contactInput" type='email'/>
              </div>
              <input placeholder='Subject' {...register('subject')} className="contactInput" type='text'/>
              <textarea placeholder='Message' {...register('message')} className="contactInput" />
              <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact