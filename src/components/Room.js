import React from 'react';

const Room = (props) => {
    console.log(props);
    return (
        <div className='room-card'>
            <h1>{props.room.name}</h1>
            <p>{props.room.description}</p>
            <div className='amenities-card'>
                <h2>Amenities:</h2>
                <ul>
                    {props.room.amenities.map(item => {
                        return (
                            <li key={Math.random()}>{item}</li>
                        ) 
                    })}
                </ul>
            </div>
        </div>
    )
}
 
export default Room;