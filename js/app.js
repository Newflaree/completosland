window.addEventListener( 'load', function() {
  /* Page Loader*/
  document.querySelector( '.page-loader' ).classList.add( 'fade-out' );
  setTimeout( () => {
    document.querySelector( '.page-loader' ).style.display = 'none';
  }, 600);
  /* Page Loader*/

  /* Animation on scroll*/
  AOS.init();
  /* Animation on scroll*/
});


/*-----------------------------------------------------------------------------------------*/


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


/*-----------------------------------------------------------------------------------------*/


/*--------------------------------------
              Menu Tabs 
--------------------------------------*/
const menuTabs = document.querySelector( '.menu-tabs' );

const activeDataTarget = ( e ) => {
  if ( e.target.classList.contains( 'menu-tab-item' ) && 
       !e.target.classList.contains( 'active' ) ) {

    const target = e.target.getAttribute( 'data-target' );

    menuTabs.querySelector( '.active' ).classList.remove( 'active' );
    e.target.classList.add( 'active' );

    const menuSection = document.querySelector( '.menu-section' );
    menuSection.querySelector( '.menu-tab-content.active' ).classList.remove( 'active' );
    menuSection.querySelector( target ).classList.add( 'active' );

    /* Animation on scroll*/
    AOS.init();
    /* Animation on scroll*/
  }
}

menuTabs.addEventListener( 'click', activeDataTarget );
/*--------------------------------------
              Menu Tabs 
--------------------------------------*/
