// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "Empowering Local Communities: My Journey in DevFest Organizing",
        summary: "Reflecting on the challenges and victories of organizing large-scale developer gatherings, fostering inclusivity, and building a thriving local technical community.",
        image: "assets/community_thumbnail.png",
        tag: "Community",
        date: "May 10, 2026",
        readTime: "6 min read",
        likes: 124,
        views: 840,
        content: `
            <p>Community building is more than just organizing meetings; it is about building safe spaces for developers of all skill levels to share knowledge, find support, and push boundaries together. Over the past year, I had the privilege of serving as a core organizer for local developer meetups, culminating in our largest DevFest event yet.</p>
            
            <h3>The Catalyst for My Journey</h3>
            <p>I started as a quiet attendee in local meetups. Seeing how seasoned developers volunteered their time to guide others inspired me. I wanted to pay it forward. Organizing events became the logical step. It allowed me to blend my technical skills with project management and, most importantly, human connection.</p>
            
            <blockquote>
                "A technology community is only as strong as its ability to support its beginners."
            </blockquote>
            
            <h3>Behind the Scenes of a Mega Event</h3>
            <p>Organizing an event for over 300 developers involves coordinating multiple moving parts:</p>
            <ul>
                <li><strong>Speaker Selection:</strong> Finding diverse topics and voices, ranging from web accessibility to cloud computing.</li>
                <li><strong>Sponsor Relations:</strong> Securing resources for food, venue, and stickers/swag.</li>
                <li><strong>Logistics:</strong> Organizing registration desks, tech checks, and visual designs.</li>
            </ul>
            <p>One of the biggest hurdles we faced was when a keynote speaker had a flight delay. We had to pivot, rearrange the schedule, and fill the gap with an impromtu panel discussion on <em>"The Future of Web Development"</em>. It ended up being the most engaged session of the day!</p>
            
            <h3>Key Lessons Learned</h3>
            <p>If you're looking to start or grow a local community, remember these three pillars:</p>
            <ol>
                <li><strong>Inclusivity First:</strong> Always make code of conduct clear. Offer introductory tracks for absolute beginners.</li>
                <li><strong>Feedback Loops:</strong> Gather feedback after every session. It shows you care about the audience's time.</li>
                <li><strong>Delegation & Trust:</strong> You cannot run a community alone. Empower volunteers and let them own sections of the organization.</li>
            </ol>
            
            <h3>What's Next?</h3>
            <p>We are currently planning a series of hands-on workshops on modern JavaScript and open-source contributions. The goal is to get more hands-on coding practice and help students make their first pull requests. Stay tuned!</p>
        `,
        comments: [
            { author: "Aarav Sharma", text: "Amazing writeup, Ishika! DevFest was incredible, thanks to the organizing team's efforts.", time: "1 day ago" },
            { author: "Sneha Patel", text: "That panel discussion was actually my favorite part! Incredible quick thinking.", time: "2 days ago" }
        ]
    },
    {
        id: 2,
        title: "Why Technical Writing is a Core Developer Skill",
        summary: "Writing documentation and articles isn't just for technical writers. Here is how documenting your code and writing articles makes you a far better software engineer.",
        image: "assets/writing_thumbnail.png",
        tag: "Writing",
        date: "April 28, 2026",
        readTime: "4 min read",
        likes: 86,
        views: 520,
        content: `
            <p>Many developers view writing documentation, tutorials, or articles as an afterthought—something to be done only when the code is finished (if at all). However, the process of writing is actually a primary driver of technical clarity. By teaching a concept, you truly understand it.</p>
            
            <h3>Writing as a Debugging Tool</h3>
            <p>Have you ever tried to explain a complex bug to a peer, only to realize the solution midway through the explanation? This is known as "Rubber Duck Debugging." Writing operates under a similar principle, but on a structural scale.</p>
            <p>When you write an article explaining how a React hook works or how to optimize a database query, you are forced to structure your thoughts sequentially. You begin to notice gaps in your understanding that you might have glossed over during rapid prototyping.</p>
            
            <pre><code>// Writing clear code comments is the first step:
/**
 * Debounces a callback to optimize search keystroke event loops.
 * @param {Function} func - The callback function
 * @param {number} wait - Debounce delay in milliseconds
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}</code></pre>
            
            <h3>How Writing Elevates Your Career</h3>
            <p>Technical writing creates a visible portfolio of your knowledge. It provides a way for hiring managers, open-source maintainers, and peers to assess your communication skills. In professional software engineering, communication is just as critical as writing clean code.</p>
            
            <h3>Getting Started with Technical Writing</h3>
            <p>If you're hesitant to start writing, here are some actionable tips:</p>
            <ul>
                <li><strong>Write for your past self:</strong> Think about a problem that took you 3 hours to solve this week. Write the exact guide you wish you had found on Google.</li>
                <li><strong>Keep it simple:</strong> Avoid overly formal academic language. Write the way you speak to a coworker.</li>
                <li><strong>Include code sandboxes:</strong> Make your code examples executable or easy to copy-paste.</li>
            </ul>
        `,
        comments: [
            { author: "Karan Verma", text: "Totally agree! Writing documentation has helped me find bugs in my own designs before shipping them.", time: "4 days ago" }
        ]
    },
    {
        id: 3,
        title: "A Developer's Guide to Mastering Vanilla JavaScript Concepts",
        summary: "Deep dive into JS core concepts: Closures, Event Loop, Scope Chains, and Promises. Master the foundation before jumping into heavy frontend frameworks.",
        image: "assets/javascript_thumbnail.png",
        tag: "Web Dev",
        date: "April 15, 2026",
        readTime: "7 min read",
        likes: 198,
        views: 1205,
        content: `
            <p>In the modern frontend landscape, frameworks like React, Vue, and Svelte dominate. Yet, beneath all these libraries lies Vanilla JavaScript. Understanding the fundamental quirks of the language is what separates junior developers from senior engineers.</p>
            
            <h3>1. The Power of Closures</h3>
            <p>A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In simple terms, a closure gives an inner function access to the outer function's scope even after the outer function has returned.</p>
            
            <pre><code>function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        }
    };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2</code></pre>
            
            <p>Closures are widely used for data encapsulation, creating private variables, and implementing design patterns like currying.</p>
            
            <h3>2. Visualizing the Event Loop</h3>
            <p>JavaScript is a single-threaded language, meaning it can only execute one command at a time. How does it handle asynchronous operations like fetching API data without freezing the browser UI? Through the Event Loop.</p>
            <p>The call stack executes synchronous code. Asynchronous operations are handed off to the browser APIs. Once completed, callbacks are pushed to the Task Queue (macro-tasks) or Microtask Queue (Promises). The event loop continuously checks if the call stack is empty, and pushes the next queued task onto it.</p>
            
            <blockquote>
                <strong>Important:</strong> Microtasks (Promises) always take precedence over Macrotasks (setTimeout, event listeners) when the event loop updates.
            </blockquote>
            
            <h3>3. Mastering Promises and Async/Await</h3>
            <p>Callbacks can lead to "Callback Hell". Promises and the modern <code>async/await</code> syntax provide a cleaner, sequential flow for handling async code.</p>
            
            <pre><code>async function fetchUserProfile(userId) {
    try {
        const response = await fetch(\`https://api.github.com/users/\${userId}\`);
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}</code></pre>
            
            <h3>Conclusion</h3>
            <p>Frameworks change constantly, but JavaScript fundamentals remain. Invest time in learning the core concepts, and you will adapt to any framework with ease.</p>
        `,
        comments: [
            { author: "Divya N.", text: "This is a great refresher. The event loop explanation was extremely clear!", time: "1 week ago" }
        ]
    }
];

// Skills Data
const skillsData = [
    { name: "HTML5 & CSS3", level: 95, icon: "🎨", category: "frontend", tags: ["Semantic HTML", "Flexbox/Grid", "Responsive"] },
    { name: "JavaScript", level: 90, icon: "⚡", category: "frontend", tags: ["ES6+", "DOM API", "Async/Promises"] },
    { name: "React & Next.js", level: 85, icon: "⚛️", category: "frontend", tags: ["Hooks", "Context API", "SSR/SSG"] },
    { name: "Node.js & Express", level: 75, icon: "🟢", category: "backend", tags: ["REST APIs", "Middleware", "MongoDB"] },
    { name: "TypeScript", level: 80, icon: "📘", category: "backend", tags: ["Type Safety", "Interfaces", "Generics"] },
    { name: "Python", level: 70, icon: "🐍", category: "backend", tags: ["Scripting", "Data Analysis", "OOP"] },
    { name: "Git & GitHub", level: 90, icon: "📁", category: "tools", tags: ["Version Control", "PR Workflows", "Actions"] },
    { name: "Figma & UI Design", level: 80, icon: "✒️", category: "tools", tags: ["Prototyping", "Design Systems", "Wireframes"] },
    { name: "Technical Writing", level: 95, icon: "✍️", category: "soft", tags: ["Documentation", "Dev.to Articles", "Tutorials"] },
    { name: "Community Leadership", level: 90, icon: "🤝", category: "soft", tags: ["DevFest Org", "Mentoring", "Public Speaking"] }
];

// DOM Load Event
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initHeroTyping();
    renderSkills(skillsData);
    renderBlogPosts(blogPosts);
    initSkillsAnimation();
    initNavigation();
    initBlogFiltersAndSearch();
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
    
    const words = ["Frontend Developer", "Technical Writer", "Community Organizer", "Tech Enthusiast"];
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
