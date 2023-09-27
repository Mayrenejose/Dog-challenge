import useMobile from '../../../hooks/useMobile'
import { useEffect } from 'react'
import { IFilterByRace } from '../../../type'
import { Selector } from '../selector/index'
import { OptionsBox } from '../optionsBox'

export const FilterByRace = ({ 
    data,
    selectOption,
    selections,
    setSelectOption,
    setSelectSubRace,
    setSelections 
}:IFilterByRace ) => {
    const isMobile = useMobile()
    const containerSelect = isMobile
        ? 'px-4 pt-1' 
        : 'shadow-md bg-gradient-to-r from-sky-200 to-indigo-200 rounded-xl items-center'
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        const eventWord = event.target.value
        if ( selections && !selections.includes(eventWord) ) {
            setSelections([...selections, eventWord])
        }
        setSelectOption(eventWord)
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
            className={`${containerSelect}
            flex 
            flex-col`}
        >
            <Selector handleChange={handleChange} value={selectOption}>
                { data && ( 
                    Object.entries(data.message).map((key, value) => {
                    return <option key={value}> {key[0]} </option>
                    })
                )}
            </Selector>
            { !isMobile && (
                <OptionsBox armedArray={selections} setSelections={setSelections}/>
            )}
        </div>
    )
}