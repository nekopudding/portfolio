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

/**
 * Add class to all elements with the matching elementClass
 * @param {*} elementClass 
 * @param {*} classToAdd 
 * @param {*} delay - delay in ms
 */
export const addClass = (elementClass, classToAdd, delay = 0) => {
  const elems = document.getElementsByClassName(elementClass);
  if (!elems || elems.length === 0) {
    return console.error(`no elements found for ${elementClass}`);
  }
  elems[0].classList.add(classToAdd);
  delayAddClass(elems,1,classToAdd,delay);
}

const delayAddClass = (elems,index,classToAdd,delay) => {
  setTimeout(() => {
    if (!elems[index]) return; 

    elems[index].classList.add(classToAdd);
    if (index + 1 <= elems.length - 1) {
      delayAddClass(elems,index + 1,classToAdd,delay);
    }
  },delay)
}