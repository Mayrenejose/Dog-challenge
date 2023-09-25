import { useState, useEffect } from 'react'

function useFetch( url: string ) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const responseData = await response.json()
        setData(responseData)
        setLoading(false)
    } catch (error) {
        setLoading(false)
    }
    }

    fetchData()
}, [url])

    return { data, loading }
}

export default useFetch
