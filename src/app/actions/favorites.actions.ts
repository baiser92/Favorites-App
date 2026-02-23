'use server'

import { isAuthenticated } from './auth.actions'

export async function toggleFavoriteAction(itemId: string) {
    if (!(await isAuthenticated())) {
        throw new Error('Unauthorized')
    }

    // fake persistence
    return { success: true, itemId }
}