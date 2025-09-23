// Accordion Functionality for Incluu Services
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all accordion items
    const accordionButtons = document.querySelectorAll('.accordion-item-click-target');
    
    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const accordionItem = this.closest('.accordion-item');
            const dropdown = accordionItem.querySelector('.accordion-item-dropdown');
            const iconContainer = this.querySelector('.accordion-icon-container');
            
            // Get current state
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all other accordions (optional - remove if you want multiple open)
            accordionButtons.forEach(function(otherButton) {
                if (otherButton !== button) {
                    otherButton.setAttribute('aria-expanded', 'false');
                    const otherItem = otherButton.closest('.accordion-item');
                    const otherDropdown = otherItem.querySelector('.accordion-item-dropdown');
                    otherItem.setAttribute('data-is-open', 'false');
                    otherDr
