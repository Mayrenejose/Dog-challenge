import { useState } from 'react'
import { LogoDog } from './logo'
import { IData } from '../../type'
import { FilterByRace } from './filterByRace'
import { FilterBySubRace } from './filterBySubRace'

export const FilterBox = ({ data }: IData) => {
    const[selectOption, setSelectOption] = useState('')
    const[selectSubRace, setSelectSubRace] = useState(false)

    return(
    <div className='
        h-screen 
        w-80 
        bg-white 
        shadow-xl 
        flex flex-col 
        items-center'
    >
        <div className='w-60 h-60'>
            <LogoDog />
        </div>

        <div className='w-60 h-60'>
            <FilterByRace 
                data={data}
                selectOption={selectOption}
                setSelectOption={setSelectOption}
                setSelectSubRace={setSelectSubRace}
            />
        </div>
        
        { selectSubRace && (
            <div className='w-60 h-60'>
                <FilterBySubRace 
                    data={data}
                    selectOption={selectOption}
                />
            </div>
        )}
        
    </div>
    )
}