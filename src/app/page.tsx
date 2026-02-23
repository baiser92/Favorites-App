import { getMediaItems } from '@/services/media.service'
import { MediaGallery } from '@/components/MediaGallery'

export default async function HomePage() {
  const media = await getMediaItems()

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Media Library
        </h1>
        <p className="text-[var(--color-muted)] text-lg max-w-2xl">
          Discover and curate your favorite movies, books, series, and music.
        </p>
      </header>

      <MediaGallery initialMedia={media} />
    </main>
  )
}