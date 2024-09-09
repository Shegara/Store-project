
# PROJECT TITLE
Ecommerce Yugioh TCG application

# SETUP INSTRUCTIONS
Installation

Clone the repository
git clone https://github.com/Shegara/Store-project
use cd to locate the store-project folder once cloned (usually C:\Users\...)

Install dependencies if necessary

## Start the backend server
cd api 

npm start

## Start the frontend server
cd client

npm start

# USAGE
*General idea*

The Ecommerce Yugioh TCG application is designed to offer a small platform for managing and interacting with Yu-Gi-Oh trading cards which are my hobby. The application is split into two several components, with two separate frontend and backend servers managing the data and the UI:

*Frontend*

Multi-Page Interface: Features a responsive design allowing users to navigate between login, registration, and product pages. The interface is built with reusable React components and communicates through props.
Data Handling: Utilizes Axios and React state hooks for fetching and managing data from the backend.
Notifications: Employs the Toast library for displaying user notifications and alerts.
Session Management: React Persist is used to maintain user sessions, enabling functionalities like login, registration, and logout.
Global State Management: Redux handles global state management and updates.

*Backend*

Server: Powered by Node.js and Express, providing dynamic routing and RESTful design with standard HTTP methods and resource-based URLs.
Database: Uses MongoDB for scalable NoSQL data storage, including sorting products based on values stored in the backend.
Authentication: Manages authentication and permissions with JWT tokens for secure HTTP requests.

# AUTHOR
Marko Šego - Shegara (https://github.com/Shegara)



