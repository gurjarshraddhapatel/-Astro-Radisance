// Horoscope Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = ['daily-tab', 'weekly-tab', 'monthly-tab'];
    
    tabs.forEach(tabId => {
        const tab = document.getElementById(tabId);
        if (!tab) return;
        
        tab.addEventListener('click', () => {
            // Remove active state from all tabs
            tabs.forEach(id => {
                const t = document.getElementById(id);
                if (!t) return;
                t.classList.remove('border-[#FEA501]', 'text-[#FEA501]');
                t.classList.add('border-transparent');
            });
            
            // Add active state to clicked tab
            tab.classList.remove('border-transparent');
            tab.classList.add('border-[#FEA501]', 'text-[#FEA501]');
        });
    });
});





{/* // Language dropdown behavior */}
(function () {
    const toggle = document.getElementById('langToggle');
    const dropdown = document.getElementById('langDropdown');

    if (!toggle || !dropdown) return;

    function openDropdown() {
        dropdown.classList.remove('hidden');
        toggle.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
        dropdown.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
    }

    function toggleDropdown() {
        if (dropdown.classList.contains('hidden')) openDropdown();
        else closeDropdown();
    }

    // Click on toggle
    toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleDropdown();
    });

    // Keyboard support (Enter / Space)
    toggle.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
        } else if (e.key === 'Escape') {
            closeDropdown();
        }
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
        if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
            closeDropdown();
        }
    });

    // Close on Escape key globally
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDropdown();
    });
})();

// Account dropdown behavior
(function () {
    const toggle = document.getElementById('accountToggle');
    const dropdown = document.getElementById('accountDropdown');

    if (!toggle || !dropdown) return;

    function openDropdown() {
        dropdown.classList.remove('hidden');
        toggle.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
        dropdown.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
    }

    function toggleDropdown() {
        if (dropdown.classList.contains('hidden')) openDropdown();
        else closeDropdown();
    }

    // Click on toggle
    toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleDropdown();
    });

    // Keyboard support (Enter / Space)
    toggle.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
        } else if (e.key === 'Escape') {
            closeDropdown();
        }
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
        if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
            closeDropdown();
        }
    });

    // Close on Escape key globally
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDropdown();
    });
})();

// Sidebar submenu and responsive toggle behavior
(function () {
    // Submenu toggles
    document.querySelectorAll('[data-toggle="submenu"]').forEach(function (btn) {
        const submenu = btn.nextElementSibling;
        const chevron = btn.querySelector('[data-chevron]');
        btn.addEventListener('click', function () {
            const isOpen = submenu && !submenu.classList.contains('hidden');
            if (submenu) submenu.classList.toggle('hidden');
            if (btn && btn.getAttribute('aria-expanded')) btn.setAttribute('aria-expanded', String(!isOpen));
            if (chevron) chevron.classList.toggle('rotate-180', !isOpen);
        });
    });

    // Responsive sidebar toggle
    const sidebar = document.getElementById('sidebar');
    const desktopSidebarBtn = document.getElementById('sidebarToggleBtn');
    const mobileSidebarBtn = document.getElementById('mobileSidebarToggleBtn');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    const overlay = document.getElementById('sidebarOverlay');

    function openSidebar() {
        // visible state is translate-x-0 (no translation)
        sidebar.classList.remove('translate-x-full');
        sidebar.classList.add('translate-x-0');
        
        // Update both buttons
        if (desktopSidebarBtn) desktopSidebarBtn.setAttribute('aria-expanded', 'true');
        if (mobileSidebarBtn) mobileSidebarBtn.setAttribute('aria-expanded', 'true');
        
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        // hidden state is translate-x-full (moved off-screen to right)
        sidebar.classList.add('translate-x-full');
        sidebar.classList.remove('translate-x-0');
        
        // Update both buttons
        if (desktopSidebarBtn) desktopSidebarBtn.setAttribute('aria-expanded', 'false');
        if (mobileSidebarBtn) mobileSidebarBtn.setAttribute('aria-expanded', 'false');
        
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }

    function toggleSidebar() {
        const isOpen = !sidebar.classList.contains('translate-x-full');
        if (isOpen) closeSidebar();
        else openSidebar();
    }

    // Event listeners for desktop and mobile buttons
    if (desktopSidebarBtn && sidebar) {
        desktopSidebarBtn.addEventListener('click', toggleSidebar);
    }

    if (mobileSidebarBtn && sidebar) {
        mobileSidebarBtn.addEventListener('click', toggleSidebar);
    }

    // Close button (mobile only)
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeSidebar);
    }

    // Overlay click to close
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !sidebar.classList.contains('translate-x-full')) {
            closeSidebar();
        }
    });

    // Initialize sidebar state
    function initializeSidebar() {
        // Default: hidden on all screen sizes
        sidebar.classList.add('translate-x-full');
        sidebar.classList.remove('translate-x-0');
        
        if (desktopSidebarBtn) desktopSidebarBtn.setAttribute('aria-expanded', 'false');
        if (mobileSidebarBtn) mobileSidebarBtn.setAttribute('aria-expanded', 'false');
        
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // Handle responsive behavior
    function handleResponsiveSidebar() {
        const isLargeScreen = window.innerWidth >= 1024;
        
        // Show/hide appropriate toggle buttons
        if (desktopSidebarBtn) {
            desktopSidebarBtn.style.display = isLargeScreen ? 'inline-flex' : 'none';
        }
        if (mobileSidebarBtn) {
            mobileSidebarBtn.style.display = isLargeScreen ? 'none' : 'inline-flex';
        }
        
        // Close sidebar when switching between mobile and desktop
        if (!sidebar.classList.contains('translate-x-full')) {
            closeSidebar();
        }
    }

    // Initialize on load
    initializeSidebar();
    handleResponsiveSidebar();

    // Handle resize events
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', function () {
        const currentWidth = window.innerWidth;
        const wasLargeScreen = lastWidth >= 1024;
        const isLargeScreen = currentWidth >= 1024;
        
        // Only react to changes that cross the breakpoint
        if (wasLargeScreen !== isLargeScreen) {
            handleResponsiveSidebar();
        }
        
        lastWidth = currentWidth;
    });
})();

// Carousel behavior
(function () {
    const slidesContainer = document.getElementById('carouselSlides');
    const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    if (!slidesContainer || indicators.length === 0) return;

    const slideCount = indicators.length;
    let current = 0;
    let autoplayInterval = null;
    const AUTOPLAY_MS = 4000;

    function goTo(index) {
        current = (index + slideCount) % slideCount;
        const offset = -current * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
        indicators.forEach((btn, i) => {
            if (i === current) {
                btn.classList.remove('bg-opacity-40');
                btn.classList.add('bg-opacity-60');
                btn.setAttribute('aria-current', 'true');
            } else {
                btn.classList.remove('bg-opacity-60');
                btn.classList.add('bg-opacity-40');
                btn.removeAttribute('aria-current');
            }
        });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    indicators.forEach(btn => {
        btn.addEventListener('click', function () {
            const idx = Number(btn.dataset.index);
            goTo(idx);
            resetAutoplay();
        });
    });

    nextBtn && nextBtn.addEventListener('click', function () { next(); resetAutoplay(); });
    prevBtn && prevBtn.addEventListener('click', function () { prev(); resetAutoplay(); });

    function startAutoplay() {
        if (autoplayInterval) return;
        autoplayInterval = setInterval(next, AUTOPLAY_MS);
    }

    function stopAutoplay() {
        if (!autoplayInterval) return;
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    const carouselEl = document.getElementById('heroCarousel');
    carouselEl && carouselEl.addEventListener('mouseenter', stopAutoplay);
    carouselEl && carouselEl.addEventListener('mouseleave', startAutoplay);

    // startup
    goTo(0);
    startAutoplay();
})();

// FAQ Accordion functionality
(function () {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const faqContent = this.nextElementSibling;
            const faqIcon = this.querySelector('.faq-icon');
            const isOpen = !faqContent.classList.contains('hidden');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-content').forEach(content => {
                content.classList.add('hidden');
            });
            document.querySelectorAll('.faq-icon').forEach(icon => {
                icon.classList.remove('rotate-180');
            });
            
            // Toggle current FAQ
            if (isOpen) {
                faqContent.classList.add('hidden');
                faqIcon.classList.remove('rotate-180');
            } else {
                faqContent.classList.remove('hidden');
                faqIcon.classList.add('rotate-180');
            }
        });
    });
})();

// Mobile Menu functionality
(function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileSearch = document.getElementById('mobileSearch');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        mobileMenuOverlay.classList.remove('hidden');
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.add('translate-x-full');
        mobileMenuOverlay.classList.add('hidden');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
        document.body.style.overflow = '';
    }
    
    // Event listeners
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Show mobile search on smaller screens
    function toggleMobileSearch() {
        if (window.innerWidth < 1024) {
            mobileSearch.classList.remove('hidden');
        } else {
            mobileSearch.classList.add('hidden');
        }
    }
    
    // Initial check and resize listener
    toggleMobileSearch();
    window.addEventListener('resize', toggleMobileSearch);
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
        }
    });
})();




