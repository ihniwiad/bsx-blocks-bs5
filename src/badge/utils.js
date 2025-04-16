const makeBadgeClassNames = ( attributes, className ) => {

    const {
        state,
        badgeType,
    } = attributes;

    const classNames = [ 'badge' ];

    if ( !! state ) {
        classNames.push( 'text-bg-' + state );
    }

    if ( badgeType === 'pill' ) {
        classNames.push( 'rounded-pill' );
    }

    if ( !! className ) {
        classNames.push( className );
    }

    return classNames.join( ' ' );
}

export default makeBadgeClassNames;


