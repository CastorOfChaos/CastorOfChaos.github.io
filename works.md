---
layout: works
---

<body>
    <div class="bookshelf-container">
        <h1>My Works</h1>
        Universe Key: 
        SP = South Park
        <div class="shelf">
            <div class="book" data-book="book1">
                <div class="book-title">MLM - SP</div>
            </div>
        </div>
        
        <div class="shelf">
            
            </div>
        
    </div>
    
    <div class="modal" id="bookModal">
        <div class="modal-content">
            <h2 id="modalTitle">Book Title</h2>
            <p id="modalDescription">This would link to a specific page on your website.</p>
            <button class="close-btn" onclick="closeModal()">Close</button>
        </div>
    </div>

    <script>
        // Book data - in a real implementation, clicking would redirect to pages
        const bookData = {
            book1: {
                title: "Multi Level of Madness",
                description: "Superheros with an MLM twist",
                link: "/mlm.html"
            },
            book2: {
                title: "JavaScript Guide",
                description: "This would link to your JavaScript resources page.",
                link: "/javascript-guide"
            },
            book3: {
                title: "React Fundamentals",
                description: "This would link to your React tutorials and projects.",
                link: "/react-fundamentals"
            },
            book4: {
                title: "UX Design",
                description: "This would link to your UX Design portfolio or resources.",
                link: "/ux-design"
            },
            book5: {
                title: "Node.js Projects",
                description: "This would showcase your Node.js projects.",
                link: "/nodejs-projects"
            },
            book6: {
                title: "Python Mastery",
                description: "This would link to your Python tutorials or projects.",
                link: "/python-mastery"
            },
            book7: {
                title: "Data Science",
                description: "This would link to your Data Science content.",
                link: "/data-science"
            },
            book8: {
                title: "Portfolio Showcase",
                description: "This would link to your main portfolio page.",
                link: "/portfolio"
            },
            book9: {
                title: "About Me",
                description: "This would link to your biography or personal information.",
                link: "/about"
            },
            book10: {
                title: "Contact",
                description: "This would link to your contact page.",
                link: "/contact"
            },
            book11: {
                title: "Blog",
                description: "This would link to your blog or articles.",
                link: "/blog"
            },
            book12: {
                title: "Services",
                description: "This would link to the services you offer.",
                link: "/services"
            }
        };
        
        const books = document.querySelectorAll('.book');
        const modal = document.getElementById('bookModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        
        books.forEach(book => {
            book.addEventListener('click', () => {
                const bookId = book.getAttribute('data-book');
                const bookInfo = bookData[bookId];
                
                // In a real implementation, you'd redirect instead:
                window.location.href = bookInfo.link;
                
                // For this demo, we'll show a modal instead
                // modalTitle.textContent = bookInfo.title;
                //modalDescription.textContent = bookInfo.description;
                // modal.style.display = 'flex';
            });
        });
        
        function closeModal() {
            modal.style.display = 'none';
        }
        
        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    </script>
</body>