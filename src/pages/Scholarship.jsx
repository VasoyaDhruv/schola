import React, { useEffect, useState } from 'react'
import img1 from '../assets/bg.jpg'
import img2 from "../assets/logo_img.jpg"
import aerrow from "../assets/right-aerrow.svg"
import '../styles/Scholarship.css'
// import courseData from '../assets/data/course-card.json'
import courseData from "../assets/data/course-card.json"
import CourseCard from '../components/common/CourseCard'


const Scholarship = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  // const [coursesData, setCourseData] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }
  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value);
  };

  // useEffect(() => {
  //   const fetchCardData = async () => {
  //     try {
  //       const response = await fetch("https://securemyscholrship-be.onrender.com/api/courses");
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       setCoursesData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchCardData();
  // }, []);
  // console.log(coursesData)
  return (
    <div className='wrapper'>
            <div className='main-search-section'>
                {/* <div>
                    <input type='text'className='course_name' placeholder='Course Name'/>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 19L15 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div> */}
                <input 
                     type='text'
                     className='course_name' 
                     placeholder='Course Name'
                     value={searchQuery}
                     onChange={handleSearchInputChange}
                />
                <input type='text'className='level_name' placeholder='Education levels'/>
                <input 
                type='text'
                className='country_name' 
                placeholder='Country name'
                value={countryFilter}
                onChange={handleCountryFilterChange}/>
            </div>
           
                  <CourseCard courseData={courseData} searchQuery={searchQuery} countryFilter={countryFilter}/>
           </div>  
    
  )
}

export default Scholarship