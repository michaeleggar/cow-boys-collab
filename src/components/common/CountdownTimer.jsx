import { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../../utils/dateUtils';

export default function CountdownTimer({ targetDate, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(timer);
        onComplete?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (timeLeft.total <= 0) {
    return <span className="countdown--complete">DROP LIVE!</span>;
  }

  return (
    <div className="countdown">
      <div className="countdown__segment">
        <span className="countdown__value">{timeLeft.days}</span>
        <span className="countdown__label">DAYS</span>
      </div>
      <span className="countdown__separator">:</span>
      <div className="countdown__segment">
        <span className="countdown__value">{timeLeft.hours}</span>
        <span className="countdown__label">HRS</span>
      </div>
      <span className="countdown__separator">:</span>
      <div className="countdown__segment">
        <span className="countdown__value">{timeLeft.minutes}</span>
        <span className="countdown__label">MIN</span>
      </div>
      <span className="countdown__separator">:</span>
      <div className="countdown__segment">
        <span className="countdown__value">{timeLeft.seconds}</span>
        <span className="countdown__label">SEC</span>
      </div>
    </div>
  );
}
