// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const openingPage = document.getElementById('opening-page');
    const dashboardPage = document.getElementById('dashboard-page');

    // Check the global variable set by Flask to see if we should skip the intro
    if (start_dashboard) {
        // If start_dashboard is true, we hide the opening page
        // and show the dashboard page immediately.
        if (openingPage) {
            openingPage.style.display = 'none';
        }
        if (dashboardPage) {
            dashboardPage.style.display = 'block';
        }
    } else {
        // Normal behavior: show the opening page with a fade-in animation
        if (openingPage) {
            setTimeout(() => {
                const openingContent = document.querySelector('.opening-page-content');
                openingContent.style.animation = 'fadeIn 2s ease-in-out forwards';
            }, 500);

            // After a delay, transition to the dashboard page
            setTimeout(() => {
                // Start the fade-out animation for the opening page
                openingPage.style.animation = 'fade-out 1s ease-in-out forwards';

                // Use a setTimeout to hide the element and show the dashboard after the fade-out animation is complete
                setTimeout(() => {
                    openingPage.style.display = 'none';
                    if (dashboardPage) {
                         dashboardPage.style.display = 'block';
                    }
                }, 1000); // Wait for the fade-out to finish
            }, 4000); // Total delay for opening screen is 4 seconds
        }
    }

    // Dropdown functionality
    window.myFunction = function() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        // Check if the click occurred outside of the entire dropdown element
        if (!event.target.closest('.dropdown')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});

        // JS functions for the new modal
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.querySelector('div').classList.remove('scale-95', 'opacity-0');
                    modal.querySelector('div').classList.add('scale-100', 'opacity-100');
                }, 10);
            }
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.querySelector('div').classList.remove('scale-100', 'opacity-100');
                modal.querySelector('div').classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
        }
