import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

// useEffect(()=>{
//   let res=fetch("https://restcountries.com/v3.1/all" ).then((result)=>{
//     result.json().then((resp)=>{
//       setData(resp)
//     })
//   })
// },[])
// console.warn(data[0])


// *************************************************************oR*******

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json(); // Wait for the JSON response
      setData(result); // Set the fetched data to state
      console.log('Fetched Data:', result)
      result.forEach((country, index) => {
        console.log(`Index: ${index}, Country Code: ${country.cca3}, Common Name: ${country.name.common}`);
      });

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData(); // Call the fetch function
}, []);


// console.warn(setData)

  return (
    <>
   <div className='Countries'>
      <h1>Countries</h1>
      <ul>
        {data.map(country => (
          
          <li
           key={country.cca3}>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100"></img>
          <p><b> country name </b>: {country.name.common} </p>
          <p>Population: {country.population}</p>
          <p > status:  {country.status}</p>
        
        

          
          {/* <br/> */}
          {/* <hr/> */}
          </li>
          

        ))}
      </ul>
    </div>







   
{/* <form action=" " >

<form className='form ' onSubmit={submitdata}>
      <label>Enter your fname:
        <input type="text" name='fname' required 
        value={user.fname}
        onChange={change}
        />
      </label>
      <table > enter your lname:
        <input type='text'name='lname' required
         value={user.lname}
         onChange={change}
        />
      </table>
      <table>Enter your email :
        <input type="text" name='email' required
         value={user.email}
         onChange={change}
        />
      </table>
      <table>Enter your Pnumber:
        <input type='number' name='Pnumber' required
         value={user.Pnumber}
         onChange={change}
        />
      </table>

      <button type="submit" >submit</button>
    </form>

</form> */}
{/* //     fname:"",
//     lname:'',
//     email:'',
//     Pnumber:'',
//   })
//   let name ,value;
//   const change =(e)=>{ */}
{/* // name = e.target.name
// value = e.target.value

// setUser({...user,[name]:value})
//   }
// const submitdata=(e)=>{
//   e.prevent.Default()
//   console.log(user)
// } */}
    </>
  )
}

export default App
