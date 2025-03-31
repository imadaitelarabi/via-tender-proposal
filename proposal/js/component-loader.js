// Component loader for proposal.html
document.addEventListener('DOMContentLoaded', function() {
    // Find all component placeholders
    const componentPlaceholders = document.querySelectorAll('[data-component]');
    console.log(`Found ${componentPlaceholders.length} component placeholders`);
    
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
        } catch (error) {
            console.error(`Error loading component ${componentPath}:`, error);
            placeholder.classList.add('error-loading-component');
            placeholder.innerHTML = `
                <div>
                    <p><strong>Error loading component:</strong> ${componentPath}</p>
                    <p><small>${error.message}</small></p>
                </div>
            `;
        }
    });
}); 