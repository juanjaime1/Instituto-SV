import React from 'react';
import Header from './Header.jsx';
import CourseList from './CourseList.jsx';
import CourseCard from './CourseCard';
import AboutUs from './AboutUs';
import Footer from './Footer';

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
