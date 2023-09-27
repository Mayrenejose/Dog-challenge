import { render, screen } from '@testing-library/react'
import { ListHeader } from './index'

describe('<ListHeader />', () => {
    const renderListHeader = () => {
        return render(<ListHeader />)
    }

    test('should render text', () => {
        renderListHeader()
        const textComponent = screen.getByText(/Buscardor de razas./i)
        expect(textComponent).toBeInTheDocument()
    })
})