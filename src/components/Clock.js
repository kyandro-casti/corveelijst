import React, { useState, useEffect} from 'react';

function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [displayTasks, setDisplayTasks] = useState([]);


  //const internNames = ['Bryan', 'Kyandro', 'Khaled', 'Jason', 'Connor'];
 
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    //indien nodig seperate useEffect

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(timerID);
    };
    // eslint-disable-next-line
  }, []); // Empty dependency array to run the effect only once on mount
  /*useEffect(() => {
    // Check if seconds are 0 and call updateTasks if true
    if (currentDateTime.getSeconds() === 0) {
      updateTasks();
    }
  }, [currentDateTime, updateTasks]);*/
  
  const currentSecond = currentDateTime.getSeconds();
  function tick() {
    setCurrentDateTime(new Date());
    console.log('tick triggered', currentSecond)
    if(currentSecond === 0){
      updateTasks();
    }
  }
  const updateTasks = () =>  {
    const currentDay = currentDateTime.getDay();
    const currentHour = currentDateTime.getHours();
    const currentMinutes = currentDateTime.getMinutes();
    console.log('tasks updated', currentHour, currentMinutes)

    const newDisplayTasks = [];
    tasks.forEach(task => {
      console.log('started for each', task, currentHour, currentMinutes)
      if (currentDay === 1) {
        console.log('today is monday')
        if (currentHour === 16 && currentMinutes === 8) {
          newDisplayTasks.push({ task: 'Tv en speaker klaarzetten voor weekstart (inc kabels en afstandsbediening)', interns: getRandomInterns(2) });
          console.log('weekstart')
        } else if (currentHour === 16 && currentMinutes === 7) {
          newDisplayTasks.push({ task: 'Opruimen lunch', interns: getRandomInterns(1) });
        } else if (currentHour === 15 && currentMinutes === 0) {
          newDisplayTasks.push({ task: 'Aanzetten vaatwasser', interns: getRandomInterns(1) });
        } else if (currentHour === 16 && currentMinutes === 0) {
          newDisplayTasks.push({ task: 'Uitruimen vaatwasser', interns: getRandomInterns(1) });
        }else if (currentHour === 10 && currentMinutes === 0) {
          newDisplayTasks.push(
          {task: 'Uitruimen vaatwasser', interns: getRandomInterns(1) },
          {task: 'planten water geven', interns : ["kyandro", getRandomInterns(1)]}
         );
        } else if (currentHour === 11 && currentMinutes === 30){
          newDisplayTasks.push({task : 'lunch klaarzetten', interns : getRandomInterns(5)});
        } else if (currentHour === 13 && currentMinutes === 0){
          newDisplayTasks.push({task: 'lunch opruimen', interns : getRandomInterns(5)})
        }
      }else if (currentDay === 2){
        if(currentHour === 16 && currentMinutes === 20){
          newDisplayTasks.push({ task: 'Wegbrengen glaswerk en papier/karton', interns: ['bryan', getRandomInterns(1)] }, {task: 'tafeltennis melden', interns: getRandomInterns(1)});
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
    });
  }
  useEffect(() => {
    // Check if seconds are 0 and call updateTasks if true
    if (currentDateTime.getSeconds() === 0) {
      updateTasks();
    }
    // eslint-disable-next-line
  }, [currentDateTime]);
  //const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
  
  const tasks = ['Tv en speaker klaarzetten voor weekstart (inc kabels en afstandsbediening)', 'Klaarzetten lunch', 'Opruimen lunch', 'Aanzetten vaatwasser', 'Uitruimen vaatwasser', 'Wegbrengen glaswerk en papier/karton', 'Planten watergeven']

  const getRandomInterns = (count) => {
    const interns = ['Bryan', 'Kyandro', 'Khaled', 'Jason', 'Connor'];
    const selectedInterns = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * interns.length);
      console.log ("dit is random index ", randomIndex);
      const selectedIntern = interns[randomIndex];
      selectedInterns.push(selectedIntern);
      console.log('selectedinterns pushed', selectedInterns);
      // Remove the selected intern from the array
      interns.splice(randomIndex, 1);
      console.log('logged interns', interns);
    }
    return selectedInterns;
  }

  return (
    <div>
      <h1>Current Time:</h1>
      <h2>{currentDateTime.toLocaleTimeString()}</h2>
      <h1>Current Date:</h1>
      <h2>{currentDateTime.toDateString()}</h2>
      <h1>Tasks for Today:</h1>
      {displayTasks.map((task, index) => (
  <div key={index}>
    <h2>{task.task}</h2>
    <p>Interns Assigned: {task.interns.join(', ')}</p>
  </div>
))}
    </div>
  );
}

export default Clock;
