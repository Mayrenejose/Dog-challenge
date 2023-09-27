import {useState } from 'react'
import { FilterBox } from './filterBox'
import { ListImgs } from './listImgs'
import useFetch from '../hooks/useFetch'
import useMobile from '../hooks/useMobile'

function App() {
  const[selectOption, setSelectOption] = useState('')
  const[subRaceValue, setSubRaceValue] = useState('')
  const[selectSubRace, setSelectSubRace] = useState(false) 
  const[selections, setSelections] = useState<string[] | undefined>([])
  const[arraySubRace, setArraySubRace] = useState<string[] | undefined>([])

  const url = 'https://dog.ceo/api/breeds/list/all'
  const isMobile = useMobile()
  const marginSubRace = selectSubRace ? 'mt-72' : 'mt-48'
  const flexContainer = isMobile ? 'pb-3' : 'flex'
  const measurementsContainer = isMobile 
    ? 'fixed top-0 z-50 w-full bg-white pb-4' 
    : 'w-1/4 h-full'
  const containerListImgs = isMobile ? `p-4 flex justify-center ${marginSubRace} mb-48` : 'w-3/4'

  const { data } = useFetch(url)

  return (
    <div className={flexContainer}>
      <div className={measurementsContainer}>
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

      <div className={containerListImgs}>
        <ListImgs
          arraySubRace={arraySubRace}
          selections={selections}
          selectOption={selectOption}
        />
      </div>
    </div>
  )
}

export default App
