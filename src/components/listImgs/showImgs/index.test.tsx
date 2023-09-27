import { render, screen } from '@testing-library/react'
import { ShowImgs } from './index'

describe('<ShowImgs />', () => {

    test('should render component', () => {
        render(<ShowImgs />)
        const component = screen.getByTestId('show-imgs-component')

        expect(component).toBeInTheDocument()
    })
})