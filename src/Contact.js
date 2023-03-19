import React,{useState} from 'react'



const Contact = () => {

  const [currstate, updatestate] = useState(0);

  const btn = () =>{

    updatestate(currstate + 1);
    
      }
    
      const btn1 = () =>{
    
    (currstate > 0 ? updatestate(currstate - 1): updatestate(currstate = 0));
    
      }


  return (
    <>

    <div className='name'>
  

  <button onClick={btn}>start</button>
  
  <h1 className='sadiq'>{currstate}</h1>
  
  <button onClick={btn1}>stop</button>
  
  
  </div>
    </>
  )
}

export default Contact