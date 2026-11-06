"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Movies = ({ dt }) => {
    const router = useRouter()

    console.log(dt, "dt")
    return (
        <div
            onClick={() => router.push(`/movie/${dt?.id}`)}
            className="w-full sm:w-[300px] md:w-[350px] h-[220px] relative cursor-pointer overflow-hidden rounded-lg group"
        >
            {/* fill kullanarak resmin kutunun içine tam oturmasını sağlıyoruz */}
            <Image
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
                src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}
                alt={dt?.title || "Movie poster"}
            />

            {/* Yazı alanı: absolute inset-0 ile tam kutuyu kapsar, justify-end ile alta yaslanır */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <div className="text-xl font-bold text-white text-left">
                    {dt?.title}
                </div>
                <div className="text-sm text-gray-200 text-left mt-1">
                    {dt?.release_date} - ⭐ {dt?.vote_average}
                </div>
            </div>
        </div>
    )
}

export default Movies