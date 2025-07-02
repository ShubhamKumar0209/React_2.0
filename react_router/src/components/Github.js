import React, { useEffect,useState } from 'react'
function Github() {
     const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/ShubhamKumar0209').then((res)=>res.json()).then((data)=>setData(data))
    }, []);
  return (
    <div className='text-black text-center bg-info'>
      <h1>Github Profile</h1>
        <img src={data.avatar_url} alt="Avatar" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      <p>Name: {data.name}</p>
      <p>Github Url: {data.html_url}</p>
    </div>
  )
}

export default Github
