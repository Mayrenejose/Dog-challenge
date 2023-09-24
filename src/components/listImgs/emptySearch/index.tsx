const pets = require('../../../imgs/pets.png')

export const EmptySearch = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-56 h-auto'>
                <img 
                    alt='dog-logo' 
                    className='object-cover'
                    src={pets} 
                />
            </div>
            <div className='mt-10 
                flex flex-col 
                items-center'
            >
                <h1 className='text-3xl font-semibold'>Aún no realizas una busqueda.</h1>
                <h2 className='text-lg font-normal'>Usa los filtros para iniciar.</h2>
            </div>
        </div>
    )
}