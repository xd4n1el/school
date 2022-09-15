import { useState, useEffect } from "react";
import { breakpoints } from "../utils/screen/Breakpoints";

const useBreakpoints = () => {
  const currentSize = window.screen.width;
  const [sizes, setSizes] = useState([]);
  const [breakpoint, setBreakpoint] = useState();

  useEffect(() => {
    setSizes(
      breakpoints.map((point) => {
        const inNumber = point.split("p");
        return parseInt(inNumber[0]);
      })
    );
  }, []);

  useEffect(() => {
    if (sizes.length > 0) {
      if (currentSize >= sizes[3]) {
        return setBreakpoint("desktop");
      } else if (currentSize >= sizes[1]) {
        return setBreakpoint("tablet");
      }
      setBreakpoint("mobile");
    }
  }, [sizes, currentSize]);

  return breakpoint;
};

export default useBreakpoints;
