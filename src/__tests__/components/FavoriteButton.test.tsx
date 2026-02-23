import { render, screen, fireEvent } from '@testing-library/react'
import { FavoriteButton } from '@/components/FavoriteButton'
import { useFavoritesStore } from '@/features/favorites/favorites.store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const renderWithProviders = (ui: React.ReactElement) => {
    return render(
        <QueryClientProvider client={queryClient}>
            {ui}
        </QueryClientProvider>
    )
}

describe('FavoriteButton', () => {
    beforeEach(() => {
        useFavoritesStore.setState({ favorites: [] })
        queryClient.clear()
    })

    it('renders "Agregar a favoritos" when item is not a favorite', () => {
        renderWithProviders(<FavoriteButton id="m1" type="movie" />)

        expect(screen.getByText('Agregar a favoritos')).toBeInTheDocument()
        expect(screen.getByText('☆')).toBeInTheDocument()
    })

    it('renders "Favorito" when item is a favorite', () => {
        // Set initial state
        useFavoritesStore.setState({
            favorites: [{ id: 'm1', type: 'movie' }]
        })

        renderWithProviders(<FavoriteButton id="m1" type="movie" />)

        expect(screen.getByText('Favorito')).toBeInTheDocument()
        expect(screen.getByText('★')).toBeInTheDocument()
    })

    it('toggles favorite state on click', () => {
        renderWithProviders(<FavoriteButton id="m1" type="movie" />)

        const button = screen.getByRole('button')

        // Initial state
        expect(screen.getByText('Agregar a favoritos')).toBeInTheDocument()

        // Click to add
        fireEvent.click(button)

        // Check local state updated immediately (optimistic)
        expect(useFavoritesStore.getState().isFavorite('m1')).toBe(true)
    })
})
