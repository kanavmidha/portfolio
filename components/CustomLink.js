'use client'
import Link from "next/link";
// import { useEffect, useState } from "react";

export default function CustomLink ({
    path,
    title,
    interactiveClasses
}) {

    return (
        <Link href={path} className={`text-lg py-[0.15rem] lg:py-2 relative w-min after:h-[2px] after:content-[''] after:w-0 after:block after:absolute hover:after:w-full after:origin-bottom-left after:transition-all after:duration-[200ms] ${interactiveClasses}`}>{title}</Link>
    )
}