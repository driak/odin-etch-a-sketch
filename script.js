let gridLengthSetterButton = document.querySelector('.grid-size-setter-button')
let randomColorButton = document.querySelector('.color-randomizer')

let gridLength = 16;

function makeGrid(gridLength) {
  for (let i = 1; i <= gridLength**2; i++) {
    let squareDiv = document.createElement('div') 

    squareDiv.classList.add('grid-square')
    squareDiv.classList.add(`${i}`)

    squareDiv.style.width  = `${100 / gridLength}%`
    squareDiv.style.height = `${100 / gridLength}%`

    squareContainerDiv.appendChild(squareDiv)
  }
}

function squareColoringCallback(event) {
  event.target.style.backgroundColor = 'yellow'
}

function destroyGridSquares() {
  while (squareContainerDiv.firstChild) {
    squareContainerDiv.removeChild(squareContainerDiv.firstChild)
  }
}

gridLengthSetterButton.addEventListener('click',
  event => {
    do {
      gridLength = Number( prompt('Set grid size') )
    } while (gridLength > 100 || gridLength <= 0)
   
  
  destroyGridSquares()

  makeGrid(gridLength)
})

function randomizeColorCallback(event) {
  const randomNumberTill256 = () => {
    return Math.floor( Math.random() * 255 ) + 1 
  }
  const randomRGBValue = () => {
    return `rgb(${randomNumberTill256()}, ${randomNumberTill256()}, ${randomNumberTill256()})` 
  }
  
  event.target.style.backgroundColor = randomRGBValue()
}

randomColorButton.addEventListener('click', 
  event => {
    squareContainerDiv.removeEventListener('mouseover', squareColoringCallback) 
    squareContainerDiv.addEventListener('mouseover', randomizeColorCallback) 
  })

let squareContainerDiv = document.createElement('div')

squareContainerDiv.classList.add('grid-square-container')

squareContainerDiv.style.width = '650px'
squareContainerDiv.style.height = '650px'

makeGrid(gridLength)

squareContainerDiv.addEventListener('mouseover', squareColoringCallback) 

document.body.appendChild(squareContainerDiv)
