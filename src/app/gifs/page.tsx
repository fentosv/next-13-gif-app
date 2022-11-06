import GifsGrid from '@components/GifsGrid'
import { Suspense } from 'react'
import { RandomGifs, RandomGifsSkeleton } from './RandomGifs'

export default function Gifs() {
  return (
    <>
      <h1>Trending gifs</h1>
      <Suspense fallback={<RandomGifsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RandomGifs />
      </Suspense>
      <h1>Gifss</h1>
      <section className='section'>
        {/* @ts-expect-error Async Server Component */}
        <GifsGrid />
      </section>
    </>
  )
}
