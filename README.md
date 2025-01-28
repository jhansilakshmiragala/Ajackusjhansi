# User Management Dashboard

This is a **User Management Dashboard** built with **React**. The application allows users to:

- **View** the list of users.
- **Add** new users.
- **Edit** existing user details.
- **Delete** users.

### Features

- A table displaying users with **ID**, **First Name**, **Last Name**, **Email**, and **Department**.
- **Add/Edit User** modal to add new users or update existing users.
- **Notification** component to show success/error messages based on the actions performed.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **CSS**: For styling the components.

### Project Structure
project-folder/ ├── public/ // Public assets │ ├── index.html // Main HTML file │ └── favicon.ico // Favicon │ ├── src/ // Main source directory │ ├── components/ // All reusable components │ │ ├── AddEditUserModal.js // Modal to add/edit users │ │ ├── Notification.js // Component to show notifications │ │ ├── UserTable.js // Table to display users │ │ └── styles/ // Component-specific styles │ │ ├── AddEditUserModal.css │ │ ├── Notification.css │ │ └── UserTable.css │ │ │ ├── styles/ // Global styles │ │ └── App.css │ │ │ ├── App.js // Root application component │ ├── index.js // Entry point │ └── services/ // API or utility logic │ └── api.js // API calls (optional centralization) │ ├── .gitignore // Git ignore rules ├── package.json // NPM package file ├── README.md // Project documentation └── yarn.lock / package-lock.json // Dependency lock file


### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jhansilakshmiragala/Ajackusjhansi.git
   
2. Install dependencies:
Navigate to the project folder and install the necessary dependencies:
cd user-management-dashboard
npm install

3. Start the development server:
Run the following command to start the development server:
npm start

Components Breakdown
AddEditUserModal.js:

This component is responsible for displaying the modal form where users can add or edit their details.
UserTable.js:

This component is responsible for displaying a table of users. It includes options to edit or delete a user.
Notification.js:

A component that displays notifications based on actions performed (e.g., user added, updated, or deleted).

Example API (Using JSONPlaceholder)
For simplicity, this project uses the JSONPlaceholder API to fetch, add, update, and delete users. The API is used to simulate real-world data handling:

GET https://jsonplaceholder.typicode.com/users: Fetch all users.
POST https://jsonplaceholder.typicode.com/users: Add a new user.
PUT https://jsonplaceholder.typicode.com/users/{id}: Update an existing user.
DELETE https://jsonplaceholder.typicode.com/users/{id}: Delete a user.

Additional Notes
The application uses React hooks (useState, useEffect) to manage state and side effects.
Axios is used for making API requests and handling responses.
Styling is done using CSS in separate files for each component to maintain modularity.
