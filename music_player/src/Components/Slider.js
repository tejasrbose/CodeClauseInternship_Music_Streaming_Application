import React, { useRef, useState, useEffect} from "react";

const Slider=({percentage=0,onChange})=>{
 
    const [position,setPosition] = useState(0);
    const [margininLeft,setMargininLeft] = useState(0);
    const [progressBarwidth,setProgressBarwidth] = useState(0);

    const rangeRef = useRef();
    const thumbRef = useRef();
 
    useEffect(() => {
        const rangeWidth = rangeRef.current.getBoundingClientRect().width
        const thumbWidth = thumbRef.current.getBoundingClientRect().width
        const centerThumb = (thumbWidth / 100) * percentage * -1
        const centerProgressBar =
          thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
        setMargininLeft(centerThumb)
        setPosition(percentage)
        setProgressBarwidth(centerProgressBar)
      }, [percentage])

    return(
         <div className="slider-container">
          <div
           className="progress-bar-cover"
           style={{
            width:`${progressBarwidth}px`
           }}
           ></div>
           
           <div
           className="thumb"
           ref={thumbRef}
           style={{
            left:`${position}%`,
            marginLeft:`${margininLeft}px`
           }}
           ></div>
           
           <input 
           type="range"
           value={position}
           ref={rangeRef}
           step='0.01'
           className="range"
           onChange={onChange}
           />
         </div>

    );
};
export default Slider;