(function(){
    // Open Mobile Menu 
    var menuIcon = document.querySelector('.menu-icon'),
        header = document.querySelector('.wsstax-header');
    menuIcon.onclick = function() {
        header.classList.toggle('menu-opened');
    }

    // Close mobile menu after click
    let  mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', ()=>{
        header.classList.toggle('menu-opened');
    })

    // Scroll To Top
    function getScrollTop() {return (document.scrollingElement || document.documentElement).scrollTop;}
    function scrollToTop() {
        let options = 500;
        var pos = getScrollTop();
        var body = document.body;
        if (pos > options) {
        if (body.hasAttribute('data-scrolltop') === false) {
            body.setAttribute('data-scrolltop', 'on');
        }
        } else {
        if (body.hasAttribute('data-scrolltop') === true) {
            body.removeAttribute('data-scrolltop');
        }
        }
    }
    var scrollBtn = document.querySelector('.scrolltop');
    scrollBtn.onclick = function() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    window.onscroll = function() {scrollToTop()};

}());