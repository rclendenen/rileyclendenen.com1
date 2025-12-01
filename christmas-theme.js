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
        
        // Play jingle bell sound when Santa appears (after animation delay)
        setTimeout(() => {
            playJingleBell();
        }, 2000); // Match animation delay
        
        console.log('Santa animation created');
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
                gainNode.gain.linearRampToValueAtTime(0.15, now + 0.02);
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
                    gainNode.gain.linearRampToValueAtTime(0.12, now2 + 0.02);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now2 + 0.5);
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.start(now2);
                    oscillator.stop(now2 + 0.5);
                });
            }, 150);
        } catch (error) {
            // Silently fail if audio context is not available (user interaction required)
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

    // Christmas Ribbon Decorations - White with Snowflakes
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
            
            // Create SVG ribbon design - White with snowflakes
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 100 100');
            svg.setAttribute('preserveAspectRatio', 'none');
            
            // White ribbon base
            const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path1.setAttribute('d', 'M0,0 L100,0 L100,20 L0,20 Z');
            path1.setAttribute('fill', '#FFFFFF');
            path1.setAttribute('opacity', '0.95');
            
            const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path2.setAttribute('d', 'M0,20 L100,20 L90,40 L10,40 Z');
            path2.setAttribute('fill', '#FFFFFF');
            path2.setAttribute('opacity', '0.9');
            
            const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path3.setAttribute('d', 'M0,40 L100,40 L100,60 L0,60 Z');
            path3.setAttribute('fill', '#FFFFFF');
            path3.setAttribute('opacity', '0.95');
            
            const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path4.setAttribute('d', 'M0,60 L100,60 L90,80 L10,80 Z');
            path4.setAttribute('fill', '#FFFFFF');
            path4.setAttribute('opacity', '0.9');
            
            const path5 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path5.setAttribute('d', 'M0,80 L100,80 L100,100 L0,100 Z');
            path5.setAttribute('fill', '#FFFFFF');
            path5.setAttribute('opacity', '0.95');
            
            // Add snowflakes on the ribbon
            const snowflakes = ['❄', '❅', '❆'];
            for (let i = 0; i < 6; i++) {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                const x = 15 + (i % 3) * 30;
                const y = 20 + Math.floor(i / 3) * 30;
                text.setAttribute('x', x);
                text.setAttribute('y', y);
                text.setAttribute('font-size', '12');
                text.setAttribute('fill', '#E8F4F8');
                text.setAttribute('opacity', '0.8');
                text.textContent = snowflakes[i % snowflakes.length];
                svg.appendChild(text);
            }
            
            svg.appendChild(path1);
            svg.appendChild(path2);
            svg.appendChild(path3);
            svg.appendChild(path4);
            svg.appendChild(path5);
            
            ribbon.appendChild(svg);
            document.body.appendChild(ribbon);
        });
        console.log('Ribbons created');
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

