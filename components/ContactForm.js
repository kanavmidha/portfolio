'use client'
import { useEffect, useState } from "react"

export default function ContactForm () {

    const [service, setService] = useState([])

    const selectServices = ({target}) => {

        const button = target.nextElementSibling
        
        if(target.checked) {
            setService((prev)=>{
                if(!prev){
                    return [target.value]
                } else {
                    return [...prev, target.value]
                }    
            })

            if(!(button.style.backgroundColor === '#252525')) {
                button.style.backgroundColor = "#252525"
                button.style.color = "#F7EDD0"
                button.style.border = 'none'
            }
        }

        if (!target.checked) {
            if (service.includes(target.value)) {
                setService(service.filter((s) => s !== target.value))
            }

            button.style.backgroundColor = ''
            button.style.color = "#252525"
            button.style.border = '1px solid #252525'
            button.style.borderOpacity = '0.5'
        }
    }

    

    const initValues = {name: '', email: '', budget: '', message: ''}

    const initState = {values: initValues}

    const [state, setState] = useState(initState)

    const {values} = state
    // destructuring the values object from the state object so that we don't have to write state.values.value everytime

    const finalValues = {values, service}

    const handleChange = ({target}) => {
        setState((prev)=>({
            // prev referes to the previous stateful values 
            ...prev,
            // spreading the previous state values here
            values: {
                ...prev.values,
                [target.name] : target.value,
            }
        }))
    }

    const submitData = async(e) =>{
        setState((prev) => ({
            ...prev,
        }))
        
        e.preventDefault()

        try {
            const res = await fetch('/api/contact', {
                method: "POST",
                body: JSON.stringify(finalValues),
                headers: {
                    'content-type': 'application/JSON'
                }
            })

            if (res.ok) {
                alert('Your message has been sent :)')

                setState({values: {
                    name: '',
                    email: '',
                    budget: '',
                    message: ''
                }})

                setService([])

            } else {
                alert(`Error:${res.text()}`)
            }
        } catch (err) {
            console.log(err)
            alert('There was an error submitting your message :(')
        }

    }

    useEffect(()=>{
        const inputs = document.querySelectorAll('input')
        const labels = document.querySelectorAll('label:not(fieldset>label)')

        inputs.forEach(input=>{
            input.classList.add('transition-colors', 'duration-[300ms]')
        })
        labels.forEach(label=>{
            label.classList.add('lg:text-2xl', 'mt-6', 'mb-2')
        })

    },[])

    return(
        <form action="" method="POST" className="text-night sm:max-w-[31.25rem]" onSubmit={submitData}>
            <div className="flex flex-col text-lg font-sans">
                <label for="name" >Your Name<span className="ml-1 text-red-600">*</span></label>
                <input type="text" id="name" name="name" placeholder="John Doe" className="p-3 rounded-[8px] bg-transparent border-[1px] border-night border-opacity-50 mt-1 placeholder-night placeholder-opacity-50 focus-visible:outline-none focus-visible:bg-night focus-visible:bg-opacity-20" value={values.name} onChange={handleChange}/>
            </div>

            <div className="mt-4 flex flex-col text-lg font-sans">
                <label for="email">Your Email<span className="ml-1 text-red-600">*</span></label>
                <input type="email" id="email" name="email" placeholder="john@doe.com" className="p-3 rounded-[8px] mt-1 bg-transparent border-[1px] border-night border-opacity-50 placeholder-night placeholder-opacity-50 focus-visible:outline-none focus-visible:bg-night focus-visible:bg-opacity-20" value={values.email} onChange={handleChange} />
            </div>

            <fieldset className="mt-4 text-lg lg:mt-10 font-sans flex flex-col gap-4 sm:flex-row">
                <legend className="mb-2 lg:mb-4 lg:text-2xl">The service I am looking for (select multiple if needed)<span className="ml-1 text-red-600">*</span></legend>
                <label><input id="web-development" name="services" type="checkbox" value="web-development" className="appearance-none border-none" onChange={selectServices}/>
                    <span className="w-max rounded-[8px] lg:text-xl border-[1px] border-night border-opacity-50 p-3 inline-block cursor-pointer hover:bg-night hover:bg-opacity-20 focus:bg-night focus:bg-opacity-20">Web Development</span>
                </label>

                <label><input id="web-design" name="services" type="checkbox" value="web-design" className="appearance-none border-none" onChange={selectServices} />
                    <span className="w-max rounded-[8px] lg:text-xl border-[1px] border-night border-opacity-50 p-3 inline-block hover:bg-night hover:bg-opacity-20 focus:bg-night focus:bg-opacity-20 cursor-pointer">Web Design</span>
                </label>

                <label><input id="logo-design" name="services" type="checkbox" value="logo-design" className="appearance-none border-none" onChange={selectServices} />
                    <span className="w-max rounded-[8px] lg:text-xl border-[1px] border-night border-opacity-50 p-3 inline-block hover:bg-night hover:bg-opacity-20 focus:bg-night focus:bg-opacity-20 cursor-pointer">Logo Design</span>
                </label>
            </fieldset>

            <div className="mt-4 flex flex-col text-lg font-sans">
                <label for="budget">My budget is<span className="text-red-600 ml-1">*</span></label>
                <input type="number" name="budget" id="budget" placeholder="CAD 2000" className="rounded-[8px] mt-1 p-3 bg-transparent border-[1px] border-night border-opacity-50 placeholder-night placeholder-opacity-50 focus-visible:outline-none focus-visible:bg-night focus-visible:bg-opacity-20" value={values.budget} onChange={handleChange} />
            </div>

            <div className="mt-4 flex flex-col text-lg font-sans">
                <label for="message">More details about the project...</label>
                <textarea rows='4' name="message" id="message" placeholder="Brief summary, timeline, goals etc." type="textarea" className="rounded-[8px] mt-1 p-3 bg-transparent border-[1px] border-night border-opacity-50 placeholder-night placeholder-opacity-50 focus-visible:outline-none focus-visible:bg-night focus-visible:bg-opacity-20 transition-colors duration-[300ms]" value={values.message} onChange={handleChange} />
            </div>

            <div>
                <button className="rounded-full px-8 py-2 ml-auto block bg-night text-beige border border-night mt-8">Submit</button>
            </div>
        </form>
    )
}