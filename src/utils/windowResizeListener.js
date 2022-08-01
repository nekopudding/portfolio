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