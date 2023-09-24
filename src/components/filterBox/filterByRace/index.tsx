import { useEffect } from 'react'
import { IFilterByRace } from '../../../type'
import { Selector } from '../selector/index'

export const FilterByRace = ({ 
    data,
    selectOption,
    selectRace,
    setSelectOption,
    setSelectRace,
    setSelectSubRace 
}:IFilterByRace ) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectOption(event.target.value)
        setSelectRace(!selectRace)
    }

    useEffect(() => {
        if( data ){
            const checkSubRace = Object.entries(data.message).filter((item) => item[1].length !== 0)
            const resultSubRace = checkSubRace.flat().includes(selectOption)
            setSelectSubRace(resultSubRace)
        }
    },[
        data, 
        selectOption, 
        setSelectSubRace
    ])

    return (
        <div 
            className='shadow-md 
            bg-gradient-to-r from-sky-200 to-indigo-200 
            rounded-xl 
            flex flex-col 
            items-center 
            mt-3'
        >
            <Selector handleChange={handleChange} value={selectOption}>
                { data && ( 
                    Object.entries(data.message).map((key, value) => {
                    return <option key={value}> {key[0]} </option>
                    })
                )}
            </Selector>
        </div>
    )
}