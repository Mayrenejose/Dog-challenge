import { useEffect, useState } from 'react'
import { IFilterBySubRace } from '../../../type'
import { Selector } from '../selector/index'
import { OptionsBox } from '../optionsBox'

export const FilterBySubRace = ({
    arraySubRace, 
    data, 
    selectOption,
    subRaceValue,
    setArraySubRace,
    setSubRaceValue 
}:IFilterBySubRace ) => {
    const[dataSubRace, setDataSubRace] = useState(null)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const wordSearch = event.target.value
        if ( arraySubRace && !arraySubRace.includes(wordSearch) ) {
            setArraySubRace([...arraySubRace, wordSearch])
        }
        setSubRaceValue(wordSearch)
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
            bg-gradient-to-r from-sky-200 to-indigo-200 
            rounded-xl 
            flex flex-col 
            items-center 
            mt-0'
        >
            <Selector 
                handleChange={handleChange} 
                value={subRaceValue}
                title='Selecciona una sub-raza:'
            >
                { dataSubRace && (
                    Object.values(dataSubRace).map((option: any, index: number) => {
                        return <option key={index}> {option} </option>
                    })
                )}
            </Selector>
            
            <OptionsBox armedArray={arraySubRace} setSelections={setArraySubRace}/>
        </div>
    )
}