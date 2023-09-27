import { render, screen } from '@testing-library/react';
import { OptionsBox } from './index';

describe('<OptionsBox />', () => {

    test('should render the <SelectionLabel/> component', () => {
        const handlePrueba = () => {
            return true
        }
        render(<OptionsBox setSelections={handlePrueba} />)
        const selectionLabelComponent = screen.getByTestId('show-selection-label')

        expect(selectionLabelComponent).toBeInTheDocument()
    })
}) 