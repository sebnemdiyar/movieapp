"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Movies = ({ dt }) => {
    const router = useRouter()

    console.log(dt, "dt")
    return (
        <div onClick={() => router.push(`/movie/${dt?.id}`)} className="w-full sm:w-[470px] max-w-full imgContainer relative cursor-pointer">
            <Image style={{ objectFit: 'cover' }} width={470} height={300} className="w-full h-auto max-w-full" src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} />
            <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
                <div className="text-2xl font-bold text-white">
                    {dt?.title}
                </div>
                <div className="text-white">
                    {dt?.release_date} - {dt?.vote_average}
                </div>
            </div>
        </div>
    )
}

export default Movies