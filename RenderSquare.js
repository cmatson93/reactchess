import React from 'react';

const RenderSquare = (props) => {
    const black = (props.x + props.y) % 2 === 1;
    const isKnightHere = props.knightX === props.x && props.knightY === props.y;
    const piece = isKnightHere ? <Kight /> ? <Knight /> : null;

    return (
        <Square black={black}>{piece}</Square>
    )
}

export default RenderSquare;