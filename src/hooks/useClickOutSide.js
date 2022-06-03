import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

export const useClickOutside = (handler) => {
  const domElementRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const subHandler = (event) => {
      if (!domElementRef.current?.contains(event.target)) {
        dispatch(handler());
      }
    };
    document.addEventListener("mousedown", subHandler);
    return () => {
      document.removeEventListener("mousedown", subHandler);
    };
  });

  return domElementRef;
};
