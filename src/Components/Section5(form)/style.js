import React from 'react'

export default ()=>{
return(
<style js="true">{`


.Header-section2
{
    padding:0;
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
    opacity:70%;
}
.vertical-line-inside-navbar{
    border-left: 1.5px solid white;
    height: 28px;
    margin-top: 9px;
    padding-left: 6px;
    opacity:50%;
}
.image-search{
    padding-right: 15px;
}
.text-navbar-search{
    padding-left:15px;
}
.person-image-navbar{
    height:33px;
}
.dashboard-content-homepage {
    width: 100%;
    background-image: linear-gradient(to top, #1483bc, #29a1df);
    // background-color: #2094cf;
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
    opacity: 85%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding:0px;
    text-align: center;
    background-color:#2094cf ;
    border:1px solid white;
    min-height: 25vh;
    max-height: 40vh;
    border-radius: 6px;
  }
 
.card-heading{
   margin-top: 5px;
}

    .card-top {
        display: flex;
        justify-content: space-around;
    }
    .card-heading h3{
        font-size: 20px;
        margin-top: 6px;
    }
.card-amount-box1{
    font-size:36px;
}
.btn2{
    
   background-color:transparent;
   color: white;
   padding: 8px 35px 8px 35px;
   border-radius: 6px;
   margin-left: 20px;
  
   font-size: 17px;

}

.div-viewall{
    display: flex;
    justify-content: flex-end;
    margin-right: 4%;
    margin-top:39px;
}
.btn-viewall{
    background-color:#2094cf ;
    border:1px solid white;
    padding: 8px 40px 8px 40px;
    border-radius:6px;
    color:  #e8e8e8;
    opacity: 85%;
    font-size: 17px;
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
    margin-left: 24px;
   margin-top: 56px;
   opacity: 86%;
}
.navbar-button-section2{
    padding:0;
}
.nav-link::after {
    content: '';
    display: block;
    width: 0;
    height: 5px;
    background: white;
    transition: width .3s;
}

.nav-link:hover::after {
    width: 100%;
    //transition: width .3s;
} 
.* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  /* Search */
  .search-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
  
  .input-group.search-group {
    height: 50px;
    min-width: 50px;
    position: relative;
  }
  
  .input-group .form-control:hover,
  .input-group .form-control:focus {
    padding: 10px 20px;
    width: 380px;
    color: #000;
    cursor: auto;
    background-color: #fff;
  }
  
  .input-group .form-control::-moz-placeholder {
    color: transparent;
  }
  
  .input-group .form-control::-webkit-input-placeholder {
    color: transparent;
  }
  
  .input-group .form-control:hover::-moz-placeholder,
  .input-group .form-control:focus::-moz-placeholder {
    color: #ddd;
  }
  .input-group .form-control:hover::-webkit-input-placeholder,
  .input-group .form-control:focus::-webkit-input-placeholder {
    color: #ddd;
  }
  
  .input-group .form-control:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset;
    border-color: #e6e6e6;
  }
  
  .form-control.search-control {
    background: url(http://milansavov.com/img/zoom.svg) no-repeat right 11px
      center / 25px;
    border: 1px solid #ddd;
    border-radius: 30px;
    color: transparent;
    font-size: 16px;
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
    outline: 0 none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
    cursor: pointer;
    -webkit-backface-visibility: hidden;
  
    transition: width 0.25s;
  }

`}</style>



);


}