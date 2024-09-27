import React, { useState, useEffect } from 'react';


const Useeffecthook = () =>{
    // const [count, setCount] = useState(0);

    // // useEffect to update the document title after every render
    // useEffect(() => {
    //   document.title = `You clicked ${count} times`;
    // }, [count]); // Only run the effect when 'count' changes

    // return(
    //     <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //   <h1>Counter with useEffect</h1>
    //   <p>You have clicked the button {count} times.</p>
    //   <button onClick={() => setCount(count + 1)}>Click Me!</button>
    // </div>
    // );

    const [count, setCount] = useState(0);

    // useEffect to set up a timer that increments the count every second
    useEffect(() => {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
  
      // Cleanup function to clear the timer when the component unmounts
      return () => clearInterval(timer);
    }, []); // Empty dependency array to run the effect only once (on mount)
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Timer with Cleanup</h1>
        <p>Count: {count}</p>
      </div>
    );

};

export default Useeffecthook;