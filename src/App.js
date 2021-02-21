import React,{useState,Fragment} from 'react';
import './App.css';
import Header from './components/Header'
import Gallery from './components/Gallery'
 import lake from './images/lake-inniscarra-thumb.jpg'
import lake_ from './images/lake-inniscarra-trainer.jpg'
import perf from './images/performance-series-thumb.jpg'
import perf_ from './images/performance-series-trainer.jpg'
import slow from './images/slow-pulls-thumb.jpg'
import slow_ from './images/slow-pulls-trainer.jpg'
import minutes from './images/20-minutes-to-toned-thumb.jpg'
import minutes_ from './images/20-minutes-to-toned-trainer.jpg'
import charles from './images/charles-race-thumb.jpg'
import charles_ from './images/charles-race-trainer.jpg'
import full from './images/full-body-hiit-thumb.jpg'
import full_ from './images/full-body-hiit-trainer.jpg'
import kafue from './images/kafue-river-thumb.jpg'
import kafue_ from './images/kafue-river-trainer.jpg'
import shred from './images/shred-and-burn-thumb.jpg'
import shred_ from './images/shred-and-burn-trainer.jpg'
 

function App() {
  const [state, setState] = useState([
  { title: "Lake Inniscarra, Ireland-Pyramid", time: "30:53",met:"6,248",view:true,image:lake,image2:lake_ ,anim:'animate__lightSpeedInRight'},
  { title: "Performance Series", time: null,met:null,view:false,image:perf,image2:perf_ ,number:9},
  { title: "Slow Pulls and Fast Intervals", time:"44:13",met:"9,948",view:false,image:slow,image2:slow_ },
  { title: "20 Minutes to Toned", time:null,met:null,view:false,image:minutes,image2:minutes_,number:12},
  { title: "Charles Race, Boston, Massachusetts", time:"36:22",met:"8,648",view:false,image:charles,image2:charles_ },
  { title: "Full-Body HIIT Series", time:null,met:null,view:false,image:full,image2:full_ ,number:12},
  { title: "Kafue River, Zambia-Power Stroke Pyramid", time:"22:22",met:"4,660",view:false,image:kafue,image2:kafue_},
  { title: "Shred & Burns Series", time:null,met:null,view:false,image:shred,image2:shred_,number:16}]);
   
   const addClass=(title)=>{
    setState(state.map(item=>item.title===title ? {...item,classN:true}:item))
   }
   
  return (
    <Fragment>
      <Header/>
      <Gallery className="animate__backInUp" addClass={addClass} results={state} />
    </Fragment>
  );
}

export default App;
