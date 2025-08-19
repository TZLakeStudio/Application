import { ReactNode, useEffect, useState } from "react";


export default function CountDown(props: { target: string }): ReactNode {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0
  });

  useEffect(() => {
    const target = new Date(props.target).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [props.target]);

  return (
    <span className="badge badge--success">
      {timeLeft.days}d {timeLeft.hours}h
    </span>
  );
}
