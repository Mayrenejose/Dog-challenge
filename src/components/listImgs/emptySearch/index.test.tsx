import { render, screen } from '@testing-library/react'
import { EmptySearch } from './index'

describe('<EmptySearch />', () => {

    const renderEmptySearch = () => {
        return render(<EmptySearch />)
    }

    test('should render component', () => {
        renderEmptySearch()
        const component = screen.getByTestId('show-emptySearch')

        expect(component).toBeInTheDocument()
    })

    test('should render image in component', () => {
        renderEmptySearch()
        const img = screen.getByRole('img', { name: /dog-logo/i })
        expect(img).toBeInTheDocument()
    })

    test('should render text in component', () => {
        renderEmptySearch()
        const textComponent = screen.getByText(/Aún no realizas una busqueda./i)
        expect(textComponent).toBeInTheDocument()
    })
})