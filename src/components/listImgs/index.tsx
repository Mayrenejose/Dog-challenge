import { ListHeader } from './listHeader'
import { EmptySearch } from './emptySearch'
import { IListImage } from '../../type'
import { ShowImgs } from './showImgs'
import useFetch from '../../hooks/useFetch'

export const ListImgs = ({ 
    arraySubRace,
    selections,
    selectOption,
    subRaceValue 
}:IListImage) => {
    const url = `https://dog.ceo/api/breed/${selectOption}/images`
    const { data } = useFetch(url)

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
                <ShowImgs data={data}/>
            </div>
            }
        </div>
    )
}