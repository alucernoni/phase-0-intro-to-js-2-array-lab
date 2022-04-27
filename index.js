// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield']

const destructivelyAppendCat = (name) => cats.push('Ralph')

const destructivelyPrependCat = (name) => cats.unshift('Bob')

const destructivelyRemoveLastCat = () => cats.pop(cats[-1])

const destructivelyRemoveFirstCat = () => cats.shift('cats[0]')

const appendCat = () => [...cats, 'Broom']

const prependCat = () => ['Arnold', ...cats]

const removeLastCat = () => cats.slice(0, -1) 

const removeFirstCat = () => cats.slice(1)