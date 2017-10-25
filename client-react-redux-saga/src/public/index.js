// This can be done more clever later by dynamic vars
var localLanguage
var defaultLanguage = 'pl'
var languagesAvailable = ['en', 'pl']

// We check client language
if (window.navigator.language) {
  localLanguage = window.navigator.language
} else if (window.navigator.userLanguage) {
  localLanguage = window.navigator.userLanguage
}

if (languagesAvailable.indexOf(localLanguage) < 0) {
  // Client language does not exist, we set to default
  localLanguage = defaultLanguage
}

// We create DOM element script and inject it on the page
// So we we load file eg. bundle.en.js
var fileref = document.createElement('script')
fileref.setAttribute('type', 'text/javascript')
fileref.setAttribute('src', '/bundle.' + localLanguage + '.js')
document
  .getElementsByTagName('head')[0]
  .appendChild(fileref)
