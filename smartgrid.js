var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1170px', /* max-width оn very large screen */
        fields: '20px' /* side fields */
    },
    breakPoints: {
        desktop: {
            width: '992px', /* -> @media (max-width: 1100px) */
            fields: '20px'
        },
        tablet: {
            width: '768px',
            fields: '15px'

        },
        phone: {
            width: '576px',
            fields: '10px'
        }
    }
};

smartgrid('./src/static/sass/', settings);