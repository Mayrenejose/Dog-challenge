import useMobile from '../../hooks/useMobile'
import { ListHeader } from './listHeader'
import { EmptySearch } from './emptySearch'
import { IListImage } from '../../type'
import { AllImgs } from './allImgs'

export const ListImgs = ({ 
    arraySubRace,
    selections,
    selectOption
}:IListImage) => {
    const isMobile = useMobile()
    const boxEmptySearch = isMobile ? 'h-auto' : 'w-11/12 my-4 '
    
    return (
        <div
            className={`${boxEmptySearch}
            min-h-min
            shadow-lg
            bg-white
            rounded-xl
            items-center
            justify-center`}
        >
            { !isMobile && (
                <ListHeader />
            )}

            { (arraySubRace?.length === 0 && selections?.length === 0) ?
                <div className='w-full h-full p-8'>
                    <EmptySearch />
                </div>
            :
                <div className='w-full h-full px-8 pb-8'>
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