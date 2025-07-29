# URL Shortener Service

A full-fledged URL shortener built with Node.js, Express, SQLite, JWT authentication, and EJS frontend.

## 🛠️ Tech Stack
- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **SQLite**: Lightweight database
- **JWT**: Secure authentication
- **EJS**: Templating engine
- **CSS/JS**: Modern, animated UI

## ✨ Features
- 👤 **User registration & login**: Secure sign-up and login with JWT authentication. Your session is managed in the browser for easy access to protected features.
- 🔗 **URL shortening**: Instantly create custom short URLs with a "krishna" prefix. The process is fast and works for any valid link.
- 🚀 **Redirection**: Use your short URL to redirect users to the original destination. Just click and go!
- 📊 **Analytics**: Track every click, referrer, and IP for your shortened URLs. View detailed stats to understand your link's performance.
- 🛠️ **RESTful API endpoints**: Easily integrate with other apps or automate tasks using secure, documented endpoints.
- 🖥️ **Dashboard for managing URLs**: See all your links, their stats, and manage them in a beautiful, animated dashboard.

## 🚀 Setup
1. Install dependencies:
   ```cmd
   npm install
   ```
2. Start the server:
   ```cmd
   npm start
   ```

## 📁 Folder Structure
- `src/models` - SQLite models and queries
- `src/controllers` - Route logic
- `src/routes` - Express routes
- `src/middleware` - Auth middleware
- `src/views` - EJS templates
- `src/public` - Static assets (CSS, JS, animations)

## 🔌 API Endpoints
- `POST /auth/register` - Register user
- `POST /auth/login` - Login user
- `POST /url/shorten` - Shorten URL (auth required)
- `GET /url/dashboard` - User dashboard (auth required)
- `GET /:shortId` - Redirect to original URL
- `GET /analytics/:shortId` - Get analytics for a URL

## 👩‍💻 Developer
**Tanisha Mittal**
- Email: 2023kucp1163@iiitkota.ac.in
- GitHub: [tanisha-mittal](https://github.com/tanishamittal03)
