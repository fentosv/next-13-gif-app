import Image from 'next/image'
import getGifs from '@services/getGifs'
import styles from './GifsGrid.module.scss'
import Link from 'next/link'
export default async function GifsGrid() {
  const gifs = await getGifs()

  const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

  return (
    <header className={styles.navbar}>
      {gifs.map(({ url, id }) => (
        <Link
          href={`/gifs/${id}`}
          key={id}
        >
          <Image
            className={styles.image}
            alt='gif'
            src={url}
            width={480}
            height={480}
            placeholder='blur'
            blurDataURL={rgbDataURL(237, 181, 6)}
          />
        </Link>
      ))}
    </header>
  )
}
