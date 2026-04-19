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
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop() || (currentPath.endsWith('/') && link.getAttribute('href') === 'index.html')) {
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
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

        const postsHtml = posts.map(post => `
            <article class="post-preview">
                <div class="post-date">${post.date}</div>
                <h3 class="post-title" style="font-size: 1.3rem; margin: 0.5rem 0;">
                    <a href="${post.link}">${post.title}</a>
                </h3>
                <p>${post.summary}</p>
                <a href="${post.link}">Read more &rarr;</a>
            </article>
        `).join('');

        container.innerHTML = postsHtml;

    } catch (error) {
        console.error('Error loading blog posts:', error);
        container.innerHTML = '<p>Failed to load blog posts.</p>';
    }
}
