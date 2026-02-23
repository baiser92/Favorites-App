'use client'

import type { MediaType } from '@/services/media.service'

type Props = {
    value: MediaType | 'all'
    onChange: (value: MediaType | 'all') => void
}

const options: (MediaType | 'all')[] = [
    'all',
    'movie',
    'book',
    'series',
    'music'
]

export function MediaFilter({ value, onChange }: Props) {
    return (
        <div className="flex flex-wrap gap-3 mb-10">
            {options.map((opt) => (
                <button
                    key={opt}
                    onClick={() => onChange(opt)}
                    className={`
                        px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-200 border
                        ${value === opt
                            ? 'bg-[var(--color-foreground)] text-[var(--color-background)] border-[var(--color-foreground)] shadow-lg scale-[1.02]'
                            : 'bg-transparent text-[var(--color-muted)] border-[var(--color-border)] hover:border-[var(--color-muted)] hover:text-white'
                        }
                    `}
                >
                    {opt === 'all' ? 'All' : opt}
                </button>
            ))}
        </div>
    )
}