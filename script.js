
        // let currentSlide = 0;
        // const totalSlides = 2;
        // const slides = document.getElementById('carousel-slides');
        // const dots = document.querySelectorAll('.carousel-dot');
        // const container = document.getElementById('carousel-container');
        // const wrapper = document.getElementById('carousel-wrapper');
        // const video = document.getElementById('carousel-video');
        // const firstImage = document.getElementById('carousel-image');

        // Function to update carousel height based on current slide
        // function updateCarouselHeight() {
        //     if (container && wrapper && slides) {
        //         const currentSlideEl = slides.children[currentSlide];
        //         if (currentSlideEl) {
        //             if (currentSlide === 0 && firstImage) {
                        
        //                 const height = firstImage.offsetHeight || firstImage.clientHeight || firstImage.naturalHeight;
        //                 if (height > 0) {
        //                     container.style.height = height + 'px';
        //                     wrapper.style.height = height + 'px';
        //                 }
        //             } else if (currentSlide === 1 && video) {
                       
        //                 setTimeout(() => {
        //                     const videoHeight = video.offsetHeight || video.clientHeight || video.videoHeight;
        //                     const slide2El = slides.children[1];
        //                     const slide2Height = slide2El ? (slide2El.offsetHeight || slide2El.clientHeight) : 0;
        //                     const totalHeight = Math.max(videoHeight, slide2Height);
        //                     if (totalHeight > 0) {
        //                         container.style.height = totalHeight + 'px';
        //                         wrapper.style.height = totalHeight + 'px';
        //                     }
        //                 }, 100);
        //             }
        //         }
        //     }
        // }

        // Update carousel position
        // function updateCarousel() {
        //     slides.style.transform = `translateX(-${currentSlide * 50}%)`;

        //     dots.forEach((dot, index) => {
        //         if (index === currentSlide) {
        //             dot.classList.remove('bg-white/50', 'w-3', 'h-3', 'md:w-4', 'md:h-4');
        //             dot.classList.add('bg-white', 'w-8', 'h-3', 'md:w-10', 'md:h-4', 'rounded-full');
        //         } else {
        //             dot.classList.remove('bg-white', 'w-8', 'h-3', 'md:w-10', 'md:h-4');
        //             dot.classList.add('bg-white/50', 'w-3', 'h-3', 'md:w-4', 'md:h-4');
        //         }
        //     });

        //     setTimeout(updateCarouselHeight, 700);
        // }

        // Next slide
        // function nextSlide() {
        //     currentSlide = (currentSlide + 1) % totalSlides;
        //     updateCarousel();
        // }

        // Previous slide
        // function prevSlide() {
        //     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        //     updateCarousel();
        // }

        // Go to specific slide
        // function goToSlide(slideIndex) {
        //     currentSlide = slideIndex;
        //     updateCarousel();
        // }

        // document.getElementById('next-btn').addEventListener('click', nextSlide);
        // document.getElementById('prev-btn').addEventListener('click', prevSlide);

        // // Indicator dots
        // dots.forEach((dot, index) => {
        //     dot.addEventListener('click', () => goToSlide(index));
        // });

        // // Update height when video loads
        // if (video) {
        //     video.addEventListener('loadedmetadata', function () {
        //         updateCarouselHeight();
        //     });
        //     video.addEventListener('loadeddata', function () {
        //         updateCarouselHeight();
        //     });
        // }

        // // Update height when image loads
        // if (firstImage) {
        //     if (firstImage.complete) {
        //         updateCarouselHeight();
        //     } else {
        //         firstImage.addEventListener('load', function () {
        //             updateCarouselHeight();
        //         });
        //     }
        // }

        // // Update height on window resize
        // window.addEventListener('resize', function () {
        //     updateCarouselHeight();
        // });

        // // Initialize
        // updateCarousel();

        // // Initial height update after a small delay to ensure elements are rendered
        // setTimeout(updateCarouselHeight, 100);


        // Horoscope Tab functionality
        document.addEventListener('DOMContentLoaded', function () {
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





        {/* // Language dropdown behavior */ }
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

        // Mobile Account dropdown behavior
        (function () {
            const mobileToggle = document.getElementById('mobileAccountToggle');
            const mobileDropdown = document.getElementById('mobileAccountDropdown');

            if (!mobileToggle || !mobileDropdown) return;

            function openDropdown() {
                mobileDropdown.classList.remove('hidden');
                mobileToggle.setAttribute('aria-expanded', 'true');
            }

            function closeDropdown() {
                mobileDropdown.classList.add('hidden');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }

            function toggleDropdown() {
                if (mobileDropdown.classList.contains('hidden')) openDropdown();
                else closeDropdown();
            }

            // Click on toggle
            mobileToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                toggleDropdown();
            });

            // Keyboard support (Enter / Space)
            mobileToggle.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDropdown();
                } else if (e.key === 'Escape') {
                    closeDropdown();
                }
            });

            // Close when clicking outside
            document.addEventListener('click', function (e) {
                if (!mobileToggle.contains(e.target) && !mobileDropdown.contains(e.target)) {
                    closeDropdown();
                }
            });

            // Close on Escape key globally
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && !mobileDropdown.classList.contains('hidden')) {
                    closeDropdown();
                }
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
                // Check if sidebar and overlay exist
                if (!sidebar || !overlay) return;

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
                // Check if sidebar and overlay exist
                if (!sidebar || !overlay) return;

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
                if (!sidebar) return;

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
                if (e.key === 'Escape' && sidebar && !sidebar.classList.contains('translate-x-full')) {
                    closeSidebar();
                }
            });

            // Initialize sidebar state
            function initializeSidebar() {
                // Check if sidebar and overlay exist before accessing them
                if (!sidebar || !overlay) return;

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
                if (!sidebar) return;

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
        // (function () {
        //     function initCarousel() {
        //         const slidesContainer = document.getElementById('carouselSlides');
        //         const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));
        //         const prevBtn = document.getElementById('carouselPrev');
        //         const nextBtn = document.getElementById('carouselNext');

        //         if (!slidesContainer) {
        //             console.warn('Carousel: slidesContainer not found');
        //             return;
        //         }

        //         // Count actual slides instead of relying on indicators
        //         const slides = slidesContainer.querySelectorAll('> div');
        //         const slideCount = slides.length || (indicators.length > 0 ? indicators.length : 2);
        //         let current = 0;
        //         let autoplayInterval = null;
        //         const AUTOPLAY_MS = 4000;

        //         function goTo(index) {
        //             current = (index + slideCount) % slideCount;
        //             const offset = -current * 100;
        //             slidesContainer.style.transform = `translateX(${offset}%)`;
        //             slidesContainer.style.transition = 'transform 0.7s ease';
        //             indicators.forEach((btn, i) => {
        //                 if (i === current) {
        //                     btn.classList.remove('bg-opacity-40');
        //                     btn.classList.add('bg-opacity-60');
        //                     btn.setAttribute('aria-current', 'true');
        //                 } else {
        //                     btn.classList.remove('bg-opacity-60');
        //                     btn.classList.add('bg-opacity-40');
        //                     btn.removeAttribute('aria-current');
        //                 }
        //             });
        //         }

        //         function next() {
        //             goTo(current + 1);
        //         }

        //         function prev() {
        //             goTo(current - 1);
        //         }

        //         // Add event listeners to indicators if they exist
        //         if (indicators.length > 0) {
        //             indicators.forEach(btn => {
        //                 btn.addEventListener('click', function (e) {
        //                     e.preventDefault();
        //                     e.stopPropagation();
        //                     const idx = Number(btn.dataset.index);
        //                     goTo(idx);
        //                     resetAutoplay();
        //                 });
        //             });
        //         }

        //         // Add event listeners to navigation buttons
        //         if (nextBtn) {
        //             nextBtn.addEventListener('click', function (e) {
        //                 e.preventDefault();
        //                 e.stopPropagation();
        //                 next();
        //                 resetAutoplay();
        //             });
        //             console.log('Carousel: Next button event listener attached');
        //         } else {
        //             console.warn('Carousel: Next button not found');
        //         }

        //         if (prevBtn) {
        //             prevBtn.addEventListener('click', function (e) {
        //                 e.preventDefault();
        //                 e.stopPropagation();
        //                 prev();
        //                 resetAutoplay();
        //             });
        //             console.log('Carousel: Prev button event listener attached');
        //         } else {
        //             console.warn('Carousel: Prev button not found');
        //         }

        //         function startAutoplay() {
        //             if (autoplayInterval) return;
        //             autoplayInterval = setInterval(next, AUTOPLAY_MS);
        //         }

        //         function stopAutoplay() {
        //             if (!autoplayInterval) return;
        //             clearInterval(autoplayInterval);
        //             autoplayInterval = null;
        //         }

        //         function resetAutoplay() {
        //             stopAutoplay();
        //             startAutoplay();
        //         }

        //         const carouselEl = document.getElementById('heroCarousel');
        //         if (carouselEl) {
        //             carouselEl.addEventListener('mouseenter', stopAutoplay);
        //             carouselEl.addEventListener('mouseleave', startAutoplay);
        //         }

        //         // startup
        //         goTo(0);
        //         startAutoplay();
        //     }

        //     // Wait for DOM to be ready
        //     if (document.readyState === 'loading') {
        //         document.addEventListener('DOMContentLoaded', initCarousel);
        //     } else {
        //         // DOM already loaded, run immediately
        //         setTimeout(initCarousel, 100);
        //     }
        // })();

        // FAQ Accordion functionality
        (function () {
            const faqToggles = document.querySelectorAll('.faq-toggle');

            faqToggles.forEach(toggle => {
                toggle.addEventListener('click', function () {
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
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                    closeMobileMenu();
                }
            });
        })();





    