import useMobile from '../../hooks/useMobile'
import { LogoDog } from './logo'
import { IFilterBox } from '../../type'
import { FilterByRace } from './filterByRace'
import { FilterBySubRace } from './filterBySubRace'
import { OptionsBox } from './optionsBox'

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
    const isMobile = useMobile()
    const boxFilters = isMobile 
        ? 'w-full' 
        : 'w-80 shadow-xl bg-white flex flex-col min-h-screen'
    const sizeBoxs = isMobile ? 'relative w-full' : 'w-60 h-auto'
    
    return(
        <div 
            className={`${boxFilters}
            items-center
            gap-4`}
        >
        <div className={sizeBoxs}>
            <LogoDog />
        </div>

        <div className={sizeBoxs}>
            <FilterByRace 
                data={data}
                selections={selections}
                selectOption={selectOption}
                setSelections={setSelections}
                setSelectOption={setSelectOption}
                setSelectSubRace={setSelectSubRace}
            />
        </div>
        
        { (selectSubRace || arraySubRace?.length !== 0) && (
            <div className={sizeBoxs}>
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
    
        { isMobile && 
            (selections?.length !== 0 || arraySubRace?.length !== 0) && (
            <div className='h-32 flex flex-col fixed bottom-0 w-full'>
                <div className='h-0'>
                    <OptionsBox armedArray={selections} setSelections={setSelections}/>
                </div>
                <div className='h-0 mt-16'>
                    <OptionsBox armedArray={arraySubRace} setSelections={setArraySubRace}/>
                </div>
            </div>
        )
        }
        </div>
    )
}