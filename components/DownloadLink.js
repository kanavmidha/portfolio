// 'use client'
// import { useEffect, useState } from "react";

export default function DownloadLink({
    path,
    title,
    interactiveClasses
}) {

    return (
        <a href={path} download className={`text-lg py-[0.15rem] lg:py-2 relative w-min after:h-[2px] after:content-[''] after:w-0 after:block after:absolute hover:after:w-full after:origin-bottom-left after:transition-all after:duration-[200ms] ${interactiveClasses}`}>{title}</a>
    )
}