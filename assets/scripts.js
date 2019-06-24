/**
 * Scripts are temporally saved here.
 */
( function () {

/* Globals ****************************************************************************************/

    var globals = {

        selectBrandElement: __( '#__select-brand' )
    };

/* Init *******************************************************************************************/
    
    ( function () {

        var brand = localStorage.getItem( 'brand' );

        applyStylesByBrand( brand );

        if ( globals.selectBrandElement ) {

            globals.selectBrandElement.value = brand;
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

            elem.href = '/assets/rocket/css/rocket.css';
        }
        else if ( brand === 'flybuys' ) {

            elem.href = '/assets/rocket/css/rocket.flybuys.css';
        }
        else {

            elem.href = '/assets/rocket/css/rocket.css';
        }
    }

} )();


/* Global functions *******************************************************************************/

function __( string ) {

    if ( string[0] === '#' ) {

        return document.querySelector( string );
    }
    else {

        return document.querySelectorAll( string );
    }
}