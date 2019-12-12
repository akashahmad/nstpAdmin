import React from 'react';
import Image1 from '../../assects/images/s.png'
import Image2 from '../../assects/images/profile.png'
import Stylejs from './style'



export default ()=>{

    return(
        <div className="container-fluid Header-section2">
        <div className="container-fluid dashboard-content-homepage">

            <nav class="navbar-section2-dashboard navbar-expand-lg ">
                <div class="container-fluid navbar-top">
                <div className="button-div-white">
                    <a href= "" id="sidebarCollapse" className="btntoggle btn2">
                        Profile Settings
                        {/* <span>Toggle Sidebar</span> */}
                    </a></div>
                    {/* <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button> */}

                    <div className="navbar-top-list">
                        <ul class="navbar-topnav-list navbar-nav ml-auto">
                            {/* <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    <div id="google_translate_element">
                                        </div></a>
                            </li> */}
           <form class="search-form">
        <div className="input-group search-group">
            <input type="text" className="form-control search-control" placeholder="Enter your search term...">
       </input>
       </div>
    </form>
    

  
                            <div class="vertical-line-inside-navbar"></div>
                            <li class="nav-item text-navbar-search">
                                <a class="nav-link " href="#">Ahmed Wali</a>
                            </li>
                            <li class="nav-item text-navbar-search">
                            <a class="nav-link " href="#">
                                    <img className="person-image-navbar" src={Image2} alt=""/>
                                </a>
                            </li>
                        </ul></div>
                    </div>
               
            </nav>

            

</div>








<Stylejs/>
</div>
    );
}