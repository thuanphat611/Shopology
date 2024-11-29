import { useState, useEffect, useRef } from "react";

export default function useHandler() {
  const [day, setDay] = useState(1);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function decreaseSecond() {
      setSecond((prevSecond) => {
        if (prevSecond > 0) return prevSecond - 1;

        setMinute((prevMinute) => {
          if (prevMinute > 0) return prevMinute - 1;

          setHour((prevHour) => {
            if (prevHour > 0) return prevHour - 1;

            setDay((prevDay) => {
              if (prevDay > 0) return prevDay - 1;
              return 1;
            });

            return 23;
          });

          return 59;
        });

        return 59;
      });
    }

    timerRef.current = setTimeout(decreaseSecond, 1000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [second]);

  return { day, hour, minute, second };
}
