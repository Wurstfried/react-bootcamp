function choice(items){
    return items[Math.floor(Math.random() * items.length)]
}

function remove(items, item){
    return items.splice(items.indexOf(item), 1)
}

export { choice, remove }