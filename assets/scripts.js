/**
 * Scripts are temporally saved here.
 */
( function () {

/* Globals ****************************************************************************************/

    var globals = {

        selectBrandElement: __( '#__select-brand' ),
        cssPath: '/assets/rocket-styles-0.0.3/'
    };

/* Init *******************************************************************************************/
    
    ( function () {

        var brand = localStorage.getItem( 'brand' );

        applyStylesByBrand( brand );

        if ( globals.selectBrandElement ) {

            globals.selectBrandElement.value = brand || 'coles';
        }

    } )();


/* Select brand ***********************************************************************************/

    if ( globals.selectBrandElement ) {

        globals.selectBrandElement.addEventListener( 'change', function ( event ) { 

            var brand = this.value;
            localStorage.setItem( 'brand', brand );

            applyStylesByBrand( brand );

        } );
    }

/* Functions **************************************************************************************/
    
    function applyStylesByBrand( brand ) {

        var elem = __( '#__rocket-stylesheet' );
        
        if ( brand === 'coles') {

            elem.href = globals.cssPath + 'rocket.css';
        }
        else if ( brand === 'flybuys' ) {

            elem.href = globals.cssPath + 'rocket.flybuys.css';
        }
        else {

            elem.href = globals.cssPath + 'rocket.css';
        }
    }

} )();


/* Global functions *******************************************************************************/

function __( string ) {

    if ( string[0] === '#' && string.indexOf( ' ' ) === -1 ) {

        return document.querySelector( string );
    }
    else {

        return document.querySelectorAll( string );
    }
}

function createIconTiles( icons ) {

    console.log( icons );
}