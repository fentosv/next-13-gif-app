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

export default async function getGifById(id: string) {
  return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(response => {
      const { data }: { data: GifData } = response
      const { title } = data
      const { url } = data.images.downsized
      return { url, title }
    })
}
