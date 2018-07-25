import React from 'react';
import Room from './Room';

const Rooms = (props) => {
    return (
        <div className='rooms-list'>
            {props.rooms.map(room => {
                return (
                    <Room key={room.name} room={room} />    
                )    
            })}
            {/* Map over and list all rooms with individual <Room /> components */}
        </div>
    )
};
 
export default Rooms;