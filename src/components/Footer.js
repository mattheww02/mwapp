import React from 'react';

const Footer = () => {
 return (
    <footer class="footer text-center shadow-lg">
        <div class="container">
            <div class="row">
              
                <div class="col-lg-4 mb-5 mb-lg-0">
                    {/* <h4 class="text-uppercase mb-4">Email</h4> */}
                    <p class="lead mb-0">
                        <i class="fa-solid fa-envelope me-2"></i>
                         matthew.wight47@gmail.com
                    </p>
                </div>
               
                <div class="col-lg-4 mb-5 mb-lg-0">
                    {/* <h4 class="text-uppercase mb-4"></h4> */}
                    <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/mattheww02/"><i class="fab fa-fw fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/mattheww02"><i class="fa-brands fa-github"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="https://leetcode.com/u/mattheww02/"><i class="fa-solid fa-laptop-code"></i></a>
                </div>
              
                <div class="col-lg-4">
                    {/* <h4 class="text-uppercase mb-4">Mobile</h4> */}
                    <p class="lead mb-0">
                        <i class="fa-solid fa-phone me-2"></i>
                         07804 814 652
                    </p>
                </div>
            </div>
        </div>
    </footer>
 );
};

export default Footer;