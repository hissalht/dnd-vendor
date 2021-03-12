/**
 * Format a item price string into fancy words.
 *
 * @param {number} price Price in copper coins. ex: 24
 * @return {string} The formatted price. In the format "2 silver coins, 4 copper coins"
 */
export function formatPrice(price) {
  const gold = Math.floor(price / 100)
  const silver = Math.floor((price % 100) / 10)
  const copper = Math.floor(price % 10)

  let result = []

  if (gold !== 0) {
    result.push(`${gold} gold piece${gold === 1 ? '' : 's'}`)
  }

  if (silver !== 0) {
    result.push(`${silver} silver piece${silver === 1 ? '' : 's'}`)
  }

  if (copper !== 0) {
    result.push(`${copper} copper piece${copper === 1 ? '' : 's'}`)
  }

  if (result.length === 1) {
    return result
  }

  return result.slice(0, -1).join(', ') + ' and ' + result[result.length - 1]
}
