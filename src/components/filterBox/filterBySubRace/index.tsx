import useMobile from '../../../hooks/useMobile'
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
    const isMobile = useMobile()
    const containerSelect = isMobile
        ? 'px-4 pt-3' 
        : 'shadow-md bg-gradient-to-r from-sky-200 to-indigo-200 rounded-xl items-center'

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
            className={`${containerSelect}
            flex 
            flex-col`}
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

            { !isMobile && (
                <OptionsBox armedArray={arraySubRace} setSelections={setArraySubRace}/>
            )}
        </div>
    )
}