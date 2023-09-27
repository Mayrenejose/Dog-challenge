import { render } from '@testing-library/react'
import { AllImgs } from './index'

describe('<ShowImgs />', () => {

    const dataImages = [
        'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
        'https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg'
    ]

    test('should renders correctly when data is passed to it', () => {
        render(<AllImgs dataImgs={dataImages}/>)
        const { container } = render (
            <AllImgs dataImgs={dataImages} isSubRace={true} selectOption='akita' />
        )

        expect(container).toBeInTheDocument()
    })

    test('should does not show images when no data is passed to it', () => {
        const { container } = render(
            <AllImgs dataImgs={undefined} isSubRace={false} selectOption={'akita'} />
        )

        expect(container).toBeInTheDocument()
    })
})