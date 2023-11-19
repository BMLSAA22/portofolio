
import './style/stat.css';
import React, { useEffect ,useState} from 'react';

const Stat = (props) => {
  const [cnt, setcnt] = useState(0);
  const updateCount = () => {
    // Update the state, triggering a re-render
    setcnt(cnt+1);
  };
  
  
    const intervalId = setInterval(updateCount, 10);
    if (cnt==props.num){
      clearInterval(intervalId);
    }

  
    
    
  
    return (
      <div className='stat'>
        <h1>{cnt}</h1>
        <span>{props.title}</span>
    </div>
  );
}

export default Stat;
