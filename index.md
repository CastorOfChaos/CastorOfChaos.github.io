---
layout: default
---
<html lang="en">

<body>
    <!-- Full Page Landing Content - Assumes header is already in place -->
    <div id="landing-page-content">
        <!-- Main Navigation Section -->
        <div class="container mx-auto px-6 mb-24">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in">Welcome</h2>
            <!-- Navigation Buttons -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <!-- About Me Button -->
                <div class="animate-fade-in delay-200">
                    <a href="./about.html" class="nav-button block bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg">
                        <div class="h-40 bg-blue-50 flex items-center justify-center">
                            <span class="button-icon text-5xl">👥</span>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">About Me</h3>
                            <p class="button-description text-gray-600">
                                More info on me.
                            </p>
                        </div>
                    </a>
                </div>
                <!-- Services Button -->
                <div class="animate-fade-in delay-400"> 
                    <a href="./works.html" class="nav-button block bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg">
                        <div class="h-40 bg-indigo-50 flex items-center justify-center">
                            <span class="button-icon text-5xl">📓</span>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Works</h3>
                            <p class="button-description text-gray-600">
                                Supplementary information on my written works.
                            </p>
                        </div>
                    </a>
                </div>
                <!-- Portfolio Button -->
                <div class="animate-fade-in delay-600">
                    <a href="./faq.html" class="nav-button block bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg">
                        <div class="h-40 bg-purple-50 flex items-center justify-center">
                            <span class="button-icon text-5xl">❔</span>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">FAQ</h3>
                            <p class="button-description text-gray-600">
                                You got questions? I got answers.
                            </p>
                        </div>
                    </a>
                </div>
                <!-- Contact Button -->
                <div class="animate-fade-in delay-800">
                    <a href="/contact" class="nav-button block bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg">
                        <div class="h-40 bg-green-50 flex items-center justify-center">
                            <span class="button-icon text-5xl">📞</span>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Contact</h3>
                            <p class="button-description text-gray-600">
                               Wanna get in touch :D?
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- Call to Action Section -->
        <!-- Footer -->
    </div>
     <script>
    // Simple script to handle animations
    document.addEventListener('DOMContentLoaded', function() {
        const animatedElements = document.querySelectorAll('.animate-fade-in');
        
        // Helper function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }
        
        // Function to handle scroll animations
        function handleScrollAnimations() {
            animatedElements.forEach(element => {
                if (isInViewport(element)) {
                    element.style.animationPlayState = 'running';
                }
            });
        }
        
        // Initial check for elements in viewport
        handleScrollAnimations();
        
        // Add scroll listener
        window.addEventListener('scroll', handleScrollAnimations);
    });
    </script>
</body>
</html>