// Component loader for proposal.html
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
});

// Function to load components that can be called recursively
function loadComponents() {
    // Find all component placeholders
    const componentPlaceholders = document.querySelectorAll('[data-component]:not([data-component-loaded])');
    
    if (componentPlaceholders.length === 0) {
        console.log('No more components to load');
        return;
    }
    
    console.log(`Found ${componentPlaceholders.length} component placeholders to load`);
    
    // Mark components as being processed
    componentPlaceholders.forEach(placeholder => {
        placeholder.setAttribute('data-component-loading', 'true');
    });
    
    // Count for tracking when all components are loaded
    let componentsLoaded = 0;
    
    // Load each component
    componentPlaceholders.forEach(async function(placeholder, index) {
        const componentPath = placeholder.getAttribute('data-component');
        console.log(`Loading component ${index + 1}/${componentPlaceholders.length}: ${componentPath}`);
        
        try {
            // Fetch the component HTML - handle both absolute and relative paths
            const fullPath = componentPath.startsWith('/') ? componentPath : componentPath;
            console.log(`Fetching from path: ${fullPath}`);
            const response = await fetch(fullPath);
            
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentPath} (Status: ${response.status})`);
            }
            
            const componentHtml = await response.text();
            console.log(`Successfully loaded component: ${componentPath} (${componentHtml.length} bytes)`);
            
            // Replace the placeholder with the component HTML
            placeholder.outerHTML = componentHtml;
            console.log(`Replaced placeholder with component: ${componentPath}`);
            
            // Mark this component as loaded
            componentsLoaded++;
            
            // If all components in this batch are loaded, check for new components
            if (componentsLoaded === componentPlaceholders.length) {
                console.log('Batch completed, checking for nested components...');
                setTimeout(loadComponents, 10); // Small timeout to ensure DOM is updated
            }
        } catch (error) {
            console.error(`Error loading component ${componentPath}:`, error);
            placeholder.classList.add('error-loading-component');
            placeholder.innerHTML = `
                <div>
                    <p><strong>Error loading component:</strong> ${componentPath}</p>
                    <p><small>${error.message}</small></p>
                </div>
            `;
            
            // Mark as loaded even if there was an error, to avoid infinite loops
            placeholder.setAttribute('data-component-loaded', 'error');
            
            // Update counter and check for completion
            componentsLoaded++;
            if (componentsLoaded === componentPlaceholders.length) {
                console.log('Batch completed, checking for nested components...');
                setTimeout(loadComponents, 10);
            }
        }
    });
} 