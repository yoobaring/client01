import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('Paul')
  const [surName, setSurName] = useState('Gilbert')

  return ( <div>     
    Name: 
      <input 
        type="text" 
        name="name"         
        onChange={ (e) => setName(e.target.value) }
      />
      <br/>Surname:
      <input 
        type="text" 
        name="surName"         
        onChange={ (e) => setSurName(e.target.value) }
      />
      <br/> {name} {surName}
  </div>)
}


// const App = () => {

//   const [count, setCount] = useState(0) 

//   return (
//     <>
//       <h2>Counter {count} </h2>
//       <button onClick={() => setCount(count+1)} > + </button>
//       <button onClick={ () => setCount(count-1)}>  - </button>
//     </>
//   )
// }

export default App