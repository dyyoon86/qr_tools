// ionflow.xyz - Shared Layout
// Header and Footer injection for all pages

(function() {
    'use strict';

    // Navigation items
    const navItems = [
        { href: '/qr.html', label: 'QR 생성기' },
        { href: '/json.html', label: 'JSON' },
        { href: '/base64.html', label: 'Base64' },
        { href: '/hash.html', label: 'Hash' }
    ];

    // Footer links
    const footerLinks = [
        { href: '/about.html', label: '소개' },
        { href: '/contact.html', label: '문의' },
        { href: '/privacy.html', label: '개인정보처리방침' },
        { href: '/terms.html', label: '이용약관' }
    ];

    // Create header HTML
    function createHeader() {
        const navLinksHtml = navItems.map(item =>
            `<a href="${item.href}">${item.label}</a>`
        ).join('');

        return `
        <header>
            <div class="nav-container">
                <a href="/" class="logo">ionflow</a>
                <nav>${navLinksHtml}</nav>
            </div>
        </header>`;
    }

    // Create footer HTML
    function createFooter() {
        const footerLinksHtml = footerLinks.map(item =>
            `<a href="${item.href}">${item.label}</a>`
        ).join('');

        return `
        <footer>
            <p>Copyright © 2026 ionflow.xyz</p>
            <div class="footer-links">${footerLinksHtml}</div>
        </footer>`;
    }

    // Inject header and footer
    function injectLayout() {
        // Replace existing header or insert new one
        const existingHeader = document.querySelector('header');
        if (existingHeader) {
            existingHeader.outerHTML = createHeader();
        } else {
            document.body.insertAdjacentHTML('afterbegin', createHeader());
        }

        // Replace existing footer or insert new one
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.outerHTML = createFooter();
        } else {
            document.body.insertAdjacentHTML('beforeend', createFooter());
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectLayout);
    } else {
        injectLayout();
    }
})();
