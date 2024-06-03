const menu = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.close-button');
const toggleBtn = document.querySelector('.toggle-button');
const navItems = document.querySelectorAll('li a');

if(toggleBtn){
  toggleBtn.addEventListener('click', ()=>{
    menu.classList.add('show-menu')
  })
}

if(closeBtn){
  closeBtn.addEventListener('click', ()=>{
    menu.classList.remove('show-menu')
  })
}

/* when i was cliking menu items in mobile view the menu was closed */
navItems.forEach((navItem) => {
  navItem.addEventListener('click', ()=> {
      if (menu.classList.contains('show-menu')) {
          menu.classList.remove('show-menu');
      }
  });
});



