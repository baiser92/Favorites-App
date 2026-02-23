export type MediaType = 'movie' | 'book' | 'series' | 'music'

export type MediaItem = {
    id: string
    type: MediaType
    title: string
    description: string
    year?: number
}

export async function getMediaItems(): Promise<MediaItem[]> {
    return [
        {
            id: 'm1',
            type: 'movie',
            title: 'Interstellar',
            description: 'Sci-fi exploration and time',
            year: 2014
        },
        {
            id: 'b1',
            type: 'book',
            title: '1984',
            description: 'Dystopian novel',
            year: 1949
        },
        {
            id: 's1',
            type: 'series',
            title: 'Dark',
            description: 'Time travel and family secrets'
        },
        {
            id: 'mu1',
            type: 'music',
            title: 'Random Access Memories',
            description: 'Electronic music album'
        }
    ]
}