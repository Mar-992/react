import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from './Popup';

export function Gallery(props) {

    console.log(props)
    return(
        <div id="gallery">
            {
                props.photoList.slice(0,50).map(photo=>{
                    return(
                        <div 
                            onClick={()=>{props.openPhoto(photo.url)} }
                            className="image-holder"
                            key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                        </div>
                    )
                })
            }

            {
                props.selectedImage !== '' ?
                    <Popup 
                        selektiranaSLika={props.selectedImage}
                        zatvoriSlika={props.closePhoto}
                    /> : null

            }
        </div>
    )
    
}

Gallery.propTypes = {
    photoList:PropTypes.array.isRequired,
    openPhoto:PropTypes.func,
    selectedImage:PropTypes.string,
    closePhoto:PropTypes.func
}