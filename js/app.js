/*--------------------------------------
            Toggler Navbar 
--------------------------------------*/
const navToggler = document.querySelector( '.nav-toggler' );

const toggleNav = () => {
  navToggler.classList.toggle( 'active' );
  document.querySelector( 'nav' ).classList.toggle( 'open' );
}

navToggler.addEventListener( 'click', toggleNav );

/* Close navbar when clicking on a nav item */
document.addEventListener( 'click', ( e ) => {
  if ( e.target.closest( '.nav-item' ) ) {
    toggleNav(); 
  }
});

/* Sticky Header */
const stickyHeader = () => {
  ( pageYOffset > 60 ) 
    ? document.querySelector( 'header' ).classList.add( 'sticky' )
    : document.querySelector( 'header' ).classList.remove( 'sticky' );
}

window.addEventListener( 'scroll', stickyHeader );
/* Sticky Header */
/*--------------------------------------
            Toggler Navbar 
--------------------------------------*/
