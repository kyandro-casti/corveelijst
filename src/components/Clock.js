import React, { useState, useEffect} from 'react';

function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [displayTasks, setDisplayTasks] = useState([]);
  const [spareIntern, setSpareIntern] = useState([])


 
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
    // eslint-disable-next-line
  }, []); 

  
  
  function tick() {
    setCurrentDateTime(new Date());
  }
  const updateTasks = () =>  {
    const currentDay = currentDateTime.getDay();
    const currentHour = currentDateTime.getHours();
    const currentMinutes = currentDateTime.getMinutes();
    

    const newDisplayTasks = displayTasks;
    
      if (currentDay === 1) {
        if (currentHour === 10 && currentMinutes === 45) {
          newDisplayTasks.push({ task: 'Tv en speaker klaarzetten voor weekstart (inc kabels en afstandsbediening)', interns: getRandomInterns(2) });
          
        } if (currentHour === 13 && currentMinutes === 0) {
          newDisplayTasks.push({ task: 'Opruimen lunch', interns: getRandomInterns(2) });
          
        } if (currentHour === 15 && currentMinutes === 0) {
          newDisplayTasks.push({ task: 'Aanzetten vaatwasser', interns: getRandomInterns(1) },
          {task: 'tafeltennis melden', interns: getRandomInterns(1)}
          );
          
        } if (currentHour === 16 && currentMinutes === 0) {
          newDisplayTasks.push({ task: 'Uitruimen vaatwasser', interns: getRandomInterns(3) });
          
        } if (currentHour === 16 && currentMinutes === 1) {
          newDisplayTasks.push(
          {task: 'Uitruimen vaatwasser', interns: getRandomInterns(3) },
          {task: 'planten water geven', interns : ["nam1", getRandomInterns(1)]}
         );
         
        } if (currentHour === 11 && currentMinutes === 30){
          newDisplayTasks.push({task : 'lunch klaarzetten', interns : getRandomInterns(2)});
          
        }
      }else if (currentDay === 2){
        if(currentHour === 16 && currentMinutes === 20){
          newDisplayTasks.push({ task: 'Wegbrengen glaswerk en papier/karton', interns: ['name2', getRandomInterns(1)] }, {task: 'tafeltennis melden', interns: getRandomInterns(1)});
          
        } else if (currentHour === 11 && currentMinutes === 30) {
          newDisplayTasks.push({ task: 'klaarzetten lunch', interns: getRandomInterns(5) });
          
        } else if (currentHour === 13 && currentMinutes === 0){
          newDisplayTasks.push(
            {task: 'lunch opruimen', interns: getRandomInterns(5)},
            {task: 'aanzetten vaatwasser', interns : getRandomInterns(1)}
          );
          
        } else if(currentHour === 10 && currentMinutes === 0){
          newDisplayTasks.push({task: "vaatwasser uithalen", interns : getRandomInterns(3)})
          
        } else if(currentHour === 16 && currentMinutes === 0){
          newDisplayTasks.push({task: "vaatwasser uithalen", interns : getRandomInterns(3)})
          
        }
      }
      
      setDisplayTasks(newDisplayTasks);
    
  }
  
  useEffect(() => {
    
    if (currentDateTime.getSeconds() === 0) {
      updateTasks();
    }
    // eslint-disable-next-line
  }, [currentDateTime]);
  
  const getRandomInterns = (count) => {
    const interns = ['name1', 'name2', 'name3', 'name4', 'name5'];
    const selectedInterns = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * interns.length);
      const selectedIntern = interns[randomIndex];
      selectedInterns.push(selectedIntern);
      interns.splice(randomIndex, 1);
    }
    return selectedInterns;
  }
  const handleCheckboxCheck = (event, taskIndex) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      if(displayTasks.length < 2){
        setDisplayTasks([])
      }else{
        displayTasks.splice(taskIndex, 1);
      }
    }
  };
  const handleSickIntern = () =>{
    setSpareIntern(getRandomInterns(1))
  }
  return (
    <div>
      <h1>Current Time:</h1>
      <h2>{currentDateTime.toLocaleTimeString()}</h2>
      <h1>Current Date:</h1>
      <h2>{currentDateTime.toDateString()}</h2>
      <h1>Tasks for Now:</h1>
      {displayTasks.map((task, index) => (
  <div key={index}>
    <h2>{task.task}
    <input type="checkbox" onChange={(event) => handleCheckboxCheck(event, index)}/>
    </h2> 
    <p>Interns Assigned: {task.interns.join(', ')}</p>
  </div>
))}
      <p>In geval van zieken</p>
      <p>{spareIntern}</p>
      <button onClick={handleSickIntern}}>extra stagiair</button>

    </div>
  );
}

export default Clock;
