import React from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const knightSource = {
    beginDrag(props){
        return {}
    }
}

function collect(connect, monitor){
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

const Knight = ({connectDragSource, isDragging}) => {
    return connectDragSource(
        <div 
            style={{
                opacity : isDragging ? 0.5 : 1, 
                fontSize: 25, 
                fontWeight: 'bold',
                cursor: 'move'
            }}
        >
            <span>♘</span>
        </div>
    )
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);