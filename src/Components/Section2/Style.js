import React from 'react'

export default ()=>{
return(
<style js="true">{`
.Header-section2
{
    background-color: #f8f9fd;

}

.navbar-section2-dashboard{
    padding:2%;
  
}
.navbar-top{
    margin-top: 26px;
    padding-right: 4%;
    display: flex;
    justify-content: space-between;
}
a.nav-link {
    color: white;
}
.vertical-line-inside-navbar{
    border-left: 1.5px solid white;
    height: 28px;
    margin-top: 9px;
    padding-left: 6px;
}
.image-search{
    padding-right: 15px;
}
.text-navbar-search{
    padding-left:15px;
}
.person-image-navbar{
    height:25px;
}
.dashboard-content-homepage {
    width: 100%;
    background-color: #2094cf;
    // min-height: 48vh;
    transition: all 0.3s;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
}
.dashboard-column-cards-one {
    margin-left: 43px;
    float: left;
    padding: 0 0px;
    min-width:20%;
  }
  .dashboard-column-cards-two {
    float: left;
    padding: 0 0px;
    min-width:20%;
  }
  .dashboard-column-cards-three {
    float: left;
    padding: 0 0px;
    min-width:20%;
  }
  .dashboard-column-cards-four {
    float: left;
    padding: 0 0px;
    min-width:20%;
  }
  
  /* Remove extra left and right margins, due to padding */
  
  .dashboard-row-homepage {margin: 0 -5px;
  display:flex;
  justify-content:space-around;
  color: #d0e2ee;
  margin-top: 66px;
  }
  
  /* Clear floats after the columns */
  
  .dashboard-row-homepage:after {
    content: "";
    display: table;
    clear: both;
  }
  
  
  /* Style the counter cards */
  
  .card-data {
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding:0px;
    text-align: center;
    background-color:#2094cf ;
    border:1px solid white;
    min-height: 25vh;
    max-height: 40vh;
    border-radius: 10PX;
  }
 
.card-heading{
   margin-top: 5px;
}

    .card-top {
        display: flex;
        justify-content: space-around;
    }

.btn1{
    background-color: #e4f3fa;
   border: 2px solid #e4f3fa;
   color: #1c90cd;
   padding-left: 15px;
   padding-right: 15px;
   padding-top: 5px;
   border-radius: 8px;
   padding-bottom: 5px;
   margin-left: 20px;

}

.div-viewall{
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
    margin-top:39px;
}
.btn-viewall{
    background-color:#2094cf ;
    border:1px solid white;
    padding-left: 30px;
    padding-right: 30px;
    // padding-top: 5px;
    border-radius: 8px;
    padding-bottom: 5px;
    color: white;
    opacity: 85%;
    
}
.card-recieved {
    min-height: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.vertical-line-inside-box {
    border-left: 1.5px solid white;
    height: 86px;
    opacity:50%;
  }
  .card-amount{
      color: white;
      font-size:18px;
  }
  .cardone {
      color: white;
    /* justify-content: space-around; */
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
    min-height: 25vh;
    justify-content: center;
}
.navbar-bottom-data{
    margin-left: 66px;
    margin-right: 66px;
}
.link_button {
    margin-left: 43px;
   margin-top: 56px;
   opacity: 86%;
}
.navbar-button-section2{
    padding:0;
}


`}</style>



);


}