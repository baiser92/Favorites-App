import { render, screen, fireEvent } from '@testing-library/react'
import { MediaFilter } from '@/components/MediaFilter'

describe('MediaFilter', () => {
    it('renders all filter options', () => {
        const onChangeMock = jest.fn()
        render(<MediaFilter value="all" onChange={onChangeMock} />)

        expect(screen.getByText('All')).toBeInTheDocument()
        expect(screen.getByText('movie')).toBeInTheDocument()
        expect(screen.getByText('book')).toBeInTheDocument()
        expect(screen.getByText('series')).toBeInTheDocument()
        expect(screen.getByText('music')).toBeInTheDocument()
    })

    it('calls onChange when a button is clicked', () => {
        const onChangeMock = jest.fn()
        render(<MediaFilter value="all" onChange={onChangeMock} />)

        fireEvent.click(screen.getByText('movie'))
        expect(onChangeMock).toHaveBeenCalledWith('movie')
        expect(onChangeMock).toHaveBeenCalledTimes(1)
    })

    it('applies active styles to the selected filter', () => {
        const onChangeMock = jest.fn()
        const { rerender } = render(<MediaFilter value="all" onChange={onChangeMock} />)

        // "All" should have active classes initially
        const allBtn = screen.getByText('All')
        expect(allBtn).toHaveClass('bg-[var(--color-foreground)]')
        expect(screen.getByText('movie')).not.toHaveClass('bg-[var(--color-foreground)]')

        // Rerender with 'movie' active
        rerender(<MediaFilter value="movie" onChange={onChangeMock} />)

        expect(allBtn).not.toHaveClass('bg-[var(--color-foreground)]')
        expect(screen.getByText('movie')).toHaveClass('bg-[var(--color-foreground)]')
    })
})
