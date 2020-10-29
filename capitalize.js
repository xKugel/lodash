const upperFirst = require('./upperFirst.js')
const toString = require('./toString.js')

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('FRED')
 * // => 'Fred'
 */
const capitalize = (string) => upperFirst(toString(string).toLowerCase())

const capitalizeString = (value = '', capitalizeLowSizeWord = true, lowSize = 2) => {
  if (typeof value !== 'string') throw new Error('Required to be String')
  const array = value.split(' ')
    return array.reduce((acc, cur) => {
        if (!capitalizeLowSizeWord && cur.length < lowSize) return acc.concat(cur)
          return acc.concat([...cur].reduce((ac, curr, index) => {
            if (index === 0) return ac.concat(curr.toUpperCase())
            return  ac.concat(curr.toLowerCase())
            }, ' '))
          }, '')
}



module.export = {capitalize, capitalizeString}

