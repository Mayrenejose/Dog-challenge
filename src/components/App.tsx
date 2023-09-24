import {useState, useEffect} from 'react'
import { FilterBox } from './filterBox'
import { ListImgs } from './listImgs'

function App() {
  const[data, setData] = useState(null)
  const[selectOption, setSelectOption] = useState('')
  const[subRaceValue, setSubRaceValue] = useState('')
  const[selectSubRace, setSelectSubRace] = useState(false)
  const[selectRace, setSelectRace] = useState(false)
  
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => { return response.json()})
      .then(response => setData(response))
  }, [])

  return (
    <div className='flex'>
      <div className='w-1/4'>
        <FilterBox 
          data={data}
          selectOption={selectOption} 
          selectRace={selectRace}
          selectSubRace={selectSubRace}
          subRaceValue={subRaceValue}
          setSelectOption={setSelectOption}
          setSelectRace={setSelectRace}
          setSelectSubRace={setSelectSubRace}
          setSubRaceValue={setSubRaceValue}
        />
      </div>

      <div className='w-3/4'>
        <ListImgs
          selectOption={selectOption}
          subRaceValue={subRaceValue}
          selectRace={selectRace} 
          selectSubRace={selectSubRace}
        />
      </div>
    </div>
  )
}

export default App
