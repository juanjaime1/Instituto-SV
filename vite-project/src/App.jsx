import React from 'react';
import Header from '../public/components/Header.jsx';
import CourseList from '../public/components/CourseList.jsx';
import CourseCard from '../public/components/CourseCard';
import AboutUs from '../public/components/AboutUs';
import Footer from '../public/components/Footer';
import './CSS/index.css';

function App() {
  return (
    <>
      <Header />
      <CourseCard/>
        <CourseList />
        <AboutUs />
      <Footer />
    </>
  );
}

export default App;
