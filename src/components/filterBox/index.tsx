import { LogoDog } from './logo'
import { IFilterBox } from '../../type'
import { FilterByRace } from './filterByRace'
import { FilterBySubRace } from './filterBySubRace'

export const FilterBox = ({ 
    data,
    selectOption,
    selectRace,
    selectSubRace,
    subRaceValue,
    setSelectOption,
    setSelectRace,
    setSelectSubRace,
    setSubRaceValue
}: IFilterBox) => {
    
    return(
    <div 
        className='min-h-screen 
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
                selectRace={selectRace}
                setSelectOption={setSelectOption}
                setSelectRace={setSelectRace}
                setSelectSubRace={setSelectSubRace}
            />
        </div>
        
        { selectSubRace && (
            <div className='w-60 h-60'>
                <FilterBySubRace 
                    data={data} 
                    selectOption={selectOption}
                    subRaceValue={subRaceValue}
                    setSubRaceValue={setSubRaceValue}
                />
            </div>
        )}
        
    </div>
    )
}