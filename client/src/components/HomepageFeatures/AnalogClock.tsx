import { ReactNode, useEffect, useState } from "react";


export default function AnalogClock(): ReactNode {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secAngle = sec * 6;
  const minAngle = min * 6 + sec * 0.1;
  const hourAngle = ((hour % 12) * 30) + (min * 0.5);

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="56" fill="#fff" stroke="#333" strokeWidth="4"/>
      <line
        x1="60" y1="60"
        x2="60" y2="32"
        stroke="#333"
        strokeWidth="6"
        strokeLinecap="round"
        transform={`rotate(${hourAngle} 60 60)`}
      />
      <line
        x1="60" y1="60"
        x2="60" y2="20"
        stroke="#666"
        strokeWidth="4"
        strokeLinecap="round"
        transform={`rotate(${minAngle} 60 60)`}
      />
      <line
        x1="60" y1="60"
        x2="60" y2="12"
        stroke="#e33"
        strokeWidth="2"
        strokeLinecap="round"
        transform={`rotate(${secAngle} 60 60)`}
      />
      <circle cx="60" cy="60" r="4" fill="#333"/>
    </svg>
  );
}
