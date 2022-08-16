export const fadeIn = () => {

}

/**
 * 
 * @param {*} elementClass - className
 * @param {*} offsetY - how must it must exceed the top of viewport to  be considered in view
 */
export const elementIsInView = (elementClass, offsetY = 0) => {
  const elem = document.getElementsByClassName(elementClass)[0];
  if (elem) {
    const elemTop = elem.getBoundingClientRect().top;
    return elemTop < window.innerHeight - offsetY;
  } else {
    console.error(`element ${elementClass} not found`);
    return false;
  }
}

export const addClass = (elementClass, classToAdd) => {
  const elem = document.getElementsByClassName(elementClass)[0];
  if (elem) {
    elem.classList.add(classToAdd);
  } else {
    console.error(`element ${elementClass} not found`);
  }
}


export const addClassToElements = (elementClass,classToAdd,delay = 0) => {

}