// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "My First School Art Show: A 5th Grader's Story",
        summary: "A simple story about preparing art for school, feeling proud, and sharing pictures with friends.",
        image: "assets/school_art.svg",
        tag: "Student Life",
        date: "May 10, 2026",
        readTime: "4 min read",
        likes: 124,
        views: 840,
        content: `
            <p>I was very excited when our teacher announced a school art show. I am in 5th standard, and I wanted to share my drawings with everyone in my class.</p>
            
            <h3>Preparing My Art</h3>
            <p>I spent a few afternoons drawing animals, flowers, and happy moments from school. I used crayons and markers, and I smiled when my pictures started to look like what I imagined.</p>
            
            <blockquote>
                "I felt proud when my teacher said my drawing was very colorful."
            </blockquote>
            
            <h3>The Big Day</h3>
            <p>On the day of the show, I hung my pictures on the wall and walked around to see my friends' drawings. It was fun to talk about our art and to hear everyone cheer.</p>
            
            <h3>Why It Was Special</h3>
            <p>My favorite part was sharing my picture with my family later. I learned that even simple drawings can make people smile.</p>
        `,
        comments: [
            { author: "Aarav Sharma", text: "Amazing writeup, Ishika! The campus showcase was incredible, thanks to the organizing team's efforts.", time: "1 day ago" },
            { author: "Sneha Patel", text: "That panel discussion was actually my favorite part! Incredible quick thinking.", time: "2 days ago" }
        ]
    },
    {
        id: 2,
        title: "Why I Love Writing Stories in 5th Standard",
        summary: "Writing little stories helps me remember fun school days and share my thoughts with friends.",
        image: "assets/journal.svg",
        tag: "Writing",
        date: "April 28, 2026",
        readTime: "4 min read",
        likes: 86,
        views: 520,
        content: `
            <p>I like writing short stories about my school day, my friends, and the drawings I make. It helps me remember fun moments and share them like a little adventure.</p>
            
            <h3>Writing as a Fun Habit</h3>
            <p>I keep a small notebook at my desk. After school, I write one sentence about something nice that happened. Sometimes it is about my art, and sometimes it is about a game I played.</p>
            
            <h3>Why Writing Makes Me Happy</h3>
            <p>Writing makes me feel proud because I can say what I think. When I read my own story later, I smile at how much I have grown.</p>
            
            <h3>How to Start</h3>
            <p>If you want to write too, try these ideas:</p>
            <ul>
                <li><strong>Write about your day:</strong> What was the funniest thing that happened?</li>
                <li><strong>Draw and then write:</strong> Make a picture, then tell a little story about it.</li>
                <li><strong>Keep it simple:</strong> Short sentences are perfect for sharing your ideas.</li>
            </ul>
        `,
        comments: [
            { author: "Karan Verma", text: "Totally agree! Writing documentation has helped me find bugs in my own designs before shipping them.", time: "4 days ago" }
        ]
    },
    {
        id: 3,
        title: "How I Practice Art with Simple Daily Sketches",
        summary: "A story about practicing drawings every day and finding fun in small art projects.",
        image: "assets/sketchbook.svg",
        tag: "Creativity",
        date: "April 15, 2026",
        readTime: "5 min read",
        likes: 198,
        views: 1205,
        content: `
            <p>I practice drawing every day after school. Sometimes I draw animals, other times I draw my house or my favorite cartoon characters.</p>
            
            <h3>1. Start with Easy Sketches</h3>
            <p>I find it fun to start with simple shapes like circles and squares. Then I add details like eyes, ears, and patterns.</p>
            
            <h3>2. Use Bright Colors</h3>
            <p>My drawings feel happy when I use bright crayons and markers. I like mixing purple and yellow or blue and pink.</p>
            
            <blockquote>
                <strong>Tip:</strong> If a drawing does not look perfect, that is okay. It can still be special because it is yours.
            </blockquote>
            
            <h3>3. Share with Friends</h3>
            <p>I love showing my pictures to my classmates and hearing what they like. Sometimes they give me new ideas for my next drawing.</p>
            
            <h3>Conclusion</h3>
            <p>Drawing every day makes me feel creative and happy. The more I practice, the more new ideas I discover.</p>
        `,
        comments: [
            { author: "Divya N.", text: "This is a great refresher. The event loop explanation was extremely clear!", time: "1 week ago" }
        ]
    }
];

// Skills Data
const skillsData = [
    { name: "Student Life", level: 100, icon: "🎓", category: "all", tags: ["Coursework", "Campus Projects", "Learning"] },
    { name: "Art & Creativity", level: 95, icon: "🎨", category: "all", tags: ["Sketching", "Digital Art", "Visual Stories"] },
    { name: "Blogging & Writing", level: 90, icon: "✍️", category: "all", tags: ["Personal Essays", "Creative Posts", "Journal Entries"] }
];

const pictureDBName = "ishikaGalleryDB";
const pictureStoreName = "pictures";
let pictureFiles = [];

function openPictureDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(pictureDBName, 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(pictureStoreName)) {
                db.createObjectStore(pictureStoreName, { keyPath: "id" });
            }
        };

        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

function savePicturesToDB(items) {
    return openPictureDB().then((db) => {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(pictureStoreName, "readwrite");
            const store = tx.objectStore(pictureStoreName);

            items.forEach((item) => store.put(item));

            tx.oncomplete = () => {
                db.close();
                resolve();
            };
            tx.onerror = () => {
                db.close();
                reject(tx.error);
            };
        });
    });
}

function deleteAllPicturesFromDB() {
    return openPictureDB().then((db) => {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(pictureStoreName, "readwrite");
            const store = tx.objectStore(pictureStoreName);
            const request = store.clear();

            request.onsuccess = () => {
                db.close();
                resolve();
            };
            request.onerror = () => {
                db.close();
                reject(request.error);
            };
        });
    });
}

function loadPersistedPictures(container) {
    openPictureDB().then((db) => {
        const tx = db.transaction(pictureStoreName, "readonly");
        const store = tx.objectStore(pictureStoreName);
        const request = store.getAll();

        request.onsuccess = () => {
            const saved = request.result;
            if (Array.isArray(saved) && saved.length) {
                pictureFiles = saved.map((item) => ({
                    id: item.id,
                    name: item.name,
                    dataUrl: item.dataUrl
                }));
                renderPictureGrid(pictureFiles, container);
            }
            db.close();
        };

        request.onerror = () => {
            console.warn("Unable to load saved pictures:", request.error);
            db.close();
        };
    }).catch((error) => {
        console.warn("IndexedDB not available:", error);
    });
}

// DOM Load Event
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initHeroTyping();
    renderSkills(skillsData);
    renderBlogPosts(blogPosts);
    initSkillsAnimation();
    initNavigation();
    initBlogFiltersAndSearch();
    initPictureUpload();
    initEngagement();
    initContactForm();
});

/* 1. Theme Switcher System */
function initTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    // Default to dark theme if not set
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
}

/* 2. Hero Section Typing Effect */
function initHeroTyping() {
    const typingElement = document.getElementById("typing-text");
    if (!typingElement) return;
    
    const words = ["Student", "Artist", "Blogger"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 40 : 80;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1800; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 400; // Pause before typing new word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

/* 3. Skills Rendering & Animations */
function renderSkills(skills) {
    const skillsGrid = document.getElementById("skills-grid");
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = "";
    
    skills.forEach(skill => {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.setAttribute("data-category", skill.category);
        
        const tagsHtml = skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join("");
        
        card.innerHTML = `
            <div class="skill-header">
                <div class="skill-info">
                    <span class="skill-icon-wrap">${skill.icon}</span>
                    <h3 class="skill-title">${skill.name}</h3>
                </div>
                <span class="skill-level-num">${skill.level}%</span>
            </div>
            <div class="skill-bar-container">
                <div class="skill-progress" data-level="${skill.level}"></div>
            </div>
            <div class="skill-tags">
                ${tagsHtml}
            </div>
        `;
        
        skillsGrid.appendChild(card);
    });
}

function initSkillsAnimation() {
    const progressBars = document.querySelectorAll(".skill-progress");
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.getAttribute("data-level");
                bar.style.width = `${level}%`;
                observer.unobserve(bar);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => observer.observe(bar));
}

/* 4. Blog Posts Rendering & Search/Filter */
function renderBlogPosts(posts) {
    const blogGrid = document.getElementById("blog-grid");
    if (!blogGrid) return;
    
    if (posts.length === 0) {
        blogGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.2rem; margin-bottom: 1rem;">No matching articles found.</p>
                <button class="btn btn-secondary" onclick="resetBlogSearch()">Reset Filters</button>
            </div>
        `;
        return;
    }
    
    blogGrid.innerHTML = "";
    
    posts.forEach(post => {
        const isLiked = localStorage.getItem(`blog_liked_${post.id}`) === "true";
        const card = document.createElement("div");
        card.className = "blog-card";
        card.setAttribute("data-id", post.id);
        
        card.innerHTML = `
            <div class="blog-img-wrap">
                <img class="blog-img" src="${post.image}" alt="${post.title}" onerror="this.src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600'">
                <span class="blog-card-tag">${post.tag}</span>
            </div>
            <div class="blog-card-body">
                <div class="blog-meta">
                    <div class="blog-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>
                        <span>${post.date}</span>
                    </div>
                    <div class="blog-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                        <span>${post.readTime}</span>
                    </div>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-summary">${post.summary}</p>
                <div class="blog-card-footer">
                    <div class="blog-readmore">
                        <span>Read Full Post</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </div>
                    <div class="blog-engagement">
                        <button class="engage-btn like-btn ${isLiked ? 'active' : ''}" onclick="event.stopPropagation(); handleLike(${post.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            <span class="like-count">${post.likes}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Clicking card opens modal
        card.addEventListener("click", () => openPostModal(post.id));
        blogGrid.appendChild(card);
    });
}

let activeBlogTag = "All";
let blogSearchQuery = "";

function initBlogFiltersAndSearch() {
    const searchInput = document.getElementById("blog-search");
    const tagButtons = document.querySelectorAll(".blog-tag-btn");
    
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            blogSearchQuery = e.target.value.toLowerCase().trim();
            filterAndRenderBlogs();
        });
    }
    
    tagButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tagButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeBlogTag = btn.textContent.trim();
            filterAndRenderBlogs();
        });
    });
    
    // Skills filter
    const skillFilters = document.querySelectorAll(".filter-btn");
    skillFilters.forEach(btn => {
        btn.addEventListener("click", () => {
            skillFilters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const cat = btn.getAttribute("data-filter");
            
            const skillCards = document.querySelectorAll(".skill-card");
            skillCards.forEach(card => {
                const cardCat = card.getAttribute("data-category");
                if (cat === "all" || cardCat === cat) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

function initPictureUpload() {
    const uploadButton = document.getElementById("picture-upload-button");
    const fileInput = document.getElementById("picture-upload");
    const pictureGrid = document.getElementById("picture-grid");

    if (!uploadButton || !fileInput || !pictureGrid) return;

    const clearButton = document.getElementById("clear-gallery-button");
    loadPersistedPictures(pictureGrid);

    uploadButton.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", async () => {
        const files = Array.from(fileInput.files || []);
        const newItems = await Promise.all(files.map(fileToPictureItem));
        pictureFiles = pictureFiles.concat(newItems);
        await savePicturesToDB(newItems);
        renderPictureGrid(pictureFiles, pictureGrid);
        fileInput.value = "";
    });

    if (clearButton) {
        clearButton.addEventListener("click", async () => {
            await deleteAllPicturesFromDB();
            pictureFiles = [];
            renderPictureGrid(pictureFiles, pictureGrid);
            showToast("Gallery cleared successfully.");
        });
    }
}

function fileToPictureItem(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve({ id: `${Date.now()}-${Math.random()}`, name: file.name, dataUrl: reader.result });
        };
        reader.readAsDataURL(file);
    });
}

function renderPictureGrid(files, container) {
    container.innerHTML = "";

    if (!files.length) {
        container.innerHTML = '<div class="picture-empty">No pictures added yet. Use the button above to add images.</div>';
        return;
    }

    files.forEach((item) => {
        const card = document.createElement("div");
        card.className = "picture-card";

        const img = document.createElement("img");
        img.alt = item.name;
        img.loading = "lazy";

        const caption = document.createElement("div");
        caption.className = "picture-caption";
        caption.textContent = item.name;

        card.appendChild(img);
        card.appendChild(caption);
        container.appendChild(card);

        if (item.dataUrl) {
            img.src = item.dataUrl;
        } else {
            const reader = new FileReader();
            reader.onload = () => {
                img.src = reader.result;
            };
            reader.readAsDataURL(item);
        }
    });
}

function filterAndRenderBlogs() {
    const filtered = blogPosts.filter(post => {
        const matchesTag = activeBlogTag === "All" || post.tag.toLowerCase() === activeBlogTag.toLowerCase();
        const matchesSearch = post.title.toLowerCase().includes(blogSearchQuery) || 
                              post.summary.toLowerCase().includes(blogSearchQuery) || 
                              post.content.toLowerCase().includes(blogSearchQuery);
        return matchesTag && matchesSearch;
    });
    renderBlogPosts(filtered);
}

window.resetBlogSearch = function() {
    const searchInput = document.getElementById("blog-search");
    if (searchInput) searchInput.value = "";
    blogSearchQuery = "";
    
    const tagButtons = document.querySelectorAll(".blog-tag-btn");
    tagButtons.forEach(b => b.classList.remove("active"));
    const allBtn = Array.from(tagButtons).find(b => b.textContent.trim() === "All");
    if (allBtn) allBtn.classList.add("active");
    activeBlogTag = "All";
    
    filterAndRenderBlogs();
};

/* 5. Engagement (Likes Logic) */
window.handleLike = function(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    const likeKey = `blog_liked_${postId}`;
    const hasLiked = localStorage.getItem(likeKey) === "true";
    
    if (hasLiked) {
        post.likes--;
        localStorage.setItem(likeKey, "false");
    } else {
        post.likes++;
        localStorage.setItem(likeKey, "true");
        showToast("Thanks for liking the article! ❤️");
    }
    
    // Update local card numbers
    const cardEl = document.querySelector(`.blog-card[data-id="${postId}"]`);
    if (cardEl) {
        const countEl = cardEl.querySelector(".like-count");
        const btnEl = cardEl.querySelector(".like-btn");
        if (countEl) countEl.textContent = post.likes;
        if (btnEl) {
            if (hasLiked) btnEl.classList.remove("active");
            else btnEl.classList.add("active");
        }
    }
    
    // Update Modal if open and displaying this post
    const modal = document.getElementById("blog-modal");
    if (modal && modal.classList.contains("active") && modal.getAttribute("data-active-id") == postId) {
        const mCountEl = modal.querySelector(".modal-like-count");
        const mBtnEl = modal.querySelector(".modal-like-btn");
        if (mCountEl) mCountEl.textContent = post.likes;
        if (mBtnEl) {
            if (hasLiked) mBtnEl.classList.remove("active");
            else mBtnEl.classList.add("active");
        }
    }
};

/* 6. Reading Modal System */
function openPostModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    const modal = document.getElementById("blog-modal");
    if (!modal) return;
    
    modal.setAttribute("data-active-id", postId);
    
    // Set Details
    modal.querySelector(".modal-img").src = post.image;
    modal.querySelector(".modal-img").onerror = function() {
        this.src = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800';
    };
    modal.querySelector(".modal-title").textContent = post.title;
    modal.querySelector(".modal-date").textContent = post.date;
    modal.querySelector(".modal-readtime").textContent = post.readTime;
    modal.querySelector(".modal-body").innerHTML = post.content;
    
    // Update Likes Button inside Modal
    const isLiked = localStorage.getItem(`blog_liked_${post.id}`) === "true";
    const likeBtn = modal.querySelector(".modal-like-btn");
    const likeCount = modal.querySelector(".modal-like-count");
    
    likeCount.textContent = post.likes;
    likeBtn.onclick = () => handleLike(post.id);
    if (isLiked) {
        likeBtn.classList.add("active");
    } else {
        likeBtn.classList.remove("active");
    }
    
    // Render comments list
    renderComments(post.comments);
    
    // Comments Submission Hook
    const commentForm = document.getElementById("modal-comment-form");
    commentForm.onsubmit = (e) => {
        e.preventDefault();
        const authorInput = document.getElementById("comment-author-input");
        const textInput = document.getElementById("comment-text-input");
        
        const author = authorInput.value.trim();
        const text = textInput.value.trim();
        
        if (!author || !text) return;
        
        const newComment = {
            author: author,
            text: text,
            time: "Just now"
        };
        
        post.comments.unshift(newComment);
        renderComments(post.comments);
        
        // Reset
        authorInput.value = "";
        textInput.value = "";
        
        showToast("Comment posted successfully!");
    };
    
    // Open Overlay
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent body scrolling
}

function renderComments(comments) {
    const list = document.getElementById("comments-list");
    if (!list) return;
    
    list.innerHTML = "";
    
    if (comments.length === 0) {
        list.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size: 0.9rem;">No comments yet. Be the first to share your thoughts!</p>`;
        return;
    }
    
    comments.forEach(c => {
        const item = document.createElement("div");
        item.className = "comment-item";
        
        // Get initials
        const initials = c.author ? c.author.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase() : "U";
        
        item.innerHTML = `
            <div class="comment-avatar">${initials}</div>
            <div class="comment-details">
                <div class="comment-author">${c.author} <span class="comment-time">${c.time}</span></div>
                <div class="comment-text">${c.text}</div>
            </div>
        `;
        list.appendChild(item);
    });
}

// Close Modal hook
window.closeModal = function() {
    const modal = document.getElementById("blog-modal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
};

// Close modal when clicking outside of modal card
document.getElementById("blog-modal").addEventListener("click", (e) => {
    if (e.target.id === "blog-modal") {
        closeModal();
    }
});

/* 7. Floating Navigation and Mobile Hamburger */
function initNavigation() {
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const navLinksList = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    
    if (mobileBtn && navLinksList) {
        mobileBtn.addEventListener("click", () => {
            navLinksList.classList.toggle("active");
            
            // Toggle hamburger icon between open/close
            if (navLinksList.classList.contains("active")) {
                mobileBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 28px; height: 28px;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`;
            } else {
                mobileBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 28px; height: 28px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
            }
        });
    }
    
    // Close mobile menu on nav link click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinksList.classList.remove("active");
            if (mobileBtn) {
                mobileBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 28px; height: 28px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
            }
        });
    });
    
    // Highlight Active Link on Scroll
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 200; // Offset for navbar height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
}

/* 8. Simulated Contact Form & Toast System */
function initContactForm() {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;
    
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById("contact-name");
        const emailInput = document.getElementById("contact-email");
        const messageInput = document.getElementById("contact-message");
        
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            showToast("Please fill in all details! ⚠️");
            return;
        }
        
        // Simulating loading
        const btn = contactForm.querySelector("button[type='submit']");
        const originalText = btn.innerHTML;
        btn.innerHTML = "Sending Message...";
        btn.disabled = true;
        
        setTimeout(() => {
            showToast(`Thank you, ${nameInput.value.trim()}! Your message has been sent. 🚀`);
            
            // Clear inputs
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
            
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1200);
    });
}

/* Toast Message System */
function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <span class="toast-success-icon">✓</span>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Auto-remove toast after 4s
    setTimeout(() => {
        toast.style.animation = "slideInToast 0.3s reverse forwards";
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3500);
}
