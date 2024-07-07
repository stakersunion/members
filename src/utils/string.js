const titleCase = (str) => {
  if (typeof str !== 'string') {
    return
  }
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export { titleCase }
