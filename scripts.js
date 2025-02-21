
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const articles = document.querySelectorAll('.box');

        const performSearch = () => {
            const query = searchInput.value.toLowerCase();
            articles.forEach(article => {
                const text = article.textContent.toLowerCase();
                if (text.includes(query)) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        };

        searchInput.addEventListener('input', performSearch);
        searchButton.addEventListener('click', performSearch);

        // Theme toggle functionality

        const themeToggle = document.querySelector('.theme-switch input');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                themeToggle.checked = true;
            }
        }

        themeToggle.addEventListener('change', function (e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
            const fadeElements = document.querySelectorAll('.fade-in');
            const checkVisibility = () => {
                const triggerBottom = window.innerHeight / 5 * 4;
                fadeElements.forEach(element => {
                    const box = element.getBoundingClientRect();
                    if (box.top < triggerBottom) {
                        element.classList.add('visible');
                    } else {
                        element.classList.remove('visible');
                    }
                });
            };
            checkVisibility();
            window.addEventListener('scroll', checkVisibility);
        });