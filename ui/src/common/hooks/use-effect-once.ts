import { useEffect, useRef } from "react";

type Callback = () => void;

// Run a callback only once, on the first render
function useEffectOnce(callback: Callback) {
  const triggeredRef = useRef(false);

  useEffect(() => {
    if (!triggeredRef.current) {
      callback();
      triggeredRef.current = true;
    }
  }, [callback]);
}

export { useEffectOnce };
