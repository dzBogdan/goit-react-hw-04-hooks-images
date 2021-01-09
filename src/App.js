import logo from './logo.svg';
import { useState,useEffect} from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import Seatchbar from './components/Searchbar';
import Loadmore from './components/Loadmore';

export default function App() {
  const [images, setImages] = useState([]);
  const [find, setFind] = useState('');
  const [pagecount, setPageCount] = useState(1);
  const [loadModal, setLoadModal] = useState(false);
  
  useEffect(() => {
   
    const findimage = find.toLowerCase();
    if (find !== '') {
      fetch(`https://pixabay.com/api/?q=${findimage}&page=${pagecount}&key=19505552-fc2f314f7846aa759540d6383&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).
        then(images => setImages(images.hits))
    }
        
  }, []);

  useEffect(() => {
    if (find === '') {
      return;
    }

    const findimage = find.toLowerCase();
    fetch(`https://pixabay.com/api/?q=${findimage}&page=${pagecount}&key=19505552-fc2f314f7846aa759540d6383&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).
      then(images => setImages(images.hits));
  }, [find]);

  useEffect(() => {
    if (pagecount === 1) {
      return;
      
    }
   
    const findimage = find.toLowerCase();
    fetch(`https://pixabay.com/api/?q=${findimage}&page=${pagecount}&key=19505552-fc2f314f7846aa759540d6383&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).
      then(image => setImages([...images, ...image.hits]))
    
    
  }, [pagecount]);

  const handleInputFilterChenge = InputFind =>{
    setFind(InputFind);
    setPageCount(1);
  }

 const handleAddPage = ()=>{
   setPageCount(prevState=>prevState + 1);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    
  }
 
  const handleLoadModal=()=>{ 
    setLoadModal(prevState=>!prevState);
  }
  


 
  
  return (
    <div>
    <Seatchbar onChenge = {handleInputFilterChenge}/>
      <br />
      
    <ImageGallery images={images} 
    loadModal={loadModal}
    onClick={handleLoadModal} />
     <br />
    <Loadmore onClick={handleAddPage} />
   
    </div>
  )
 
}


