import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
//     const [data,setData]= useState([])
//     useEffect(() => {
// fetch('https://api.github.com/users/ashab-hajik')
// .then(res => res.json())
// .then(data => {console.log(data),
// setData(data)
// })

    // }, [])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers:{data.followers}
      <img className='text-center w-32 h-32 rounded-full' src={data.
avatar_url
} alt=" git picture" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/ashab-hajik')
    return res.json()
}
