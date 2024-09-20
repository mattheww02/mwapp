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
              <div class="col-lg-4 ms-auto"><p class="lead">Recently graduated Computer Science Master’s student keen to be challenged and make an impact in the field of software
development. </p></div>
              <div class="col-lg-4 ms-auto"><p class="lead">Conscientious, hard-working and enthusiastic with an excellent academic record and several periods of
              experience working and volunteering in a wide variety of roles.</p></div>
              <div class="col-lg-4 me-auto"><p class="lead">Relevant experience with software development, project
              management, computer networks, machine learning and full stack development.</p></div>
          </div>
        
          <div class="text-center mt-4">
              <a class="btn btn-xl btn-outline-light" href="https://www.linkedin.com/in/mattheww02/">
                  <i class="fas fa-download me-2"></i>
                  Press Me!
              </a>
          </div>
      </div>
  </section>
  );
};

export default About;