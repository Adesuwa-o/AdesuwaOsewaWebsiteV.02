/* menu show*/
const showMenu = (toggleId, navId) =>{
    const toggle = docment.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
       
    }
}

showMenu('nav-toggle', 'nav-menu')

/* remove menu mobile*/

const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}

navLink.forEach(n => n.addEventListener ('click', linkAction))

/* scroll section active link*/

const sections = document.querySelectorAll('selection[id]')
window.addEventListener('scroll' scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')

        }else{          
              document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')


        }
    })
}
/* scroll reveal animation*/

/* scroll home*/

/* scroll about*/

/* scroll skills*/

/* scroll portfolio*/
