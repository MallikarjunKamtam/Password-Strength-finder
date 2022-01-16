const indicate = function(){
  const value = document.querySelector('.input-box').value

  // const alphabetsLower = 'abcdefghijklmnopqrstuvwxyz';
  // const alphabetsUpper = alphabetsLower.toUpperCase();
  // const char = '!@#$%^&*()_+'
  // const numbers = '1234567890'

  if(value.length<6){
    document.querySelector('.indicator').innerHTML = 'Week';
    document.querySelector(".input-box").classList.add('color-red');
    document.querySelector(".input-box").classList.remove('color-green');
    document.querySelector(".input-box").classList.remove('color-yellow');
  }
  else if(value.length>=6 && value.length<12){
    document.querySelector('.indicator').innerHTML = 'Medium';
    document.querySelector(".input-box").classList.remove('color-red');
    document.querySelector(".input-box").classList.add('color-yellow');
    document.querySelector(".input-box").classList.remove('color-green');
  } else if(value.length>=12){
    document.querySelector('.indicator').innerHTML = 'Hard';
    document.querySelector(".input-box").classList.remove('color-yellow');
    document.querySelector(".input-box").classList.add('color-green');
  }
}


document.querySelector('input').addEventListener('keydown', indicate)
