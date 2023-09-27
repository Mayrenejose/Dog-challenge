import useMobile from "../../../hooks/useMobile"
import { IOptionsBox } from "../../../type"
import { SelectionLabel } from "../selectionLabel"

export const OptionsBox = ({ armedArray, setSelections }: IOptionsBox) => {
    const isMobile = useMobile()
    const boxOptions = isMobile 
        ? 'w-full h-28 fixed bottom-0 bg-white shadow-xl' 
        : 'mb-2'

    const handleOnClick = (option: string) => {
        const deleteOption = armedArray?.filter((item) => item !== option)
        setSelections(deleteOption)
    }
    
    return (
        <div
            className={`${boxOptions}
            p-3
            gap-0.5
            flex flex-wrap`} 
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