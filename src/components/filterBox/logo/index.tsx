const dog = require('../../../imgs/dog.png')

export const LogoDog = () => {
    return (
        <div 
            className='shadow-md 
            bg-gradient-to-r from-sky-200 to-indigo-200 
            rounded-xl 
            flex flex-col 
            items-center 
            justify-center 
            mt-4'
        >
            <div 
                className='w-32 
                h-32 
                rounded-full 
                overflow-hidden 
                bg-orange-400 
                mt-6'
            >
                <img 
                    alt='dog-logo' 
                    className='object-cover'
                    src={dog} 
                />
            </div>
            <div className='my-4'>
                <h2 className='text-2xl font-bold'>Buscador de razas</h2>
            </div>
        </div>
    )
}