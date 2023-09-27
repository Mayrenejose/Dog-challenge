import useMobile from "../../../hooks/useMobile"
import { IAllImgs } from "../../../type"
import { ShowImgs } from "../showImgs"

export const AllImgs = ({ 
    dataImgs,  
    isSubRace,
    selectOption 
}: IAllImgs) => {
    const isMobile = useMobile()
    const listImgs = isMobile ? '' : 'flex gap-0 overflow-hidden'

    return (
        <div className={listImgs}>
            { dataImgs?.map((item:string, index:number) => {
                return (
                    <div key={index}>
                        <ShowImgs 
                            option={item}  
                            isSubRace={isSubRace}
                            selectOption={selectOption}
                        />
                    </div>
                )
                })
            }
        </div>
    )
}