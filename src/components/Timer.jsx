import {useEffect, useState} from 'react';

export default function Timer({timeout, onTimeout}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    // console.log('set timer');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      // console.log('clear timer');
      clearTimeout(timer);
    }
  }, [onTimeout, timeout]);

  useEffect(() => {
    // console.log('set interval');
    const interval = setInterval(() => setRemainingTime(prev => prev - 100), 100);

    return () => {
      // console.log('clear interval');
      clearInterval(interval);
    }
  }, []);


  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
