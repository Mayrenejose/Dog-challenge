import { ISelector } from '../../../type'

export const Selector = ({ 
    children, 
    title = 'Selecciona una raza:',
    value,
    handleChange
}: ISelector ) => {
    return (
        <div className="w-52 mb-28 mt-6">
            <label 
                htmlFor='select' 
                className='block 
                text-black-700 
                text-sm 
                font-semibold
                mb-2'
            >
                {title}
            </label>
            <select
                className='w-full 
                bg-white 
                border 
                border-gray-300 
                rounded-md 
                px-3 
                py-2 
                focus:outline-none 
                focus:ring 
                focus:border-blue-300'
                id='select'
                onChange={handleChange}
                value={value}
            >
                <option>Seleccione</option>
                    {children}
            </select>
        </div>
    )
}