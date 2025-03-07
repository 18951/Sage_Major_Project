 // Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
      offset: 100
    });

    let isLoggedIn = false;
    let cartItems = [];

    // Profile Menu Functionality
    const profileButton = document.getElementById('profileButton');
    const profileMenu = document.getElementById('profileMenu');
    
    function updateProfileMenu() {
        profileMenu.innerHTML = isLoggedIn 
            ? `
                <a href="#profile">My Profile</a>
                <a href="#track">Track Services</a>
                <a href="#" onclick="handleLogout()">Logout</a>
              `
            : `
                <a href="Signin_Page.html" onclick="openAuthmodal()">Login/Register</a>
              `;
    }
    function openAuthModal() {
      authModal.classList.add('active');
      resetAuthForm();
      profileMenu.classList.remove('active');
  }
  
  function closeAuthModal() {
    authModal.classList.remove('active');
    resetAuthForm();
}
    profileButton.addEventListener('click', () => {
        profileMenu.classList.toggle('active');
    });

    // Close profile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!profileButton.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.classList.remove('active');
        }
    });

    // Login/Logout Functions
    function handleLogin() {
        isLoggedIn = true;
        updateProfileMenu();
        alert('Successfully logged in!');
    }

    function handleLogout() {
        isLoggedIn = false;
        updateProfileMenu();
        alert('Successfully logged out!');
    }

    // Cart Functionality
    const cartButton = document.getElementById('cartButton');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const cartCount = document.getElementById('cartCount');

    cartButton.addEventListener('click', () => {
        cartModal.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    // Location Selection
    const locationSelect = document.getElementById('locationSelect');
    locationSelect.addEventListener('change', (e) => {
        const selectedLocation = e.target.value;
        if (selectedLocation) {
            alert(`Location selected: ${e.target.options[e.target.selectedIndex].text}`);
        }
    });

    // Initialize profile menu
    updateProfileMenu();

    // Initialize dropdowns
    initDropdowns();
    // Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
    
    // Simple form validation for search
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
      searchBar.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = this.querySelector('input').value;
        if (input.trim() === '') {
          alert('Please enter a service to search');
        } else {
          // In a real application, this would navigate to search results
          alert('Searching for: ' + input);
        }
      });
    }
    //back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
    