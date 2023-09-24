import { render, screen } from '@testing-library/react'
import { LogoDog } from './index'

describe('<LogoDog />', () => {
    const renderLogoDog = () => {
        return render(<LogoDog />)
    }

    test('should render component', () => {
        renderLogoDog()
        const img = screen.getByRole('img', { name: /dog-logo/i })
        expect(img).toBeInTheDocument()
    })

    test('should render text', () => {
        renderLogoDog()
        const textComponent = screen.getByText(/Buscador de razas/i)
        expect(textComponent).toBeInTheDocument()
    })
})