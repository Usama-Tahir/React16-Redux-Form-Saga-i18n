/* i18n is defined in webpack configuration */
/* global i18n */
/* eslint no-undef: "error" */

const required = value => value ? undefined : i18n('Required')
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? i18n('Invalid email address') : undefined

export {
  required,
  email
}
