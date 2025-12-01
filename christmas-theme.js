// Christmas Theme JavaScript - Temporary Holiday Decoration
// Automatically disables on January 1st, 2026

(function() {
    'use strict';
    
    console.log('Christmas theme script loaded');

    // Wait for DOM to be ready
    function init() {
        try {
            // Check if Christmas theme should be active
            const END_DATE = new Date('2026-01-01T00:00:00');
            const today = new Date();

            // If past end date, don't initialize Christmas theme
            if (today >= END_DATE) {
                if (document.body) {
                    document.body.classList.add('no-christmas');
                }
                return;
            }

            // Initialize Christmas theme
            console.log('Initializing Christmas theme...');
            initChristmasTheme();
            console.log('Christmas theme initialized');
        } catch (error) {
            console.error('Christmas theme initialization error:', error);
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM is already ready
        init();
    }

    function initChristmasTheme() {
        createSantaAnimation();
        createSnowfall();
        createRibbons();
        createSnowBorder();
        createChristmasLights();
    }

    // Santa Animation
    function createSantaAnimation() {
        if (!document.body) {
            console.error('Document body not found');
            return;
        }
        
        const santaContainer = document.createElement('div');
        santaContainer.className = 'christmas-santa-container';
        
        const santa = document.createElement('div');
        santa.className = 'christmas-santa';
        
        // Banner - White sparkly "Merry Christmas" (no emojis)
        const banner = document.createElement('div');
        banner.className = 'christmas-banner';
        const bannerText = document.createElement('span');
        bannerText.textContent = 'Merry Christmas';
        banner.appendChild(bannerText);
        
        santa.appendChild(banner);
        santaContainer.appendChild(santa);
        document.body.appendChild(santaContainer);
        
        console.log('Santa animation created', santaContainer);
        
        // Set up jingle bell sound to play when Santa appears
        // Wait for user interaction first
        let userInteracted = false;
        const enableSound = () => {
            userInteracted = true;
            document.removeEventListener('click', enableSound);
            document.removeEventListener('scroll', enableSound);
            document.removeEventListener('touchstart', enableSound);
        };
        
        document.addEventListener('click', enableSound);
        document.addEventListener('scroll', enableSound);
        document.addEventListener('touchstart', enableSound);
        
        // Play jingle bell sound when Santa appears (after animation delay)
        setTimeout(() => {
            if (userInteracted) {
                playJingleBell();
            }
        }, 1000); // Match animation delay (1s)
    }
    
    // Jingle Bell Sound
    function playJingleBell() {
        try {
            // Create audio context for jingle bell sound
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const now = audioContext.currentTime;
            
            // Create multiple oscillators for a richer bell sound
            const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5 chord
            
            frequencies.forEach((freq, index) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(freq, now);
                
                // Bell-like envelope
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.2, now + 0.02);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.start(now);
                oscillator.stop(now + 0.6);
            });
            
            // Second jingle after a short delay
            setTimeout(() => {
                const now2 = audioContext.currentTime;
                const frequencies2 = [659.25, 783.99, 987.77]; // E5, G5, B5
                
                frequencies2.forEach((freq, index) => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(freq, now2);
                    
                    gainNode.gain.setValueAtTime(0, now2);
                    gainNode.gain.linearRampToValueAtTime(0.15, now2 + 0.02);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now2 + 0.5);
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.start(now2);
                    oscillator.stop(now2 + 0.5);
                });
            }, 150);
        } catch (error) {
            console.log('Jingle bell sound:', error.message || 'Audio context unavailable');
        }
    }

    // Snowfall Effect
    function createSnowfall() {
        if (!document.body) return;
        
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
            
            // Random delay (reduced for faster appearance)
            snowflake.style.animationDelay = Math.random() * 2 + 's';
            
            snowContainer.appendChild(snowflake);
            
            // Remove snowflake after animation completes
            setTimeout(() => {
                if (snowflake.parentNode) {
                    snowflake.parentNode.removeChild(snowflake);
                }
            }, (duration + 5) * 1000);
        }

        // Create initial snowflakes immediately
        for (let i = 0; i < numSnowflakes; i++) {
            setTimeout(() => createSnowflake(), i * 100);
        }
        console.log('Snowfall effect created');

        // Continuously create new snowflakes
        setInterval(() => {
            if (snowContainer.children.length < numSnowflakes) {
                createSnowflake();
            }
        }, 500);
    }

    // Christmas Ribbon Decorations - Diagonal Ribbons Across Corners
    function createRibbons() {
        if (!document.body) return;
        
        const corners = [
            { class: 'christmas-ribbon-top-left', position: 'top-left' },
            { class: 'christmas-ribbon-top-right', position: 'top-right' },
            { class: 'christmas-ribbon-bottom-left', position: 'bottom-left' },
            { class: 'christmas-ribbon-bottom-right', position: 'bottom-right' }
        ];

        corners.forEach(corner => {
            const ribbon = document.createElement('div');
            ribbon.className = `christmas-ribbon ${corner.class}`;
            
            // Create SVG ribbon design - Diagonal white ribbon with snowflakes
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 200 60');
            svg.setAttribute('preserveAspectRatio', 'none');
            
            // White ribbon base - diagonal stripe pattern
            for (let i = 0; i < 10; i++) {
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                const y = i * 6;
                path.setAttribute('d', `M0,${y} L200,${y} L200,${y + 3} L0,${y + 3} Z`);
                path.setAttribute('fill', '#FFFFFF');
                path.setAttribute('opacity', i % 2 === 0 ? '0.9' : '0.7');
                svg.appendChild(path);
            }
            
            // Add snowflakes along the ribbon
            const snowflakes = ['❄', '❅', '❆'];
            for (let i = 0; i < 8; i++) {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                const x = 20 + i * 25;
                const y = 35;
                text.setAttribute('x', x);
                text.setAttribute('y', y);
                text.setAttribute('font-size', '14');
                text.setAttribute('fill', '#E8F4F8');
                text.setAttribute('opacity', '0.9');
                text.setAttribute('text-anchor', 'middle');
                text.textContent = snowflakes[i % snowflakes.length];
                svg.appendChild(text);
            }
            
            ribbon.appendChild(svg);
            document.body.appendChild(ribbon);
        });
        console.log('Ribbons created');
    }
    
    // Snow Accumulation Border
    function createSnowBorder() {
        if (!document.body) return;
        
        const snowBorder = document.createElement('div');
        snowBorder.className = 'christmas-snow-border';
        document.body.appendChild(snowBorder);
        console.log('Snow border created', snowBorder);
    }
    
    // Christmas Lights Under Header
    function createChristmasLights() {
        if (!document.body) return;
        
        const lightsContainer = document.createElement('div');
        lightsContainer.className = 'christmas-lights';
        
        const lightString = document.createElement('div');
        lightString.className = 'christmas-light-string';
        
        // Create 20 lights evenly spaced
        const numLights = 20;
        for (let i = 0; i < numLights; i++) {
            const light = document.createElement('div');
            light.className = 'christmas-light';
            lightString.appendChild(light);
        }
        
        lightsContainer.appendChild(lightString);
        document.body.appendChild(lightsContainer);
        console.log('Christmas lights created');
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

