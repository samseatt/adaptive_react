import React from 'react';

function Footer(props) {
    return(
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col col-4 offset-1">
                    <h5>Corporate</h5>
                    <ul class="list-unstyled">
                        <li><a href="./contactus"><span class="fa fa-address-card"></span> Contact Us</a></li>
                        <li><a href="./aboutus"><span class="fa fa-info"></span> About Us</a></li>
                        <li><a href="./legal"><span class="fa fa-university"></span> Legal</a></li>
                        <li>
                            <span class="navbar-text">
                                <a id="loginButton">
                                <span class="fa fa-comment"></span> Leave a Comment</a>
                            </span>
                        </li>
                    </ul>
                </div>
               <div class="col col-6 align-right">
                <br/>
                   <p class="copyright" align="right">
                        <a class="btn btn-social-icon btn-google-plus" href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                        <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook"></i></a>
                        <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                        <a class="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                        <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o"></i></a>
                   </p>
                   <br/>
                   <p class="copyright" align="right">&copy; Copyright 2003-2021 Adaptive Enterprise Inc.</p>
                </div>  
            </div>            
        </div>
    </footer>
    )
}

export default Footer;