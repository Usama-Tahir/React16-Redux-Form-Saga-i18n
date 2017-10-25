/**
 * TODO: Here to implement right way of localStorage if not supported by the browser
 */

const localStorage = window.localStorage

if (!localStorage) {
  console.log('localStorage not implemented in your browser')
}

export default localStorage
