
const capitalizeSentence = (value = '', capitalizeLowSizeWord = true, lowSize = 2) => {
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

export default capitalizeSentence
