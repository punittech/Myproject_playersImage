   
   /*Toggle code for box2*/
   
   
   
   const tableContainer = document.querySelector('.table-container');
    const table = document.getElementById('myTable');

    tableContainer.addEventListener('mouseover', () => {
      table.style.display = 'block';
    });

    tableContainer.addEventListener('mouseout', () => {
      table.style.display = 'none';
    });



//   function mouseOver() {
//   document.getElementById("myTable").style.display = "none";
//   }

// function mouseLeave() {
//   document.getElementById("myTable").style.display = "block";
// }