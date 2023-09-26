import { IAllImgs } from "../../../type"
import { ShowImgs } from "../showImgs"

export const AllImgs = ({ 
    dataImgs,  
    isSubRace,
    selectOption 
}: IAllImgs) => {
    return (
        <div className='flex gap-0'>
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