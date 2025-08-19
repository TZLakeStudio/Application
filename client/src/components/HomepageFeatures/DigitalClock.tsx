import { ReactNode, useEffect, useState } from "react";


export default function DigitalClock(): ReactNode {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="badge badge--info">
      {now.toLocaleTimeString()}
    </span>
  );
}
