// Christmas Theme JavaScript - Temporary Holiday Decoration
// Automatically disables on January 1st, 2026

(function() {
    'use strict';

    // Check if Christmas theme should be active
    const END_DATE = new Date('2026-01-01T00:00:00');
    const today = new Date();

    // If past end date, don't initialize Christmas theme
    if (today >= END_DATE) {
        document.body.classList.add('no-christmas');
        return;
    }

    // Initialize Christmas theme
    initChristmasTheme();

    function initChristmasTheme() {
        createSantaAnimation();
        createSnowfall();
        createRibbons();
    }

    // Santa Animation
    function createSantaAnimation() {
        const santaContainer = document.createElement('div');
        santaContainer.className = 'christmas-santa-container active';
        
        const santa = document.createElement('div');
        santa.className = 'christmas-santa';
        
        // Reindeer
        const reindeer = document.createElement('span');
        reindeer.className = 'christmas-reindeer';
        reindeer.innerHTML = '🦌';
        reindeer.style.marginRight = '5px';
        
        // Santa Icon
        const santaIcon = document.createElement('span');
        santaIcon.className = 'christmas-santa-icon';
        santaIcon.innerHTML = '🎅';
        
        // Banner
        const banner = document.createElement('div');
        banner.className = 'christmas-banner';
        banner.textContent = 'Merry Christmas';
        
        santa.appendChild(reindeer);
        santa.appendChild(santaIcon);
        santa.appendChild(banner);
        santaContainer.appendChild(santa);
        document.body.appendChild(santaContainer);
    }

    // Snowfall Effect
    function createSnowfall() {
        const snowContainer = document.createElement('div');
        snowContainer.className = 'christmas-snow-container';
        document.body.appendChild(snowContainer);

        const snowflakes = ['❄', '❅', '❆'];
        const numSnowflakes = 50; // Adjust for performance

        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.className = 'christmas-snowflake';
            snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
            
            // Random starting position
            snowflake.style.left = Math.random() * 100 + '%';
            
            // Random size
            const size = Math.random() * 0.8 + 0.4; // 0.4em to 1.2em
            snowflake.style.fontSize = size + 'em';
            
            // Random animation duration (slower = bigger flakes)
            const duration = Math.random() * 10 + 10; // 10-20 seconds
            snowflake.style.animationDuration = duration + 's';
            
            // Random delay
            snowflake.style.animationDelay = Math.random() * 5 + 's';
            
            snowContainer.appendChild(snowflake);
            
            // Remove snowflake after animation completes
            setTimeout(() => {
                if (snowflake.parentNode) {
                    snowflake.parentNode.removeChild(snowflake);
                }
            }, (duration + 5) * 1000);
        }

        // Create initial snowflakes
        for (let i = 0; i < numSnowflakes; i++) {
            setTimeout(() => createSnowflake(), i * 200);
        }

        // Continuously create new snowflakes
        setInterval(() => {
            if (snowContainer.children.length < numSnowflakes) {
                createSnowflake();
            }
        }, 500);
    }

    // Christmas Ribbon Decorations
    function createRibbons() {
        const corners = [
            { class: 'christmas-ribbon-top-left', position: 'top-left' },
            { class: 'christmas-ribbon-top-right', position: 'top-right' },
            { class: 'christmas-ribbon-bottom-left', position: 'bottom-left' },
            { class: 'christmas-ribbon-bottom-right', position: 'bottom-right' }
        ];

        corners.forEach(corner => {
            const ribbon = document.createElement('div');
            ribbon.className = `christmas-ribbon ${corner.class}`;
            
            // Create SVG ribbon design
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 100 100');
            svg.setAttribute('preserveAspectRatio', 'none');
            
            // White and silver ribbon design
            const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path1.setAttribute('d', 'M0,0 L100,0 L100,20 L0,20 Z');
            path1.setAttribute('fill', '#FFFFFF');
            path1.setAttribute('opacity', '0.9');
            
            const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path2.setAttribute('d', 'M0,20 L100,20 L90,40 L10,40 Z');
            path2.setAttribute('fill', '#C0C0C0');
            path2.setAttribute('opacity', '0.8');
            
            const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path3.setAttribute('d', 'M0,40 L100,40 L100,60 L0,60 Z');
            path3.setAttribute('fill', '#FFFFFF');
            path3.setAttribute('opacity', '0.9');
            
            const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path4.setAttribute('d', 'M0,60 L100,60 L90,80 L10,80 Z');
            path4.setAttribute('fill', '#C0C0C0');
            path4.setAttribute('opacity', '0.8');
            
            const path5 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path5.setAttribute('d', 'M0,80 L100,80 L100,100 L0,100 Z');
            path5.setAttribute('fill', '#FFFFFF');
            path5.setAttribute('opacity', '0.9');
            
            // Add decorative bow
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '50');
            circle.setAttribute('cy', '50');
            circle.setAttribute('r', '15');
            circle.setAttribute('fill', '#FFD700');
            circle.setAttribute('opacity', '0.7');
            
            svg.appendChild(path1);
            svg.appendChild(path2);
            svg.appendChild(path3);
            svg.appendChild(path4);
            svg.appendChild(path5);
            svg.appendChild(circle);
            
            ribbon.appendChild(svg);
            document.body.appendChild(ribbon);
        });
    }

    // Cleanup function (for manual removal if needed)
    window.removeChristmasTheme = function() {
        const elements = document.querySelectorAll(
            '.christmas-santa-container, .christmas-snow-container, .christmas-ribbon'
        );
        elements.forEach(el => el.remove());
        document.body.classList.add('no-christmas');
    };

})();

