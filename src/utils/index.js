const slugify = (text) => {
  if (typeof text !== 'string') throw Error(`text must be an string and you provide ${typeof text}`)

  return text
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/[^a-zA-Z0-9 ]*/g, '')
    .replace(/\s+/g, '-')
    .toLocaleLowerCase()
}

module.exports = {
  slugify
}