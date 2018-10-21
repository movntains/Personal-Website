import React from 'react';

const BostonUniversity = () => (
  <div className="container">
    <h2 className="secondary-title">Boston University</h2>
    <div className="degree-info">
      <p className="degree">
        Master of Science in Computer Information Systems
      </p>
      <p className="minor">Concentration in Security</p>
      <p>September 2015 - September 2017</p>
      <p>GPA: 4.00</p>
    </div>
    <div className="degree-courses">
      <p className="courses-info">
        This program involved completing 11 courses in a condensed, 7-week
        format. The courses consisted of 1 pre-requisite course, 6 core courses,
        and 4 courses that were required for a concentration in Security. The
        courses were as follows:
      </p>
      <ul>
        <li>Fundamentals of Information Technology</li>
        <li>Information Structures with Java</li>
        <li>Quantitative Methods for Information Systems</li>
        <li>Business Data Communication and Networks</li>
        <li>Database Design and Implementation for Business</li>
        <li>Information Systems Analysis and Design</li>
        <li>IT Strategy and Management</li>
        <li>IT Security Policies and Procedures</li>
        <li>Enterprise Information Security</li>
        <li>Network Security</li>
        <li>Digital Forensics and Investigations</li>
      </ul>
    </div>
  </div>
);

export default BostonUniversity;
