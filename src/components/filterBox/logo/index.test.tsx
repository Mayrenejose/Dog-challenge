import { render, screen } from '@testing-library/react'
import { LogoDog } from './index'

describe('<LogoDog />', () => {
    const renderLogoDog = () => {
        return render(<LogoDog />);
    }

    test('should render component', () => {
        const { getByRole } = renderLogoDog()
        const img = screen.getByRole('img', { name: /dog-logo/i })
        expect(img).toBeInTheDocument()
    })

    test('should render text', () => {
        const { getByText } = renderLogoDog()
        const textComponent = screen.getByText(/Buscador tu raza/i)
        expect(textComponent).toBeInTheDocument()
    })
})