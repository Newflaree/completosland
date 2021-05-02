

/*--------------------------------------
            Toggler Navbar 
--------------------------------------*/
const navToggler = document.querySelector( '.nav-toggler' );

const toggleNav = () => {
  navToggler.classList.toggle( 'active' );
  document.querySelector( 'nav' ).classList.toggle( 'open' );
}

navToggler.addEventListener( 'click', toggleNav );
/*--------------------------------------
            Toggler Navbar 
--------------------------------------*/
