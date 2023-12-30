import React, { useState} from 'react';

function Count() {
   const  [count, setCount] = useState(0)


  return (
    <div>
    <div>{count}</div>
    <div>
    <button onClick={()=>setCount(count+1)}>Like</button>
    </div>
    </div>
  )
}

export default Count