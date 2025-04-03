---
layout: default copy
---

## Caca Water
<div class="image-gallery">
  <!-- Password-protected image (has data-password attribute) -->
  <div class="image-container password-protected">
    <img src="/assets/images/folder.png" alt="Protected image" class="responsive-image" 
         data-target="/" data-password="secret1">
         <p class="image-caption">Restricted</p>
  </div>
  
  <!-- Regular image (no password protection) -->
  <div class="image-container">
    <img src="/assets/images/folder.png" alt="Regular image" class="responsive-image" 
         data-target="/">
          <p class="image-caption">Info</p>
  </div>
  
  <!-- You can add more images (protected or not) following the same pattern -->
  <div class="image-container">
    <img src="/assets/images/folder.png" alt="Another regular image" class="responsive-image" 
         data-target="/">
          <p class="image-caption">Data</p>
  </div>
</div>

<div id="passwordModal" class="password-modal">
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <h3>Password Required</h3>
    <p>Please enter the password to access this link:</p>
    <input type="password" id="passwordInput" placeholder="Enter password">
    <div id="passwordError" style="color: red; display: none;">Incorrect password</div>
    <button id="submitPassword">Submit</button>
  </div>
</div>


<script>
document.addEventListener('DOMContentLoaded', function() {
  // Variables to store the current target link and password
  let currentTarget = '';
  let currentPassword = '';
  
  // Get DOM elements
  const modal = document.getElementById('passwordModal');
  const passwordInput = document.getElementById('passwordInput');
  const passwordError = document.getElementById('passwordError');
  const submitButton = document.getElementById('submitPassword');
  const closeButton = document.querySelector('.close-modal');
  
  // Ensure modal is hidden initially
  if (modal) {
    modal.style.display = 'none';
  }
  
  // Process all image containers
  document.querySelectorAll('.image-container').forEach(container => {
    const img = container.querySelector('.responsive-image');
    
    // Add click event to the container itself
    container.addEventListener('click', function() {
      if (!img) return;
      
      // Get the target URL
      currentTarget = img.getAttribute('data-target');
      
      // Check if this image has a password set
      if (img.hasAttribute('data-password')) {
        // Password-protected image
        currentPassword = img.getAttribute('data-password');
        
        // Make sure modal exists before trying to show it
        if (modal) {
          // Display the modal
          modal.style.display = 'flex';
          passwordInput.value = '';
          passwordError.style.display = 'none';
          
          // Focus the password input
          setTimeout(() => {
            passwordInput.focus();
          }, 100);
        } else {
          console.error('Password modal not found in the document!');
        }
      } else {
        // Regular image - go directly to the target
        if (currentTarget) {
          console.log('Navigating to:', currentTarget);
          window.location.href = currentTarget;
        }
      }
    });
  });
  
  // The rest of your event handlers for the modal
  if (submitButton && passwordInput && modal) {
    // Submit password
    submitButton.addEventListener('click', function() {
      if (passwordInput.value === currentPassword) {
        // Correct password - navigate to target
        modal.style.display = 'none';
        window.location.href = currentTarget;
      } else {
        // Wrong password - show error
        passwordError.style.display = 'block';
      }
    });
  
    // Close modal when X is clicked
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
      });
    }
    
    // Allow pressing Enter key to submit
    passwordInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        submitButton.click();
      }
    });
    
    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});
</script>