import { useInView } from "react-intersection-observer";

export const useShowConentInView = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const showContent = {
    transition: "800ms ease-in-out",
    opacity: inView ? 1 : 0,
  }

  return { showContent, ref, inView }
}
