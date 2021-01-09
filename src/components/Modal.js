import { useEffect } from 'react';
import './image-finder.moduls.css';


export default function Modal({ images, index, onClick }) {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    

    const handleKeyDown = e => {
        console.log(e.code);
        if (e.code === 'Escape') {
            onClick();
        }
    }



    return (
        <div className="Overlay">
            <div className="Modal">
                <img src={images[index].largeImageURL} alt="" />
            </div>
        </div>
    )

}

