import { ListHeader } from './listHeader'
import { EmptySearch } from './emptySearch'
import { IListImage } from '../../type'
import { ShowImgs } from './showImgs'

export const ListImgs = ({ 
    selectOption,
    selectRace, 
    selectSubRace,
    subRaceValue 
}:IListImage) => {
    return (
        <div
            className='h-auto
            w-11/12
            my-4
            shadow-lg
            bg-white
            rounded-xl
            items-center
            justify-center'
        >
            <ListHeader />

            { (!selectRace && !selectSubRace) ?
                <div className='w-full h-full p-8'>
                    <EmptySearch />
                </div>
            :
            <div>
                <ShowImgs 
                    selectOption={selectOption}
                    subRaceValue={subRaceValue}
                />
            </div>
            }
        </div>
    )
}