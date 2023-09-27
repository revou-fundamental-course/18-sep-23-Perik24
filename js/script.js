let slideIndex = 0;

    function showSlides() {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); 
    }
    showSlides();

    function validateForm() {
      const nameInput = document.getElementById("name").value;
      const emailInput = document.getElementById("email").value;

      if (nameInput.trim() === "") {
          alert("Please enter your name.");
      } else if (emailInput.trim() === "") {
          alert("Please enter your email address.");
      } else {
          // Form is valid, you can submit it here
          alert("Form is valid. Submitting...");
      }
  }




