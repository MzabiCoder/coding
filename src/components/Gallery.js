import React from 'react'

const Gallery = ({results,addClass}) => { 

const changeBox=(title)=>{
  addClass(title);
}
    return (
      <div className="wrapper">
       <div className="gallery grid">
        {results.map(({title,time,met,view,image,image2,number,classN,anim})=>(
          <div key={title}  onClick={()=>changeBox(title)} className={`animate__zoomInRight__delay-4s grid-item ${anim} ${classN && 'shadow'}`}>
           <div className="img">
            {number && (
              <div className="center">
                <h3>{number}</h3>
                <h5>WORKOUTS</h5>
                <i className="fas fa-bars"></i>
               </div>
            )} 
           <img src={image} alt="image"/>
           </div>
            <div className="grid-item-footer">
              <div>
              <h3>{title}</h3>
              {time && met && <div><i className="far fa-clock"></i><span>{time}</span><span><i className="far fa-clock"></i>{met}{' '}M</span> </div> }
               {view && <a href="!#">VIEW DETAILS</a> }
              </div> 
              <img src={image2} alt="image_"/> 
            </div>
          </div> 
        ))}  
             
        </div>
        </div>
    )
}

export default Gallery
