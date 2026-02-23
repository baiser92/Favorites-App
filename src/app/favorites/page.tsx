'use client'

import { useFavoritesStore } from '@/features/favorites/favorites.store'
import { getMediaItems } from '@/services/media.service'
import { FavoriteButton } from '@/components/FavoriteButton'
import { useEffect, useState } from 'react'
import type { MediaItem } from '@/services/media.service'

export default function FavoritesPage() {
    const favorites = useFavoritesStore((s) => s.favorites)
    const [media, setMedia] = useState<MediaItem[]>([])

    useEffect(() => {
        getMediaItems().then(setMedia)
    }, [])

    const favoriteItems = media.filter((item) =>
        favorites.some((fav) => fav.id === item.id)
    )

    if (favoriteItems.length === 0) {
        return <p>No tienes favoritos todavía ⭐</p>
    }

    return (
        <main>
            <h1>Mis Favoritos</h1>

            {favoriteItems.map((item) => (
                <article key={item.id}>
                    <h3>
                        [{item.type.toUpperCase()}] {item.title}
                    </h3>
                    <p>{item.description}</p>
                    <FavoriteButton id={item.id} type={item.type} />
                </article>
            ))}
        </main>
    )
}