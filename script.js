searchform=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchform.classList.toggle('active')
}

window.onscroll=()=>{
    searchform.classList.remove('active')
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('actie');}
        else{
            document.querySelector('.header .header-2').classList.remove('actie');}  
        }
    
        