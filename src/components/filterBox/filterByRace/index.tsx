import { useEffect } from 'react'
import { IFilterByRace } from '../../../type'
import { Selector } from '../selector/index'

export const FilterByRace = ({ 
    data,
    selectOption,
    setSelectOption,
    setSelectSubRace 
}:IFilterByRace ) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectOption(event.target.value)
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
            bg-indigo-50 
            rounded-xl 
            flex flex-col 
            items-center 
            mt-8'
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