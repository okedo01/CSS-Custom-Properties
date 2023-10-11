// will take the color of the box and set to the header 

const box = document.querySelector('.box')
const boxStyles = getComputedStyle(box)
const boxMainColor = boxStyles.getPropertyValue('--box-main-color')

const header = document.querySelector('header')

header.style.setProperty('--header-bg-color', boxMainColor)