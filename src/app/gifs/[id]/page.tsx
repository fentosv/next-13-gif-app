import getGifById from '@services/getGifById'
import Image from 'next/image'

export default async function Gif({ params }: { params: { id: string } }) {
  const { id } = params
  const { url, title } = await getGifById(id)
  return (
    <>
      <head>
        <title>{`Fentos | ${title}`}</title>
      </head>
      <section className='section'>
        <h1>This is your gif!</h1>
        <h3>{title}</h3>
        <Image
          alt='gif'
          src={url}
          width={480}
          height={480}
        />
      </section>
    </>
  )
}
