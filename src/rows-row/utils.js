const makeColumnRowClassNames = ( attributes ) => {

    const {
        columnRowType,
        alignItems,
        display,
    } = attributes;

    const classNames = [];

    if ( columnRowType != 'unset' ) {
        if ( !! columnRowType ) {
            // Auto: height according to content.
            // classNames.push( 'column-row-' + columnRowType );
        }
        else {
            // Grow to max.
            classNames.push( 'flex-grow-1' );
        }
    }

    if ( !! alignItems ) {
        classNames.push( 'align-items-' + alignItems );
    }

    if ( !! display ) {
        classNames.push( 'd-' + display );
    }

    //console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );

    return classNames.join( ' ' );
}

export default makeColumnRowClassNames;


