import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {

  const resolvedSearchParams = await searchParams;
  const genre = resolvedSearchParams?.genre;

  const endpoint = genre ? `movie/${genre}` : "trending/all/day";

  const res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=6b5f3876e230d18bc9ba03e27d81fcb4`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json()

  console.log(data, "data")

  return (
    <main className="w-full overflow-x-hidden px-4">
      <div className="flex items-center justify-center flex-wrap gap-3">
        {
          data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))
        }
      </div>
    </main>
  )
}

export default Page;
