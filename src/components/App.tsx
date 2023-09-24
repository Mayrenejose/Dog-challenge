import {useState, useEffect} from 'react'
import { FilterBox } from './filterBox'

function App() {
  const[data, setData] = useState(null)
  
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => { return response.json()})
      .then(response => setData(response))
  }, [])

  return (
    <div>
      <FilterBox data={data} />
    </div>
  )
}

export default App
