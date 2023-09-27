import { ISelectionLabel } from '../../../type'
const deleteX = require('../../../imgs/deleteX.png')

export const SelectionLabel = ({ selectOption, handleClick }: ISelectionLabel) => {
    return (
        <div>
            <button 
            className='bg-orange-400 
            rounded-md 
            w-auto 
            h-8 
            font-semibold
            flex
            justify-between
            p-1'
            onClick={handleClick}
            data-testid= 'show-render-selection'
            > 
                {selectOption}
                <img 
                    alt='delete' 
                    className='mt-1'
                    src={deleteX} 
                /> 
            </button>
        </div>
    )
}