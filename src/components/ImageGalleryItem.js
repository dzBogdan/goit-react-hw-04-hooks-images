import React from 'react';
import './image-finder.moduls.css';

export default function ImageGalleryItem({ image,onClick }){
    const handleOnClic=images=>{
       onClick(images);
    }

    
      const patch = image.webformatURL;
      const id = image.id;
     return(
      <>
      <li className="ImageGalleryItem" key={id} onClick={()=>handleOnClic(patch)}>
         <img src={patch} alt="" className="ImageGalleryItem-image" />
      </li>
      </>  
    );
    
}

