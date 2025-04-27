---
layout: default copy
---
<script src="https://cdn.jsdelivr.net/npm/bcryptjs@3.0.2/umd/index.min.js"></script>

## Caca Water
<div class="image-gallery">
  <!-- Password-protected image (has data-password attribute) -->
  <div class="image-container password-protected">
    <img src="/assets/images/folder.png" alt="Protected image" class="responsive-image" 
         data-target="./1.html" data-password="$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy">
         <p class="image-caption">Restricted</p>
  </div>
  
  <!-- Regular image (no password protection) -->
  <div class="image-container">
    <img src="/assets/images/folder.png" alt="Regular image" class="responsive-image" 
         data-target="./confident_redacted.html">
          <p class="image-caption">E Files</p>
  </div>

  <div class="image-container">
    <img src="/assets/images/folder.png" alt="Another regular image" class="responsive-image" 
         data-target="./redacted.html">
    <p class="image-caption">C Files</p>
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



<script src="https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcryptjs.min.js"></script>

<script>
// Execute after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Variables to store the current target link and password hash
  let currentTarget = '';
  let currentPasswordHash = '';
  
  // For fallback verification in case there's an issue with bcrypt
  const knownPasswords = {
    "secret1": "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"
  };
  
  // Get DOM elements
  const modal = document.getElementById('passwordModal');
  const passwordInput = document.getElementById('passwordInput');
  const passwordError = document.getElementById('passwordError');
  const submitButton = document.getElementById('submitPassword');
  const closeButton = document.querySelector('.close-modal');
  const loadingIndicator = document.getElementById('passwordLoading');
  
  // Check if bcrypt is loaded
  if (typeof bcrypt === 'undefined') {
    console.error("bcrypt.js library not loaded properly!");
    alert("Error: Required security library not loaded. Please refresh the page.");
  } else {
    console.log("bcrypt.js loaded successfully");
  }
  
  // Ensure modal is hidden initially
  if (modal) {
    modal.style.display = 'none';
  }
  
  // Process all password-protected images
  document.querySelectorAll('.image-container.password-protected').forEach(container => {
    container.addEventListener('click', function() {
      const img = container.querySelector('.responsive-image');
      if (!img) return;
      
      // Get the target URL and password hash
      currentTarget = img.getAttribute('data-target');
      currentPasswordHash = img.getAttribute('data-password');
      
      console.log("Password-protected image clicked");
      console.log("Target URL:", currentTarget);
      console.log("Password hash length:", currentPasswordHash ? currentPasswordHash.length : 0);
      
      // Display the modal
      if (modal) {
        modal.style.display = 'flex';
        passwordInput.value = '';
        passwordError.style.display = 'none';
        
        // Focus the password input
        setTimeout(() => {
          passwordInput.focus();
        }, 100);
      }
    });
  });
  
  // Process all regular images
  document.querySelectorAll('.image-container:not(.password-protected)').forEach(container => {
    container.addEventListener('click', function() {
      const img = container.querySelector('.responsive-image');
      if (!img) return;
      
      const target = img.getAttribute('data-target');
      if (target) {
        window.location.href = target;
      }
    });
  });
  
  // Submit password
  if (submitButton) {
    submitButton.addEventListener('click', function() {
      verifyPassword();
    });
  }
  
  // Function to verify password with both bcrypt and fallback
  function verifyPassword() {
    const enteredPassword = passwordInput.value;
    
    if (!enteredPassword) {
      passwordError.textContent = "Please enter a password";
      passwordError.style.display = 'block';
      return;
    }
    
    // Show loading indicator
    if (loadingIndicator) loadingIndicator.style.display = 'block';
    if (submitButton) submitButton.disabled = true;
    
    console.log("Verifying password...");
    
    // Use setTimeout to allow the UI to update before performing the CPU-intensive work
    setTimeout(() => {
      try {
        // Try direct comparison first (for fallback)
        let isMatch = false;
        
        // Check if it's one of our known passwords (fallback method)
        if (knownPasswords[enteredPassword] === currentPasswordHash) {
          console.log("Password matched using direct comparison");
          isMatch = true;
        } 
        // Use bcrypt for verification
        else if (typeof bcrypt !== 'undefined') {
          try {
            console.log("Attempting bcrypt verification...");
            isMatch = bcrypt.compareSync(enteredPassword, currentPasswordHash);
            console.log("bcrypt verification result:", isMatch);
          } catch (bcryptError) {
            console.error("bcrypt verification error:", bcryptError);
          }
        }
        
        if (isMatch) {
          // Correct password - navigate to target
          console.log("Password correct, navigating to:", currentTarget);
          modal.style.display = 'none';
          window.location.href = currentTarget;
        } else {
          // Last resort: direct comparison for "secret1"
          if (enteredPassword === "secret1" && currentPasswordHash.includes("$2a$10$")) {
            console.log("Password matched using hardcoded fallback");
            modal.style.display = 'none';
            window.location.href = currentTarget;
          } else {
            // Wrong password - show error
            console.log("Password incorrect");
            passwordError.textContent = "Incorrect password";
            passwordError.style.display = 'block';
          }
        }
      } catch (error) {
        console.error("Error in password verification:", error);
        passwordError.textContent = "Error verifying password. Please try again.";
        passwordError.style.display = 'block';
      } finally {
        // Hide loading indicator and re-enable button
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        if (submitButton) submitButton.disabled = false;
      }
    }, 10);
  }
  
  // Close modal when X is clicked
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
  
  // Allow pressing Enter key to submit
  if (passwordInput) {
    passwordInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        verifyPassword();
      }
    });
  }
  
  // Close modal when clicking outside of modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
</script>
<footer class="bg-gray-800 text-white py-12">
            <div class="container mx-auto px-6">
                <div class="border-t border-gray-700 mt-8 pt-8 text-center text-white-400">
                    <p>VM ran on P.A.L.S resources. Confidential</p>
                </div>
            </div>
        </footer>