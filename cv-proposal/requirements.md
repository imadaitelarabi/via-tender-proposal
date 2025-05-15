# AI-Powered System Proposal for CV Management and Customization in Public Tender Processes

## Project Objective
The goal is to develop an AI-based system that enables us to:
- Centrally collect and manage collaborator CVs
- Automatically analyze tender documents to understand the requested CVs with their requirements 
- Analyze the CV saved in the company database, and on the base of the tender document, select the best experts meeting the requirements
- Generate customized CVs aligned with the specific requirements of each tender
- (Optional) Provide an easy-to-use interface for continuous CV updates

## 1. CV Collection and Centralized Repository

### Description
All collaborator CVs will be stored in a centralized repository, organized into two categories: internal and external collaborators. Files should be uploaded in a standard format (PDF or Word) and ideally accompanied by key metadata (e.g., name, role, core skills).

## 2. Automatic Selection of the Most Suitable Professional Profile

### Description
When the company decides to participate in a tender, the main tender document (e.g., Terms of Reference – TOR or equivalent) is uploaded into the system. The AI engine analyzes the content and compares it with the database of available CVs to identify the most suitable candidate(s) based on the requirements.

### Required Features
- Parsing and semantic understanding of the tender document
- Automatic extraction of key requirements (e.g., years of experience, sector expertise, required roles, technical skills)
- Prepare a table summarizing the list of the required staff and its requirements
- Intelligent matching between tender requirements and stored profiles
- Ranked list of the best-matching candidates, including compatibility scores

## 3. Automated CV Customization Based on the Tender

### Description
Once the most suitable professional profile is identified, the system generates a customized CV that highlights the experiences, skills, and keywords most relevant to the tender specifications.

### Required Features
- Automated generation of a customized CV with a fixed standard layout
- Highlighting of relevant experiences and qualifications
- Use of keywords directly extracted from the tender document
- Final CV export in PDF format, ready for submission
- Optional manual content editing through a simple and guided interface, ensuring the layout and formatting remain intact

## 4. (Optional) Interface for Ongoing CV Updates

### Description
An easy-to-use tool would be beneficial to allow continuous CV updates. This could be a web interface that guides the user (or a designated HR/admin figure) in updating the professional profile according to a predefined company template.

### Suggested Features
- Secure login access for each collaborator or HR representative
- Guided form for entering new projects, courses, certifications, or experiences
- Automatic synchronization with the central database

## Expected System Outputs
- Customized and optimized CVs in PDF format for each tender
- Smart search and filtering system for internal professional profiles
- Administrative panel to monitor candidate selections and manually adjust parameters if needed
- (Optional) Web interface for collaborators to update and manage their CVs

# Wireframes Documentation (Detailed)

## 1. Wireframes Layout
- **Top Navbar:**
  - Left: Company logo.
  - Center: Page title (e.g., "Dashboard", "Tenders").
  - Right: User avatar, user name, current time, dropdown for profile/settings/logout.
  - Notification bell icon with badge for unread notifications.
- **Sidebar:**
  - Vertical, collapsible.
  - Menu items: Dashboard, Collaborators, Tenders, Settings.
  - Each menu item with icon and label.
  - Active menu item highlighted.
  - Footer: App version, support link.

---

## 2. Dashboard Wireframe
- **Header Section:**
  - Page title ("Dashboard").
  - Quick action button: "Upload Tender".
- **KPI Cards (top row):**
  - Total Collaborators (with trend arrow).
  - Active Tenders.
  - CVs Generated This Month.
  - Pending Actions.
- **Latest Collaborators Table:**
  - Columns: Name, Role, Date Added, Status, Actions (View/Edit).
  - Search and filter bar above table.
- **Recent Activity Feed:**
  - Timeline of recent uploads, matches, and CV generations.
- **Floating Action Button:**
  - "+" icon for quick actions (e.g., Add Collaborator, Upload Tender).

---

## 3. Add a Tender Workflow Wireframe
- **Step 1: Upload Tender**
  - Large drag-and-drop area for files.
  - Supported formats listed.
  - "Next" button enabled after upload.
- **Step 2: Processing**
  - Animated loader (e.g., spinning document).
  - Message: "Processing your tender. This may take a few minutes. You'll be notified when it's ready."
  - Option to return to dashboard (processing continues in background).
- **Step 3: Matched Collaborators**
  - Table of matched profiles:
    - Columns: Name, Match Score (with color-coded bar), Key Skills, Actions (Preview, Generate CV).
  - "Preview" opens sidebar with:
    - Profile details, match explanation, "Generate Personalized CV" button.
  - "Generate All" button at top.
- **Step 4: Generated CVs**
  - List/grid of generated CVs.
  - Each card: Collaborator name, download PDF, "Preview/Modify" button.
  - "Preview/Modify" opens sidebar with:
    - CV preview (PDF viewer or formatted HTML), "Edit" mode for text sections, "Save" and "Download" buttons.

---

## 4. Collaborators Wireframe
- **Header:**
  - Page title ("Collaborators").
  - "Add Collaborator" button.
- **KPI Cards:**
  - Total Collaborators, External/Internal Split, Recently Updated.
- **Table:**
  - Columns: Name, Role, Skills, Last Updated, Status, Actions.
  - Advanced filters: Role, Skills, Availability, Status.
  - Bulk actions: Export, Message, Assign to Tender.

---

## 5. Collaborator View Wireframe
- **Profile Header:**
  - Avatar, Name, Role, Contact Info, Status.
  - "Edit Profile" button.
- **Tabs:**
  - Overview (bio, summary, key skills).
  - Tenders Matched (list with match scores, status, links to tenders).
  - Personalized CVs (list with download/preview options).
  - Activity Log (recent updates, actions).
- **Sidebar:**
  - Quick stats: Years of experience, number of tenders matched, last CV update.

---

## 6. Tenders Wireframe
- **Header:**
  - Page title ("Tenders").
  - "Upload Tender" button.
- **Table/List:**
  - Columns: Tender Name, Date Uploaded, Status (Processing/Ready), Number of Matches, Actions (View, Edit, Delete).
  - Filters: Status, Date, Number of Matches.

---

## 7. Tender View Wireframe
- **Header:**
  - Tender title, status badge, upload date.
  - "Edit Tender" and "Delete" buttons.
- **Details Section:**
  - Tender description, requirements summary, attached documents (download links).
- **Matched Collaborators:**
  - Table or cards: Name, Match Score, Key Skills, Actions (View Profile, Download CV).
- **Personalized CVs:**
  - List of generated CVs with download/preview options.

---

## 8. Settings Wireframe
- **Tabs:**
  - General Info: Name, email, password, profile picture.
  - Integrations: List of connected services (e.g., cloud storage, HR systems), "Connect/Disconnect" buttons.
  - Notifications: Toggle email, SMS, in-app notifications.
- **Save/Cancel buttons** at the bottom of each tab.

---

## 9. Collaborator UI
- **Header:**
  - Welcome message, profile picture.
- **Update CV Section:**
  - Guided form with sections: Personal Info, Experience, Education, Skills, Certifications, Projects.
  - "Add New" buttons for each section.
  - Inline validation and autosave.
  - "Preview CV" and "Submit Update" buttons.
- **Help Sidebar:**
  - Tips for updating CV, contact support link.