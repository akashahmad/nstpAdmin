import React from 'react'
import Style from '../../Components/SideNav/Sidenav.css'
export default ()=>{
    return(
            
             <div class="wrapper">
        
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3 className="logo">LOGO</h3>
            </div>

            <ul class="list-unstyled components ">
              
                <li>
                    <a href="#" >DashBoard</a>
                    
                </li>
              
                <li className="cus">
               
                    <a href="#" > 
                   
                    Customers</a>
                </li>
                <li>
                    <a href="#">Sales Form</a>
                </li>
                <li>
                    <a href="#">Purchase Form</a>
                </li>
                <li>
                    <a href="#">Setting</a>
                </li>
                <li>
                    <a href="#">Notifications</a>
                </li>
                <li>
                    <a href="#">Inbox</a>
                </li>
                
            </ul>
            <ul class="list-unstyled components ">

            <li>
                    <a href="#">
                   
                        Log out</a>
                </li>
            </ul>

        </nav>

       <div className="container-fluid Header">
        <div id="content" className="content">

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid navbar-top">

                    <button type="button" id="sidebarCollapse" className="btntoggle btn1">
                        Add Customer
                        {/* <span>Toggle Sidebar</span> */}
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse div-viewall" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"><div id="google_translate_element"></div></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Ahmed Wali</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> <i class="fas fa-user-circle" size="7x"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="row">
  <div class="column">
    <div class="card"> 
      <div className="cardone">
          <p className="card-amount">196</p>
          <h5>Total Customers</h5>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div className="card-heading"><h3>Dollar</h3>
      <hr style={{backgroundColor:"white"}}/>
      </div>
      <div className="card-recieved">
          <div><p className="card-amount">10,000.00</p>
          <h5> Recieved</h5></div>
      <div class="vl"></div>
      <div><p className="card-amount">10,000.00</p>
          <h5> Sent</h5></div></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <div className="card-heading"><h3>Pakistani</h3>
    <hr style={{backgroundColor:"white"}}/>
    </div>
    <div className="card-recieved"> <div><p className="card-amount">10,000.00</p>
          <h5> Recieved</h5></div>
    <div class="vl"></div>
    <div><p className="card-amount">10,000.00</p>
          <h5> Sent</h5></div></div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <div className="card-heading"><h3>Afghani</h3>
    <hr style={{backgroundColor:"white"}}/>
    </div>
    <div className="card-recieved"> <div><p className="card-amount">10,000.00</p>
          <h5> Recieved</h5></div>
    <div class="vl"></div>
    <div><p className="card-amount">10,000.00</p>
          <h5> Sent</h5></div></div>
    </div>
  </div>
</div>
<nav class="navbar navbar-expand-lg ">
                <div class="container-fluid navbar-top">
                <div class="link_button" >
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"><div id="google_translate_element"></div></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Doller</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pakistani</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Afghani</a>
                            </li>
                        </ul>
                    </div>

                    <div class="collapse navbar-collapse div-viewall" id="navbarSupportedContent">
                     
                           <button type="button" className="btn-viewall">View All</button>
                     
                    </div>
                </div>
            </nav>

</div>
            <div class="line"></div>

           
            <div class="line"></div>

        
            <table>
  <tr>
    <th>Name</th>
    <th>Sent Date</th>
    <th>Amt Sent</th>
    <th>Recieved Date</th>
    <th>Amt Recieved</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>JOHN DOE</td>
    <td>DEC 12,2019</td>
    <td>66,000.00</td>
    <td>Dec 13,2019</td>
    <td>80,000.00</td>
    <td>90,000.00</td>

  </tr>
  <tr>
  <td>JOHN DOE</td>
    <td>DEC 12,2019</td>
    <td>66,000.00</td>
    <td>Dec 13,2019</td>
    <td>80,000.00</td>
    <td>90,000.00</td>

  </tr>
  <tr>
  <td>JOHN DOE</td>
    <td>DEC 12,2019</td>
    <td>66,000.00</td>
    <td>Dec 13,2019</td>
    <td>80,000.00</td>
    <td>90,000.00</td>

  </tr>
  <tr>
  <td>JOHN DOE</td>
    <td>DEC 12,2019</td>
    <td>66,000.00</td>
    <td>Dec 13,2019</td>
    <td>80,000.00</td>
    <td>90,000.00</td>

  </tr>
  <tr>
  <td>JOHN DOE</td>
    <td>DEC 12,2019</td>
    <td>66,000.00</td>
    <td>Dec 13,2019</td>
    <td>80,000.00</td>
    <td>90,000.00</td>

  </tr>
  <tr>
  <td>JOHN DOE</td>
    <td>DEC 12,2019</td>
    <td>66,000.00</td>
    <td>Dec 13,2019</td>
    <td>80,000.00</td>
    <td>90,000.00</td>

  </tr>
</table>
</div>
    </div>
            
            
            
        




    )
}