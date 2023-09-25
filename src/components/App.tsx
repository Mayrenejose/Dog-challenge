import {useState } from 'react'
import { FilterBox } from './filterBox'
import { ListImgs } from './listImgs'
import useFetch from '../hooks/useFetch'

function App() {
  const[selectOption, setSelectOption] = useState('')
  const[subRaceValue, setSubRaceValue] = useState('')
  const[selectSubRace, setSelectSubRace] = useState(false) 
  console.log(setSelectSubRace);
  
  const[selections, setSelections] = useState<string[] | undefined>([])
  const[arraySubRace, setArraySubRace] = useState<string[] | undefined>([])
  const url = 'https://dog.ceo/api/breeds/list/all'

  const { data } = useFetch(url)
  
  return (
    <div className='flex'>
      <div className='w-1/4'>
        <FilterBox 
          arraySubRace={arraySubRace}
          data={data}
          selectOption={selectOption}
          selectSubRace={selectSubRace} 
          selections={selections}
          subRaceValue={subRaceValue}
          setArraySubRace={setArraySubRace}
          setSelectOption={setSelectOption}
          setSelections={setSelections}
          setSelectSubRace={setSelectSubRace} 
          setSubRaceValue={setSubRaceValue}
        />
      </div>

      <div className='w-3/4'>
        <ListImgs
          arraySubRace={arraySubRace}
          selections={selections}
          selectOption={selectOption}
          subRaceValue={subRaceValue}
        />
      </div>
    </div>
  )
}

export default App
