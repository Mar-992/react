import React, { useState, useEffect } from 'react';
import { API_URL } from './../constants';

export function  Albums() {

    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        fetch(`${API_URL}/albums`)
        .then(res=>res.json())
        .then(json=>setAlbums(json))
        .catch(err=>alert(err))
    }, [])
    return(
        <div id="albums">
             {
                albums.length > 0 ? <ul>
                    {albums.map(album => {
                        return (
                            <li key={album.id}>
                                <span>ID: {album.id}</span>
                                <br />
                                <span>Title: {album.title}</span>
                            </li>
                        )
                    })}
                </ul> : <h2>Loading Albums...</h2>
            }
        </div>
    )
    
}