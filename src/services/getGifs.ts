const API_KEY = process.env.NEXT_PUBLIC_API_KEY

interface GifData {
  id: string
  title: string
  images: {
    downsized: {
      url: string
    }
  }
}

export default async function getGifs() {
  return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`)
    .then(res => res.json())
    .then(response => {
      const { data }: { data: GifData[] } = response
      const gifs = data.map(gif => {
        const { title, id } = gif
        const { url } = gif.images.downsized
        return { url, title, id }
      })
      return gifs
    })
}
