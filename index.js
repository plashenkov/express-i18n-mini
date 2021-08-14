const template = require('lodash/template')

export function createI18n(options) {
    return function (req, res, next) {
        next()
    }
}
