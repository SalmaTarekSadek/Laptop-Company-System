//Function SideBar 

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });

});


  //Function forgot password
// function openForm() {
//     document.getElementById("myForm").style.display = "block";
//     document.getElementById("forget").style.display = "none";
  
//   }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function openForget(){
    document.getElementById("forget").style.display = "block";
    document.getElementById("myForm").style.display = "none";
  }
