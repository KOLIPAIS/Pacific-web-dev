
    // Toggle the sidebar open or close
    function toggleSidebar() {
      const slider = document.getElementById("slider");
      const content = document.getElementById("content");

      // Toggle the active class for the sidebar
      slider.classList.toggle("active");

      // Adjust z-index based on the sidebar's state
      if (slider.classList.contains("active")) {
        content.style.zIndex = 1;  // Send content to the back when sidebar is active
      } else {
        content.style.zIndex = 2;  // Bring content back in front when sidebar is closed
      }
    }

    // Toggle the social media icons
    function toggleSocialMedia() {
      const socialIcons = document.getElementById("socialMediaIcons");
      socialIcons.classList.toggle("active");
    }

    // Close social media icons when clicking outside
    window.addEventListener("click", function (event) {
      const socialIcons = document.getElementById("socialMediaIcons");
      const socialButton = document.querySelector(".social-media-button");

      if (socialIcons.classList.contains("active") && !socialIcons.contains(event.target) && !socialButton.contains(event.target)) {
        socialIcons.classList.remove("active");
      }
    });

    // Load content based on the menu clicked
    function loadContent(section) {
      const content = document.getElementById("content");
      let html = "";

      switch (section) {
        case "home":
          html = `
            <div class="content-icon"><i class="fas fa-home"></i></div>
            <h2>Welcome to Pacific Agency</h2>
            <p> we are dedicated to providing 
         innovative and tailored solutions that make your journey
         smoother and more successful. Whether you’re looking for
       expert guidance, creative strategies, or reliable support, we bring everything right to your doorstep. Our team is committed to
        understanding your unique needs and delivering results that exceed expectations.

Join us and experience the difference of a partner who truly cares
 about your growth and success. Together, let’s turn challenges into 
 opportunities and ideas into reality.</p>`;
          break;
        case "about":
          html = `
            <div class="content-icon"><i class="fas fa-info-circle"></i></div>
    <h2>About-us</h2>
    <p>
      we specialize in simple, efficient web development for your company.
      Our mission is to create clean, responsive, and user-friendly websites that perfectly
      represent your brand and help you connect with your customers.
    </p>
    <p>
      We understand that every business is unique, which is why we offer tailored solutions
      designed to meet your specific goals. From small business sites to fully integrated, we handle it all with professionalism and care.
    </p>
    
     
    <p>
      Let us help you bring your vision into reality solution with simple and affordable powerful web solutions! Here are the <b>overview</b>;
    </p>

<ul style="display: flex; justify-content: center; list-style-position: inside;padding-left: 0; gap: 10px; flex-wrap: wrap; text-align: center; margin-top: 10px;">
  <li style="list-style: disc;">
    <b>Company Web Design</b><br>
    <span style="font-size: 0.9em; color:rgb(111, 111, 111);">Build a digital storefront to promote your brand and services.</span>
  </li>
  <li style="list-style: disc;">
    <b>Tourism & Hospitality</b><br>
    <span style="font-size: 0.9em; color:rgb(111, 111, 111);">Engage travelers with enticing visuals and service highlights.</span>
  </li>
  <li style="list-style: disc;">
    <b>School</b><br>
    <span style="font-size: 0.9em; color:rgb(111, 111, 111);">Showcase your campus, programs, and achievements online.</span>
  </li>
  <li style="list-style: disc;">
    <b>Hospital</b><br>
    <span style="font-size: 0.9em; color:rgb(111, 111, 111);">Highlight healthcare services, specialists, and patient care.</span>
  </li>
  <li style="list-style: disc;">
    <b>Sole Trader Store</b><br>
    <span style="font-size: 0.9em; color:rgb(111, 111, 111);">Create visibility for local businesses with targeted promotions.</span>
  </li>
</ul>
    `;
          
          break;
      case "location":
  html = `
    <div class="content-icon"><i class="fas fa-map-marker-alt"></i></div>
    <h2>Our Location</h2>
    <p>We are located at Idubada, Port Moresby Technical College.</p>
    
    <iframe
  class="google-map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2776358857664!2d147.1430691758827!3d-9.444973391696158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69023055dd65e889%3A0x17df5f687d49f241!2sPort%20Moresby%20Technical%20College!5e0!3m2!1sen!2spg!4v1716371634000!5m2!1sen!2spg"
  width="100%"
  height="300"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>


    <p style="margin-top: 10px;">
      <a href="https://www.google.com/maps/dir/?api=1&destination=Idubada+Port+Moresby+Technical+College" target="_blank" style="color:#1b45ff; text-decoration:none; font-weight:bold;">
        Get Directions
      </a>
    </p>
  `;
  break;

  
  case "contact":
          html = `
            <div class="content-icon"><i class="fas fa-phone"></i></div>
            <h2>Contact Us</h2> 
            <div class="container-avatar">       
           <img src="/img/avatars.jpg" alt="Contact Image" class="contact-image" />

           
             <label>Web Dev: Pacific Agency</label>
            <p> Email:<a href="mailto:infodev@gmail.com">infdev@gmail.com</a>
          <p>Phone:<a href="tel:+67574883048">+675:74883048</a></p>
            <i>Port Moresby Technical college College Po box, 1969, National Capital District-Port Moresby<P> `;
            break;
        case "logout":
         {
            window.location.href = "cover.html"; // Redirect to login page
          }
          return; // Prevent sidebar from reopening
        default:
          html = "<h2>Welcome</h2><p>Select a section from the menu.</p>";
      }

      content.innerHTML = html;
      toggleSidebar(); // Close sidebar after clicking
    }

const sliderImages = document.querySelectorAll("#imageSlider img");
let currentSlide = 0;

function showNextSlide() {
  sliderImages[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % sliderImages.length;
  sliderImages[currentSlide].classList.add("active");
}

// Initialize first image as active
sliderImages[currentSlide].classList.add("active");

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);



    // Click outside to close the sidebar
    window.addEventListener("click", function (event) {
      const sidebar = document.getElementById("slider");
      const menuButton = document.querySelector(".menu-button");

      // If the sidebar is open and the click is outside of it, close the sidebar
      if (sidebar.classList.contains("active") && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove("active");
        content.style.zIndex = 2;  // Reset z-index when sidebar is closed
      }
    });