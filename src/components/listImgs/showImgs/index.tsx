import useFetch from '../../../hooks/useFetch'
import useMobile from '../../../hooks/useMobile'
import { IShowImgs } from '../../../type'

export const ShowImgs = ({ 
    isSubRace = false,
    option, 
    selectOption 
}: IShowImgs) => {
    const isMobile = useMobile()
    const contentImg = isMobile ? 'max-h-96' : 'max-h-64 overflow-hidden'
    const renderImg = isMobile ? 'w-60 h-auto max-h-60' : 'w-52 h-auto max-h-52'
    const url = isSubRace 
        ? `https://dog.ceo/api/breed/${selectOption}/${option}/images`
        : `https://dog.ceo/api/breed/${option}/images`
    const { data } = useFetch(url)
    const dataImg = data?.message

    return (
        <div className='grid
            grid-cols-1
            grid-rows-1
            gap-x-1
            gap-y-2
            p-5 
            h-64 
            max-h-764
            overflow-hidden' 
        >
            { dataImg && (
                Object.entries(dataImg).slice(0, 1).map((key: any, value: number) => {
                    return (
                        <div key={value} className={contentImg}>
                            <p className='text-xl 
                                font-medium 
                                text-center 
                                bg-gradient-to-r from-sky-200 to-indigo-200
                                rounded-t-lg'
                            >
                                {option}
                            </p>
                            <img
                                alt='imgs'
                                className={renderImg} 
                                src={key[1]} 
                            />
                        </div>
                    )
                })
            )
            }
        </div>

    )
}