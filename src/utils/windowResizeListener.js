/**
 * Set function to call when window width exceeds the specified number
 * @param {*} callback900
 */
export function windowResizeListener(callback900) {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      callback900();
    }
  })
}

/**
 * Run callback every time the window is resized
 * @param {*} callback 
 */
export function windowAnyResizeListener(callback) {
  window.addEventListener('resize',() => {
    callback();
  })
}