🛍️ RedShop – React Project
This is a small online shop project built with React.
Our goal was to create a simple, clean and user‑friendly e‑commerce website where users can browse products, check details, add items to the cart and manage them.

This project was created by:
Abilmukanova Ainuru, Jumalieva Samara, Sultanova Nurjanat

⭐ What you can do in the app
View all products

Search and filter products by category

Open a product page and see full details

Add and remove items from the shopping cart

Floating mini‑cart (always visible)

Login / Register pages

Admin panel (add, edit and delete products)

Protected routes for customers and admins

🧰 Technologies we used
React

React Router

Axios

JSON Server (fake backend)

Context API (for cart management)

CSS (custom styling)

🚀 How to start the project
1. Install packages
npm install
2. Start React project
npm start
3. Start JSON Server
npx json-server --watch db.json --port 4000
Now open the browser at:
👉 http://localhost:3000

📂 Project structure (short version)
src/
 ├── admin/        # Admin pages
 ├── components/   # UI components
 ├── context/      # Cart context
 ├── pages/        # User pages
 ├── routes/       # Protected routes
 └── App.js

🔑 Логины для тестирования
👤 Покупатель
email: admin@gmail.com
password: admin123
👑 Администратор
email: test@gmail.com
password: test1234
 
❤️ About the project
We wanted to create something simple but still useful.
RedShop shows basic e‑commerce logic: product list, cart, admin panel and protection for routes.
This project helped us practice React, routing, context, and working with a fake backend.
