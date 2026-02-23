'use client'

import { useFavoritesStore } from '@/features/favorites/favorites.store'
import { getMediaItems } from '@/services/media.service'
import { FavoriteButton } from '@/components/FavoriteButton'
import { useEffect, useState } from 'react'
import type { MediaItem } from '@/services/media.service'
import Link from 'next/link'

export default function FavoritesPage() {
    const favorites = useFavoritesStore((s) => s.favorites)
    const [media, setMedia] = useState<MediaItem[]>([])

    useEffect(() => {
        getMediaItems().then(setMedia)
    }, [])

    const favoriteItems = media.filter((item) =>
        favorites.some((fav) => fav.id === item.id)
    )

    return (
        <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <header className="mb-12 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Mis Favoritos
                    </h1>
                    <p className="text-[var(--color-muted)] text-lg max-w-2xl">
                        Tu colección personal y cuidadosamente seleccionada.
                    </p>
                </div>
                <Link
                    href="/"
                    className="hidden md:flex text-sm font-medium text-[var(--color-muted)] hover:text-white transition-colors duration-200 bg-[var(--color-card)] px-4 py-2 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-muted)]"
                >
                    Volver al inicio
                </Link>
            </header>

            {favoriteItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-32 border border-dashed border-[var(--color-border)] rounded-3xl bg-[var(--color-card)]/50">
                    <span className="text-6xl mb-6 opacity-50">✨</span>
                    <h2 className="text-2xl font-semibold text-white mb-3">No tienes favoritos todavía</h2>
                    <p className="text-[var(--color-muted)] text-lg max-w-md text-center mb-8">
                        Explora la biblioteca principal y guarda los elementos que más te gusten para tenerlos siempre a mano.
                    </p>
                    <Link
                        href="/"
                        className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-white/20 hover:-translate-y-0.5"
                    >
                        Explorar biblioteca
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {favoriteItems.map((item) => (
                        <article
                            key={item.id}
                            className="group relative flex flex-col justify-between bg-[var(--color-card)] p-8 rounded-2xl border border-[var(--color-border)] transition-all duration-300 hover:bg-[var(--color-card-hover)] hover:border-[var(--color-accent)]/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--color-accent)]/10"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full">
                                        {item.type}
                                    </span>
                                    {item.year && (
                                        <span className="text-sm font-medium text-[var(--color-muted)]">
                                            {item.year}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                                    {item.description}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-[var(--color-border)]/50">
                                <FavoriteButton id={item.id} type={item.type} />
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </main>
    )
}