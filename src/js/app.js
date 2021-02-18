document.addEventListener('DOMContentLoaded', function(){


eventlisteners();
darkmode();
});
function eventlisteners(){
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.addEventListener('click', navegacionResponsive);
}
function navegacionResponsive(){
  const navegacion = document.querySelector('.navegacion');
  if (navegacion.classList.contains('mostrar')) {
    navegacion.classList.remove('mostrar');
  }else{
    navegacion.classList.add('mostrar');
  }
  // navegacion.classList.toggle('mostrar') // NOTE: opcion corta de quitar y mostrar la clase

}
function darkmode(){
  const preferencesDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  // console.log(preferencesDarkMode.matches);
  if(preferencesDarkMode){
    document.body.classList.add('dark-mode');
  }else{
    document.body.classList.remove('dark-mode');
  }
  const botonDarkmode =document.querySelector('.dark-mode-boton');
  botonDarkmode.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');// .toogle realiza la misma funcion de un if
  });
}
