// wireframes.js
// Injects the base wireframe layout (navbar, sidebar, main content area) into the #wireframes section

window.runWireframesLoader = function() {
  const wireframesSection = document.getElementById('wireframes');
  if (!wireframesSection) return;

  // Base layout HTML
  const layoutHTML = `
    <div class="min-h-screen flex flex-col">
      <!-- Top Navbar -->
      <nav class="flex items-center justify-between bg-gray-100 px-6 py-4 border-b">
        <div class="flex items-center">
          <span class="font-bold text-xl text-primary">ViA International</span>
        </div>
        <div class="text-lg font-semibold">Wireframes Demo</div>
        <div class="flex items-center space-x-4">
          <span class="text-gray-600">User Name</span>
          <span class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">U</span>
          <button class="relative">
            <span class="material-icons text-gray-500">notifications</span>
            <span class="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </nav>
      <div class="flex flex-1">
        <!-- Sidebar -->
        <aside class="w-56 bg-gray-50 border-r flex flex-col justify-between">
          <div>
            <ul class="mt-8 space-y-2" id="wireframe-sidebar-menu">
              <li><a href="#" data-wireframe="DashboardWireframe.html" class="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 rounded sidebar-link active"><span class="material-icons mr-2">dashboard</span>Dashboard</a></li>
              <li><a href="#" data-wireframe="CollaboratorsWireframe.html" class="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 rounded sidebar-link"><span class="material-icons mr-2">group</span>Collaborators</a></li>
              <li><a href="#" data-wireframe="TendersWireframe.html" class="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 rounded sidebar-link"><span class="material-icons mr-2">assignment</span>Tenders</a></li>
              <li><a href="#" data-wireframe="SettingsWireframe.html" class="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 rounded sidebar-link"><span class="material-icons mr-2">settings</span>Settings</a></li>
            </ul>
          </div>
          <div class="px-6 py-4 text-xs text-gray-400 border-t">v1.0 &middot; <a href="#" class="underline">Support</a></div>
        </aside>
        <!-- Main Content Area -->
        <main class="flex-1 p-8" id="wireframe-main-content">
          <!-- Wireframe content will be injected here -->
        </main>
      </div>
    </div>
  `;

  // Replace the section's content with the layout
  wireframesSection.innerHTML = layoutHTML;

  // Function to load a wireframe HTML file into the main content area
  function loadWireframe(wireframeFile) {
    const mainContent = document.getElementById('wireframe-main-content');
    if (!mainContent) return;
    fetch(`components/wireframes/${wireframeFile}`)
      .then(res => {
        if (!res.ok) throw new Error('Wireframe not found');
        return res.text();
      })
      .then(html => {
        mainContent.innerHTML = html;
      })
      .catch(() => {
        mainContent.innerHTML = `<div class='text-center text-red-500'>Wireframe not found: ${wireframeFile}</div>`;
      });
  }

  // Sidebar navigation logic
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Remove active from all
      sidebarLinks.forEach(l => l.classList.remove('bg-gray-200', 'font-bold', 'active'));
      // Add active to this
      this.classList.add('bg-gray-200', 'font-bold', 'active');
      // Load the corresponding wireframe
      const wireframeFile = this.getAttribute('data-wireframe');
      if (wireframeFile) loadWireframe(wireframeFile);
    });
  });

  // Load Dashboard by default
  loadWireframe('DashboardWireframe.html');
}

// Run immediately if section is present
if (document.getElementById('wireframes')) {
  runWireframesLoader();
}
// Also listen for the event (for dynamic injection)
document.addEventListener('componentsLoaded', runWireframesLoader); 