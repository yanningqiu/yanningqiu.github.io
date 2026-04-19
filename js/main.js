document.addEventListener('DOMContentLoaded', () => {
    loadComponent('components/navbar.html', 'header-placeholder');
    loadComponent('components/footer.html', 'footer-placeholder');

    // Load blog posts if containers exist
    loadBlogPosts('blog-preview', 3); // For home page
    loadBlogPosts('blog-posts');      // For blog page
});

async function loadComponent(path, elementId) {
    try {
        const response = await fetch(path);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;

            // Highlight active link
            if (path.includes('navbar')) {
                highlightActiveLink();
            }
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === currentPage;
        link.classList.toggle('is-active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

async function loadBlogPosts(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch('posts.json');
        if (!response.ok) throw new Error('Failed to load posts');

        let posts = await response.json();

        // Sort posts by date (newest first) - assuming date string is parseable or consistent
        // For now, we'll trust the JSON order or add sorting later if needed.

        if (limit) {
            posts = posts.slice(0, limit);
        }

        container.classList.add('post-grid');

        const postsHtml = posts.map(post => `
            <article class="post-preview">
                <div class="post-preview-top">
                    <div class="post-date">${post.date}</div>
                    <div class="post-tag">Post</div>
                </div>
                <h3 class="post-title">
                    <a href="${post.link}">${post.title}</a>
                </h3>
                <p class="post-summary">${post.summary}</p>
                <a class="text-link" href="${post.link}">Read article</a>
            </article>
        `).join('');

        container.innerHTML = postsHtml;

    } catch (error) {
        console.error('Error loading blog posts:', error);
        container.innerHTML = '<p>Failed to load blog posts.</p>';
    }
}
