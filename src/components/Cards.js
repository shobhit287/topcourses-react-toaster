import React,{useState} from 'react';
import './Cards.css';
import Card from './Card';

function Cards({cards_data,category}) {
  const [likedCourses,setlikedcourses]=useState([]);
  function getcourses(){
  if(category==="All"){
    let allCourses = [];
    Object.values(cards_data).forEach((course_category) => {
      course_category.forEach((data) => {
        allCourses.push(data);
      });
    });
    return allCourses;
  }
  else{
    return cards_data[category];
  }
  }
  return (
    <div className='all_cards'>
      {
        getcourses().map((course) => (
          <Card key={course.id} data={course} likedCourses={likedCourses} setlikedcourses={setlikedcourses} />
        ))
      }
    </div>
  );
}

export default Cards;
