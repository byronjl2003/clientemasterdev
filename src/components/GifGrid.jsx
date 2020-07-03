import React,{useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import  '../../node_modules/animate.css';
export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        getGifs(category).then( imgs => setImages(imgs))
    },[category])
    
    
    return (
        <div className="animate__animated animate__fadeIn">
            <h3>{category}</h3>
            
                {
                    
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            { ...img}
                        >

                        </GifGridItem>))
                }
            
        </div>
    )
}
