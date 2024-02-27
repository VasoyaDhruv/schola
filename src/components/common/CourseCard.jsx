import React from 'react'
// import course from '../../assets/data/course-card.json'
import img1 from '../../assets/bg.jpg'
import img2 from "../../assets/logo_img.jpg"
import '../../styles/Scholarship.css'
import aerrow from "../../assets/right-aerrow.svg"

const CourseCard = ({courseData, searchQuery,countryFilter}) => {
  const filteredCourses = courseData.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    course.location.toLowerCase().includes(countryFilter.toLowerCase())
  );
  return (
    <div className='cards-wrapper'>
    <div className='main-search-cards'>
      {
        filteredCourses.length > 0 ? 
        (
 
          filteredCourses.map((data, index) => (
            <div className='search-card' key={index}>
                     <div className='top-imgaes'>
                        <img src={img1}/>
                        <img src={img2}/>
                        <svg width="100%" viewBox="4 0 355 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-8e5158c8-4 dxrWVA"><path d="M0 30C0 30 38 12.5 179 15C320 17.5 359 0 359 0V24.5C286 28 249.099 23.8194 179 20.5C108.901 18.7426 70 11 0 14V30Z" fill="#E6EAEF"></path></svg>
                     </div>
                     <div className='card-info'>
                       <h3>{data.title}</h3>
                       <div className='uni-name-loc'>
                          <p>{data.university},{data.location}</p>
                          <img src={aerrow}/>
                       </div>
                       <div className='fees-duration-box'>
                          <div className='fd-subbox'>
                              <p>{data.fees}</p>
                              <p>Est. Annual Tuition</p>
                          </div>
                          <div className='fd-subbox'>
                              <p>{data.duration}</p>
                              <p>Course Duration</p>
                          </div>
                       </div>
                       <div className='second-card-h'>POSTGRADUATE SCHOLARSHIP</div>
                       <div className='scholarship-desc'>
                          <div className='line-component'></div>
                          <p>{data.scholarship.description}</p>
                       </div>
                       <div className='scholarship_promo'><p>{data.scholarship.additional}</p></div>
  
                     <button className='course-card-btn'>Secure Scholarship</button>
                     <p className='last-card-text'>{data.lastText.text1},<span>{data.lastText.duration}</span></p>
                    </div>
                  </div>
          ))
        ) : ( <div className="no-courses">No matching courses found.</div>)
      
     
          }
    </div>
</div>
  )
}

export default CourseCard

