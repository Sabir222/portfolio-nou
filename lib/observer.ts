import { Dispatch, SetStateAction } from "react";

//const observerOption = {
//  threshold: 1,
//  rootMargin: "-120px 0px 0px 0px",
//};
const observerOption = {
  rootMargin: "-80px 0px -60% 0px",
  threshold: 0, // Keep threshold at 0
};
export const getIntersectionObserver = (
  setState: Dispatch<SetStateAction<string>>,
) => {
  let direction = "down";
  let lastScrollY = 0;

  // scroll direction check
  const checkDirection = (prevY: number) => {
    const scrollY = window.scrollY;
    if (!(prevY && scrollY)) return;

    direction = scrollY > lastScrollY ? "down" : "up";
    lastScrollY = scrollY;
  };

  const observer = new IntersectionObserver((entries) => {
    checkDirection(lastScrollY);

    entries.forEach((entry) => {
      if (
        (direction === "down" && !entry.isIntersecting) ||
        (direction === "up" && entry.isIntersecting)
      ) {
        setState(entry.target.id);
      }
    });
  }, observerOption);

  return observer;
};
