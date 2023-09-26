import { ListHeader } from './listHeader'
import { EmptySearch } from './emptySearch'
import { IListImage } from '../../type'
import { AllImgs } from './allImgs'

export const ListImgs = ({ 
    arraySubRace,
    selections,
    selectOption,
    subRaceValue
}:IListImage) => {
    
    return (
        <div
            className='min-h-min
            w-11/12
            my-4
            shadow-lg
            bg-white
            rounded-xl
            items-center
            justify-center'
        >
            <ListHeader />

            { (arraySubRace?.length === 0 && selections?.length === 0) ?
                <div className='w-full h-full p-8'>
                    <EmptySearch />
                </div>
            :
                <div>
                    <AllImgs dataImgs={selections}/>
                    <AllImgs 
                        dataImgs={arraySubRace} 
                        isSubRace={true}
                        selectOption={selectOption}
                    />
                </div>
            }
        </div>
    )
}