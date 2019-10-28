function deliverPresents(houses) {
  if (houses.length === 0) return
  
  first = houses[0]
  rest = houses.slice(1, houses.length)
  console.log('Delivering presents to ' + first)
  deliverPresents(rest)
}

module.exports = deliverPresents
 