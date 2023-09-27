import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react'
import { FilterByRace } from './index'

describe('<FilterByRace />', () => {

    test('should render FilterByRace and handle change', () => {
        const handleChange = jest.fn()
        const setSelectSubRace = jest.fn()
        const setSelections = jest.fn()

        const data = {
            message: {
                pug: [],
                akita: [],
            },
            status: 'succes'
        }

        render(
            <FilterByRace
                data={data}
                selectOption='pug'
                selections={[]}
                setSelectOption={handleChange}
                setSelectSubRace={setSelectSubRace}
                setSelections={setSelections}
            />
        )

        fireEvent.change(screen.getByLabelText(/Selecciona una raza/i), {
            target: { value: 'akita' },
        })

    expect(screen.getByLabelText(/Selecciona una raza/i)).toBeInTheDocument()
    expect(screen.getByText('pug')).toBeInTheDocument()
    expect(screen.getByText('akita')).toBeInTheDocument()
    expect(handleChange).toHaveBeenCalledWith('akita')
    expect(setSelectSubRace).toHaveBeenCalledWith(false)
    expect(setSelections).toHaveBeenCalledWith(['akita'])
})
}) 
