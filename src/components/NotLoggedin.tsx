import { useEffect, useState } from "react";

export const NotLoggedin = () => {
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (countDown === 0) {
      return;
    }

    const timer = setInterval(() => {
      setCountDown((prevDown) => prevDown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countDown]);

  return (
    <div>
      <h1>You are not logged in</h1>
      <div>
        <p>Returning to home page in {countDown} seconds...</p>
      </div>
    </div>
  );
};
