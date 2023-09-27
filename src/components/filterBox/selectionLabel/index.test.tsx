import { render, screen } from '@testing-library/react'
import { SelectionLabel } from './index'

describe('<SelectionLabel />', () => {

    const renderSelection = () => {
        return render(<SelectionLabel />)
    }

    test('should render component', () => {
        renderSelection()
        const component = screen.getByTestId('show-render-selection')

        expect(component).toBeInTheDocument()
    })

    test('should render image in component', () => {
        renderSelection()
        const img = screen.getByRole('img', { name: /delete/i })
        expect(img).toBeInTheDocument()
    })
})