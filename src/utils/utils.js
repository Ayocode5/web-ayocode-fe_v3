const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const configAnimationCursor = {
  innerSize: 8,
  outerSize: 32,
  outerAlpha: 0.2,
  innerScale: 0.7,
  outerScale: 3,
  color: "65, 68, 75",
  clickables: [
    "a",
    "input[type='text']",
    "input[type='email']",
    "input[type='number']",
    "input[type='submit']",
    "input[type='image']",
    "label[for]",
    "select",
    "textarea",
    "button",
    ".link",
  ],
};

export { getWindowDimension, configAnimationCursor };
