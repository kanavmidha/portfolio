'use client'
import { useEffect, useState } from "react"

export default function ContactForm () {

    const [serviceValue, setServiceValue] = useState('')

    useEffect(()=>{
         
    },[])

    return(
        <form action="" method="POST">
            <div className="flex flex-col text-lg font-sans">
                <label for="name" >Your Name<span className="ml-1 text-red-600">*</span></label>
                <input id="name" name="name" placeholder="John Doe" className="p-3 rounded-[8px] bg-transparent border-[1px] border-night border-opacity-50 mt-1 placeholder-night placeholder-opacity-50"/>
            </div>

            <div className="mt-4 flex flex-col text-lg font-sans">
                <label for="email">Your Email<span className="ml-1 text-red-600">*</span></label>
                <input id="email" name="email" placeholder="john@doe.com" className="p-3 rounded-[8px] mt-1 bg-transparent border-[1px] border-night border-opacity-50 placeholder-night placeholder-opacity-50"/>
            </div>

            <fieldset className="mt-4 text-lg font-sans flex flex-col">
                <legend className="mb-2">The service I am looking for (select multiple if needed)<span className="ml-1 text-red-600">*</span></legend>
                <label><input id="web-development" name="services" type="checkbox" value="web-development" className="appearance-none border-none"/>
                    <span className="rounded-[8px] border-[2px] border-night p-3 inline-block cursor-pointer hover:bg-night hover:bg-opacity-20 focus:bg-night focus:bg-opacity-20">Web Development</span>
                </label>

                <label><input id="web-design" name="services" type="checkbox" value="web-design" className="appearance-none border-none" />
                    <span className="rounded-[8px] border-[2px] border-night p-3 inline-block mt-4 hover:bg-night hover:bg-opacity-20 focus:bg-night focus:bg-opacity-20">Web Design</span>
                </label>

                <label><input id="logo-design" name="services" type="checkbox" value="logo-design" className="appearance-none border-none" />
                    <span className="rounded-[8px] border-[2px] border-night p-3 inline-block mt-4 xs:mt-0 xs:ml-4 hover:bg-night hover:bg-opacity-20 focus:bg-night focus:bg-opacity-20">Logo Design</span>
                </label>
            </fieldset>

            <div className="mt-4 flex flex-col text-lg font-sans">
                <label for="budget">My budget is<span className="text-red-600 ml-1">*</span></label>
                <input name="budget" id="budget" placeholder="CAD 2000" className="rounded-[8px] mt-1 p-3 bg-transparent border-[1px] border-night border-opacity-50 placeholder-night placeholder-opacity-50"/>
            </div>

            <div className="mt-4 flex flex-col text-lg font-sans">
                <label for="details">More details about the project</label>
                <textarea name="details" id="details" placeholder="Brief summary, timeline, goals etc." type="textarea" className="rounded-[8px] mt-1 p-3 bg-transparent border-[1px] border-night border-opacity-50 placeholder-night placeholder-opacity-50" />
            </div>
        </form>
    )
}