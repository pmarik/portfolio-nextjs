import { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'framer-motion';

type Tsize = {
    width: number 
    height: number | null
}

export function useWindowSize() {
    const [size, setSize] = useState<Tsize>({
      width: 0,
      height: 0,
    });
  
    useIsomorphicLayoutEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return size;
  }