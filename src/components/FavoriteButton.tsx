'use client'

import { useFavoritesStore } from "@/features/favorites/favorites.store"
import { useToggleFavorite } from "@/features/favorites/useToggleFavorite"

type Props = {
    id: string
    type: 'movie' | 'book' | 'series' | 'music'
}

export function FavoriteButton({ id, type }: Props) {
    const isFavorite = useFavoritesStore((s) => s.isFavorite(id))
    const toggle = useFavoritesStore((s) => s.toggleFavorite)
    const { mutate } = useToggleFavorite()

    return (
        <button
            onClick={() => {
                toggle({ id, type })
                mutate(id)
            }}
            className={`
                flex items-center justify-center w-full gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200
                ${isFavorite
                    ? 'bg-white text-black hover:bg-white/90 shadow-md'
                    : 'bg-transparent text-white border border-[var(--color-border)] hover:border-white hover:bg-white/5'
                }
            `}
        >
            <span className={`text-lg transition-transform duration-300 ${isFavorite ? 'scale-110' : 'scale-100'}`}>
                {isFavorite ? '★' : '☆'}
            </span>
            <span>{isFavorite ? 'Favorito' : 'Agregar a favoritos'}</span>
        </button>
    )
}