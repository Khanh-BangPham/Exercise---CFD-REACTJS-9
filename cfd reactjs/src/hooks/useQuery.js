import { useEffect, useState } from "react"

const useQuery = (callback, dependencyList = [], initialValue = undefined) => {
    const [data, setData] = useState(initialValue)
    useEffect(() => {
        callback()
        .then(res => {
            setData(res.data)
        })
    }, dependencyList)

    return {data}
}

export default useQuery