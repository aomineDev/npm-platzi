const messages = [
  'Oscar',
  'Ana',
  'Nicolay',
  'Yesica',
  'Diego',
  'Laura',
  'aomine',
  'akashi',
  'omar'
]

function randonMsg () {
  const message = messages[Math.floor(Math.random() * messages.length)]

  console.log(message)
}

module.exports = {
  randonMsg
}
