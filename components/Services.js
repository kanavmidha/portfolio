'use client'

export default function Services ({
    heading,
    body,
    bullets,
    classes
}) {
    return (
        <div className={`sticky text-[2rem] xl:text-[3rem] top-0 border-t border-t-jet bg-night ${classes? classes : ""}`}>
            <h3 className="text-[2rem]/[1] xl:text-[3rem]/[1] py-6 font-serif col-span-full">{heading}</h3>
            <div className="flex flex-col lg:grid lg:grid-cols-12">
                <p className="mb-3 text-lg col-span-5 md:col-span-4 max-lg:max-w-[19rem] lg:max-w-[22.15rem]">{body}</p>
                <div className=" flex flex-col gap-2 col-end-[-1] col-span-3">
                    {bullets.map((item, index)=>{
                        return (
                            <span key={index} className="block text-[1.5rem] xl:text-[2.15rem] font-serif">{item}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}