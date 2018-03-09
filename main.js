
var modal = document.getElementById('SimpleModal');
var modalBtn = document.getElementById('modalBtn');
var CloseBtn = document.getElementsByClassName('CloseBtn')[0];

modalBtn.addEventListener('click', openModal);
CloseBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);
function openModal(){
  modal.style.display = 'block';
};

function closeModal(){
  modal.style.display = 'none';
};

function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
};
