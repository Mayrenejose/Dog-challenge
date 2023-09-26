import useFetch from '../../../hooks/useFetch'
import { IShowImgs } from '../../../type'

export const ShowImgs = ({ 
    isSubRace = false,
    option, 
    selectOption 
}: IShowImgs) => {
    
    const url = isSubRace ? `https://dog.ceo/api/breed/${selectOption}/${option}/images`: `https://dog.ceo/api/breed/${option}/images`
    const { data } = useFetch(url)
    const dataImg = data?.message
    const maxImagesToShow = 2

    return (
        <div className='flex w-1/2 gap-4 p-4'>
            { dataImg && (
                Object.entries(dataImg).slice(0, maxImagesToShow).map((key: any, value: number) => {
                    return (
                        <div key={value}>
                            <img src={key[1]} alt='imgs'/>
                        </div>
                    )
                })
            )
            }
        </div>

    )
}