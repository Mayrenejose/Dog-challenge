import { useEffect, useState } from 'react'
import { IFilterBySubRace } from '../../../type'
import { Selector } from '../selector/index'

export const FilterBySubRace = ({ 
    data, 
    selectOption 
}:IFilterBySubRace ) => {
    const[dataSubRace, setDataSubRace] = useState(null)
    const[value, setValue] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        if( data ){
            const checkSubRace = Object.entries(data.message).filter((item) => item[1].length !== 0)
            const subRaceSelect = checkSubRace.filter((items) => items[0] === selectOption).map((option) => {
                return option[1]
            })
            setDataSubRace(subRaceSelect[0])
        }
    },[data, selectOption])

    return (
        <div 
            className='shadow-md 
            bg-indigo-50 
            rounded-xl 
            flex flex-col 
            items-center 
            mt-10'
        >
            <Selector 
                handleChange={handleChange} 
                value={value}
                title='Selecciona una sub-raza:'
            >
                { dataSubRace && (
                    Object.values(dataSubRace).map((option: any, index: number) => {
                        return <option key={index}> {option} </option>
                    })
                )}
            </Selector>
        </div>
    )
}