const convertArray = collection => Array.prototype.slice.call(collection)

const cleanProperty = property => property.replaceAll(' ','-').replaceAll('/','-').replaceAll('ç','c').replaceAll('ã','a').toLowerCase()

const content = document.querySelector('tbody')

const arr = convertArray(content.children)

const title = arr[0]

const data = arr.slice(1)

const properties = convertArray(title.children).map(item => cleanProperty(item.innerText))

const dataJson = arr.slice(1).map(item => {

  return convertArray(item.children).reduce((acc,act,idx) => ({...acc,[properties[idx]]:act.innerText}),{})

})

console.log(dataJson)
