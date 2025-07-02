import React from 'react'
import { useParams } from 'react-router-dom';
function User() {
  const { id } = useParams();
  return (
    <div className='text-white bg-dark text-center'>
      <h1>User: {id}</h1>
    </div>
  );
}

export default User;
