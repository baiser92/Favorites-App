'use client'

import { useState } from 'react'
import { MediaFilter } from './MediaFilter'
import { FavoriteButton } from './FavoriteButton'
import type { MediaItem, MediaType } from '@/services/media.service'

type Props = {
    initialMedia: MediaItem[]
}

export function MediaGallery({ initialMedia }: Props) {
    const [filter, setFilter] = useState<MediaType | 'all'>('all')

    const filteredMedia = filter === 'all'
        ? initialMedia
        : initialMedia.filter(m => m.type === filter)

    return (
        <>
            <MediaFilter value={filter} onChange={setFilter} />

            {filteredMedia.length === 0 ? (
                <div className="text-center py-20 border border-dashed border-[var(--color-border)] rounded-2xl">
                    <p className="text-[var(--color-muted)] text-lg">No media found for this category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {filteredMedia.map((item) => (
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
        </>
    )
}
