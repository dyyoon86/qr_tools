// ionflow.xyz - Shared Layout
// Header and Footer injection for all pages

(function() {
    'use strict';

    // Navigation items
    const navItems = [
        { href: '/tools/qr.html', label: 'QR 생성기' },
        { href: '/tools/json.html', label: 'JSON' },
        { href: '/tools/base64.html', label: 'Base64' },
        { href: '/tools/hash.html', label: 'Hash' }
    ];

    // Footer links
    const footerLinks = [
        { href: '/pages/about.html', label: '소개' },
        { href: '/pages/contact.html', label: '문의' },
        { href: '/pages/privacy.html', label: '개인정보처리방침' },
        { href: '/pages/terms.html', label: '이용약관' }
    ];

    // Create header HTML with inline styles to ensure consistency
    function createHeader() {
        const navLinksHtml = navItems.map(item =>
            `<a href="${item.href}" style="font-size:12px;opacity:0.8;">${item.label}</a>`
        ).join('');

        return `
        <header style="background:rgba(255,255,255,0.8);backdrop-filter:saturate(180%) blur(20px);position:sticky;top:0;z-index:100;border-bottom:1px solid #d2d2d7;">
            <div style="max-width:1200px;margin:0 auto;padding:0 22px;height:48px;display:flex;align-items:center;justify-content:space-between;">
                <a href="/" style="font-size:21px;font-weight:600;text-decoration:none;color:inherit;">ionflow</a>
                <nav style="display:flex;gap:28px;">${navLinksHtml}</nav>
            </div>
        </header>`;
    }

    // Create footer HTML with inline styles to ensure consistency
    function createFooter() {
        const footerLinksHtml = footerLinks.map(item =>
            `<a href="${item.href}" style="margin:0 8px;">${item.label}</a>`
        ).join('');

        return `
        <footer style="background:#f5f5f7;padding:20px 22px;text-align:center;font-size:12px;color:#86868b;">
            <p style="margin-bottom:12px;">Copyright © 2026 ionflow.xyz</p>
            <div>${footerLinksHtml}</div>
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
