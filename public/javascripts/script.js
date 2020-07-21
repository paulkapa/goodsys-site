function myFunction() {
    // Get the labels
    var labels = document.getElementsByClassName("toggle-text-container");
    // Get the checkbox
    var checkBox1 = document.getElementById("toggle-text-container-view-1");
    var checkBox2 = document.getElementById("toggle-text-container-view-2");
    // Get the output text
    var text1 = document.getElementsByClassName("text-container-hidden-1");
    var text2 = document.getElementsByClassName("text-container-hidden-2");
    // If the checkbox is checked, display the output text
    if (checkBox1.checked == true){
      if (checkBox2.checked == true){
        text2.item(text2.length-1).style.display = "none";
        labels.item(labels.length-1).style.backgroundColor = "rgba(0,0,0, 0.3)";
        checkBox2.checked = false;
      }
      text1.item(text1.length-1).style.display = "inline-table";
      labels.item(labels.length-2).style.backgroundColor = "rgba(39, 174, 96,0.7)";
      checkBox1.checked = false;
    } else {
      text1.item(text1.length-1).style.display = "none";
      labels.item(labels.length-2).style.backgroundColor = "rgba(0,0,0, 0.3)";
    }
    if (checkBox2.checked == true){
      if (checkBox1.checked == true){
        text1.item(text1.length-1).style.display = "none";
        labels.item(labels.length-2).style.backgroundColor = "rgba(0,0,0, 0.3)";
        checkBox1.checked = false;
      }
      text2.item(text2.length-1).style.display = "inline-table";
      labels.item(labels.length-1).style.backgroundColor = "rgba(39, 174, 96,0.7)";
      checkBox2.checked = false;
    } else {
      text2.item(text2.length-1).style.display = "none";
      labels.item(labels.length-1).style.backgroundColor = "rgba(0,0,0, 0.3)";
    }
    
  }

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]

// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

//showSlides(1, 1);
//showSlides(slideIndex);
showSlides(1, 0);