import { act } from '@testing-library/react'
import { useFavoritesStore } from '@/features/favorites/favorites.store'

describe('favorites.store', () => {
    beforeEach(() => {
        // Reset store before each test
        useFavoritesStore.setState({ favorites: [] })
    })

    it('should start with an empty favorites list', () => {
        const { favorites } = useFavoritesStore.getState()
        expect(favorites).toEqual([])
    })

    it('should add a favorite to the list', () => {
        const movie = { id: 'm1', type: 'movie' as const }

        act(() => {
            useFavoritesStore.getState().toggleFavorite(movie)
        })

        const { favorites, isFavorite } = useFavoritesStore.getState()
        expect(favorites).toHaveLength(1)
        expect(favorites[0]).toEqual(movie)
        expect(isFavorite('m1')).toBe(true)
    })

    it('should remove a favorite if it already exists', () => {
        const book = { id: 'b1', type: 'book' as const }

        // Add it first
        act(() => {
            useFavoritesStore.getState().toggleFavorite(book)
        })

        // Toggle again to remove
        act(() => {
            useFavoritesStore.getState().toggleFavorite(book)
        })

        const { favorites, isFavorite } = useFavoritesStore.getState()
        expect(favorites).toHaveLength(0)
        expect(isFavorite('b1')).toBe(false)
    })
})
