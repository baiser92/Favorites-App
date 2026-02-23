import { create } from 'zustand'
import { Favorite } from './favorites.types'

type FavoritesState = {
    favorites: Favorite[]
    toggleFavorite: (fav: Favorite) => void
    isFavorite: (id: string) => boolean
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
    favorites: [],
    toggleFavorite: (fav) =>
        set((state) => ({
            favorites: state.favorites.some((f) => f.id === fav.id)
                ? state.favorites.filter((f) => f.id !== fav.id)
                : [...state.favorites, fav]
        })),
    isFavorite: (id) => get().favorites.some((f) => f.id === id)
}))