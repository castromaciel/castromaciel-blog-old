export interface BlogPorperties {
  title: string
  author: string
  images: {
    src?: string
    alt?: string
    description?: string
  }
  date: string
  category?: string
}
