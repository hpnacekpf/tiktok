import {useState} from 'react'

function App() {
  
  // const [job, setJob] = useState('')
  // const [jobs, setJobs] = useState(() => {
  //   const storageJobs = JSON.parse(localStorage.getItem('jobs'))

  //   return storageJobs ?? []
  // })

  // const handleSubmit = () => {
  //   setJobs((prev => {
  //     const newJobs = [...prev, job]

  //     const jsonJobs = JSON.stringify(newJobs)
  //     localStorage.setItem('jobs', jsonJobs)

  //     return newJobs
  //   }))
  //   setJob('')
  // }

  // const handleRemoveItem = (key) => {
  //   setJobs((prev => {
  //     const newJobs = jobs.filter((item, index) => index !== key)
  //     const jsonJob = JSON.stringify(newJobs)
  //     localStorage.setItem('jobs', jsonJob)
  //     return newJobs
  //   }))
  // }

  // return (
  //   <div 
  //     className="App"
  //     style={{padding: 20}}
  //   >
  //     <input value={job} onChange={e => setJob(e.target.value)}/>
  //     <button onClick={handleSubmit}>Add</button>

  //     <ul>
  //       {jobs.map((job, index) => 
  //         <li 
  //         key={index} 
  //         style={{marginRight: '20px'}} 
  //         onClick={() => handleRemoveItem(index)}
  //       >
  //         {job}
  //       </li>
  //       )}
  //     </ul>
  //   </div>
  // );
}

export default App;
