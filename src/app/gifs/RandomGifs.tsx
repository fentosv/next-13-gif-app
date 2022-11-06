import getGifs from '@services/getGifs'
import Image from 'next/image'
import styles from './RandomGifs.module.scss'

import classnames from 'classnames-creator'

async function delay(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms))
}

function GifSkeleton() {
  return <div className={classnames(styles.grid__image, styles['grid__image--shine'])} />
}

export function RandomGifsSkeleton() {
  return (
    <div className={classnames(styles.grid, styles['shine-grid'])}>
      <GifSkeleton />
      <GifSkeleton />
      <GifSkeleton />
      <GifSkeleton />
    </div>
  )
}

export async function RandomGifs() {
  // Normally you would fetch data here
  const gifs = await getGifs()
  await delay(5000)

  return (
    <div className={styles.grid}>
      {gifs.slice(1, 5).map(({ url, title }) => (
        <Image
          className={styles.grid__image}
          alt=''
          src={url}
          width={480}
          height={480}
          key={url}
        />
      ))}
    </div>
  )
}
