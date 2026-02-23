import { useMutation } from '@tanstack/react-query'
import { toggleFavoriteAction } from '@/app/actions/favorites.actions'

export function useToggleFavorite() {
    return useMutation({
        mutationFn: toggleFavoriteAction,
    })
}