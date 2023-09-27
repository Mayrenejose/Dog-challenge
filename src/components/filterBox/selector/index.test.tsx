import { render, screen } from '@testing-library/react';
import { Selector } from './index'

describe('<Selector />', () => {
    const selectorRender = () => { render(
        <Selector handleChange={() => {}}>
            <option value='akita'>akita</option>
            <option value='pug'>pug</option>
        </Selector>
    )}

    test('should render texts in component', () => {
        selectorRender()
        const textComponent = screen.getByText(/Seleccione/i)
        const textSelector = screen.getByText(/Selecciona una raza:/i) 
        const optionSelector = screen.getByText(/akita/i) 
        const optionSecondSelector = screen.getByText(/pug/i) 

        expect(textSelector).toBeInTheDocument()
        expect(textComponent).toBeInTheDocument()
        expect(optionSelector).toBeInTheDocument()
        expect(optionSecondSelector).toBeInTheDocument()
    })
})