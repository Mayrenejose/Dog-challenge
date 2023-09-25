import { IOptionsBox } from "../../../type"
import { SelectionLabel } from "../selectionLabel"

export const OptionsBox = ({ armedArray, setSelections }: IOptionsBox) => {

    const handleOnClick = (option: string) => {
        const deleteOption = armedArray?.filter((item) => item !== option)
        setSelections(deleteOption)
    }
    
    return (
        <div 
                className='mb-2 
                flex flex-wrap 
                p-3 
                gap-0.5'
            >
                { armedArray && (
                    armedArray.map((option: string, index: number) => {
                        return (
                            <div key={index}>
                                <SelectionLabel selectOption={option} handleClick={()=>handleOnClick(option)}/>
                            </div>
                        )
                    }))
                }
            </div>
    )
}