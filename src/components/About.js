import React from 'react';

const About = () => {
  return (
    <section class="page-section bg-primary text-white mb-0" id="about">
      <div class="container">
          
        <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
        
        <div class="divider-custom divider-light">
            <div class="divider-custom-line" style={{ maxWidth: "11rem" }}></div>
        </div>
        
        <div class="row">
            <div class="col-lg-4 ms-auto"><p class="lead">I recently graduated with an MEng in Computer Science from the University of Warwick and I'm looking to be challenged and make an impact in the field of software
development. </p></div>
            <div class="col-lg-4 ms-auto"><p class="lead">I'm conscientious, hard-working and enthusiastic with an excellent academic record and several periods of
            experience working and volunteering in a wide variety of roles.</p></div>
            <div class="col-lg-4 me-auto"><p class="lead">I have relevant experience with software development, project
            management, computer networks, machine learning and full stack development.</p></div>
        </div>
      
        <div class="text-center mt-4">
            <a class="btn btn-xl btn-outline-light" href={`${process.env.PUBLIC_URL}/cv_matthew_wight.pdf`} download>
                <i class="fas fa-download me-2"></i>
                Download My CV!
            </a>
        </div>
      </div>
  </section>
  );
};

export default About;