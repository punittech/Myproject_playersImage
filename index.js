   
   /*Toggle code for box2*/
   
   
   
   const container = document.querySelector('.container');
    const table = document.getElementById('myTable');

    container.addEventListener('mouseover', () => {
      table.style.display = 'block';
    });

    container.addEventListener('mouseout', () => {
      table.style.display = 'none';
    });



//   function mouseOver() {
//   document.getElementById("myTable").style.display = "none";
//   }

// function mouseLeave() {
//   document.getElementById("myTable").style.display = "block";
// }