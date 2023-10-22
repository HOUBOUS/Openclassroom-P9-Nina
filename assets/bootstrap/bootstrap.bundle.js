const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END));
};