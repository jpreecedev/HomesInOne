export const updateObjectInArray = (array, key, data) => {
  return array.map(item => {
    if (item[key] !== data[key]) {
      return item
    }

    return {
      ...item,
      ...data
    }
  })
}
