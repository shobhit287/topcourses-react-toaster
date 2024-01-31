import './App.css';
import Navbar from './components/Navbar';
import ClipLoader from "react-spinners/ClipLoader";
import Cards from './components/Cards';
import { useState,useEffect } from 'react';
import Category from './components/Category';
import {apiurl,data} from './data';
import { toast } from 'react-toastify';
function App() {
const [courses,setCourses]=useState(null);
const [category,setcategory]=useState(data[0].title);
useEffect(()=>{
  const fetchdata=async()=>{
    try{
     const res=await fetch(apiurl);
     const api_data=await res.json();
     setCourses(api_data.data);
    }
    catch(error){
    toast.error("Something Went Wrong");
    }
  }
fetchdata();
},[]);
  return (
    <div>
     <Navbar ></Navbar>
     <div className='body_main'>
     <Category filterdata={data} category={category} setcategory={setcategory}></Category>
     {courses !== null ? <Cards cards_data={courses} category={category} /> : <ClipLoader className='loader'></ClipLoader>}
     </div>
     </div>
  );
}

export default App;
