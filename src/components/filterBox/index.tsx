import { LogoDog } from './logo'
import { IFilterBox } from '../../type'
import { FilterByRace } from './filterByRace'
import { FilterBySubRace } from './filterBySubRace'

export const FilterBox = ({ 
    arraySubRace,
    data,
    selections,
    selectOption,
    selectSubRace,
    subRaceValue,
    setArraySubRace,
    setSelections,
    setSelectOption,
    setSelectSubRace,
    setSubRaceValue,
}: IFilterBox) => {
    
    return(
    <div 
        className='min-h-screen 
        w-80 
        bg-white 
        shadow-xl 
        flex flex-col 
        items-center
        gap-4'
    >
        <div className='w-60 h-auto'>
            <LogoDog />
        </div>

        <div className='w-60 h-auto'>
            <FilterByRace 
                data={data}
                selections={selections}
                selectOption={selectOption}
                setSelections={setSelections}
                setSelectOption={setSelectOption}
                setSelectSubRace={setSelectSubRace}
            />
        </div>
        
        { selectSubRace && (
            <div className='w-60 h-auto'>
                <FilterBySubRace
                    arraySubRace={arraySubRace} 
                    data={data} 
                    selectOption={selectOption}
                    subRaceValue={subRaceValue}
                    setArraySubRace={setArraySubRace}
                    setSubRaceValue={setSubRaceValue}
                />
            </div>
        )}
        
    </div>
    )
}