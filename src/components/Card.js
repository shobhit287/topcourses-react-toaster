import { toast } from 'react-toastify';
import './Card.css';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
function Card({data,likedCourses,setlikedcourses}){
    function clickHandler(){
        //if already liked
        if(likedCourses.includes(data.id)){
            setlikedcourses((prev)=>prev.filter((id)=>(id!==data.id)));
            toast.warning("Like Removed");
        }
        else{
            //not liked and liked course is empty
            if(likedCourses.length===0){
                setlikedcourses([data.id]);
            }
            //not liked but array is not empty
            else{
                setlikedcourses((prev)=>[...prev,data.id]);       
             }
             toast.success("Liked Successfully");
        }
    }
    return(
        <div className='card_info' >
        <div className='img_icon'>
           <img src={data.image.url} alt="img"></img>
           {
           likedCourses.includes(data.id)?( <button className='heart_icon' onClick={clickHandler}><FcLike /></button>):( <button className='heart_icon' onClick={clickHandler}><FcLikePlaceholder /></button>)         }
        </div>
        <div className='card_desc'>
        <h2>{data.title}</h2>
        <p>
            {
            data.description>100?(data.description.substr(0,100))+"...":(data.description) 
            }
        </p>
        </div>
        </div>
    )
}
export default Card;