/**
 * 
 * @param {*} elem
 * @param {*} offsetY - offset from bottom of viewport to be considered in view
 */
export const elementIsInView = (elem, offsetY = 0) => {
  if (elem) {
    const elemTop = elem.getBoundingClientRect().top;
    return elemTop < window.innerHeight - offsetY;
  } else {
    console.error(`element not found`);
    return false;
  }
}

export const translateYByDistFromViewportTop = (container, elem,multiplier = 0) => {
  const containerTop = container.getBoundingClientRect().top;
  elem.style.transform = `translateY(${-multiplier * containerTop}px)`;
}

/**
 * Add class to a collection of elements
 * @param {*} elems - HTMLCollection of elements
 * @param {*} classToAdd 
 * @param {*} initialDelay
 * @param {*} delayBetweenElements - delay in ms
 */
export const addClass = (elems, classToAdd, initialDelay = 0, delayBetweenElements = 0) => {
  if (!elems || elems.length === 0) {
    return console.error(`no valid elems found`);
  }

  setTimeout(() => {
    if (elems[0] && !elems[0].classList.contains(classToAdd)) {
      elems[0].classList.add(classToAdd);
    }
    delayAddClass(elems,1,classToAdd,delayBetweenElements);
  },initialDelay)
}

const delayAddClass = (elems,index,classToAdd,delay) => {
  setTimeout(() => {
    if (!elems[index] || elems[index].classList.contains(classToAdd)) return; 

    elems[index].classList.add(classToAdd);
    if (index + 1 <= elems.length - 1) {
      delayAddClass(elems,index + 1,classToAdd,delay);
    }
  },delay)
}
