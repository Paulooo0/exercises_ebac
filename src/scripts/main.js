document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('drawer-form').addEventListener('submit', function(event) {
    event.preventDefault()
    let maxNum = document.getElementById('max-num').value
    maxNum = parseInt(maxNum);

    let randomNum = Math.random() * maxNum
    randomNum = Math.floor(randomNum+1)
    if (randomNum === maxNum+1) {
      randomNum -= 1
    }

    document.getElementById('result-value').innerText = randomNum
    document.querySelector('.result').style.display = 'block'
  })
})