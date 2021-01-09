import { useState} from 'react';
import './image-finder.moduls.css';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from './Modal';

export default function ImageGallery({ images }) {
  
const [index, setIndex] = useState(0);
const [loadModal, setLoadModal] = useState(false);
    

const handleClick =()=>{
     setLoadModal(!loadModal);
    }

const handleLoadModal=()=>{
    setLoadModal(!loadModal)
  }

const  handleFind=patch=>{
      const imageArr = images;
      for(let i=0;i<imageArr.length;i+=1){
        if(patch===imageArr[i].webformatURL){
          setIndex(i);
          return;
        }
      }
    }
     
    return (  
     <div>
      <ul className="ImageGallery" onClick={handleLoadModal}>
         {images.map(item=>(
             <ImageGalleryItem 
             image={item}
             onClick={handleFind}
             />
          ))}
      </ul>
      {loadModal && <Modal 
            images={images}
            index={index}
            onClick={handleLoadModal}      
      />}
      </div>  
    );

}

