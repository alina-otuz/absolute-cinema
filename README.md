# Absolute Cinema - Movie Booking Platform

A full-stack web application for browsing movies, managing bookings, writing reviews, and administrative dashboard. Built with Vue.js on the frontend and Express.js with MongoDB on the backend.

## 🎬 Features

### User Features
- **User Authentication**: Sign up, login, and profile management
- **Movie Browsing**: View detailed movie information with ratings and reviews
- **Showtimes**: Browse available showtimes for each movie
- **Booking Management**: Book tickets, view booking history, and cancel bookings
- **Review System**: Read and write movie reviews with ratings
- **User Profile**: Manage personal information and view booking history

### Admin Features
- **Admin Dashboard**: Comprehensive management interface
- **Movie Management**: Create, update, and delete movies
- **Showtime Management**: Manage movie showtimes and availability
- **Booking Overview**: View all user bookings
- **User Management**: Manage user accounts and roles

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens) with bcrypt password hashing
- **Validation**: Joi schema validation
- **Security**: Helmet, CORS, Rate Limiting

### Frontend
- **Framework**: Vue.js 3
- **Build Tool**: Vite
- **Routing**: Vue Router
- **State Management**: Pinia
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS with PostCSS

## 📁 Project Structure

```
absolute-cinema/
├── frontend/                 # Vue.js frontend application
│   ├── src/
│   │   ├── api/             # API service layer
│   │   ├── main.js          # Application entry point
│   │   ├── App.vue          # Root component
│   │   ├── router/          # Vue Router configuration
│   │   ├── stores/          # Pinia stores (state management)
│   │   ├── views/           # Page components
│   │   └── style.css        # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── src/                      # Express backend
│   ├── server.js            # Server entry point
│   ├── app.js               # Express app setup
│   ├── config/
│   │   └── db.js            # Database connection
│   ├── controllers/         # Route handlers
│   ├── middleware/          # Custom middleware
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API route definitions
│   ├── validation/          # Request validation schemas
│   └── validators/          # Additional validation
│
├── package.json             # Backend dependencies
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Backend Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create `.env` file** in the root directory:
   ```bash
   MONGODB_URI=mongodb://localhost:27017/absolute-cinema
   JWT_SECRET=your-secret-key-here
   PORT=5000
   NODE_ENV=development
   ```

3. **Start the backend**:
   ```bash
   npm run dev        # Development mode with nodemon
   npm start          # Production mode
   ```

   Backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create `.env.local` file** (if needed for API configuration):
   ```bash
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   Frontend will run on `http://localhost:5173`

5. **Build for production**:
   ```bash
   npm run build
   ```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Movies
- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get movie details
- `POST /api/movies` - Create movie (admin)
- `PUT /api/movies/:id` - Update movie (admin)
- `DELETE /api/movies/:id` - Delete movie (admin)

### Showtimes
- `GET /api/showtimes` - Get all showtimes
- `GET /api/showtimes/:id` - Get showtime details
- `POST /api/showtimes` - Create showtime (admin)
- `PUT /api/showtimes/:id` - Update showtime (admin)
- `DELETE /api/showtimes/:id` - Delete showtime (admin)

### Bookings
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get booking details
- `POST /api/bookings` - Create booking
- `DELETE /api/bookings/:id` - Cancel booking

### Reviews
- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Create review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

For detailed API documentation, see [Postman_Collection.json](Postman_Collection.json).

## 🔐 Authentication & Authorization

- **JWT Authentication**: Users receive a token on login, which must be included in the `Authorization` header for protected routes
- **Role-Based Access**: Three user roles supported:
  - `user` - Regular user features
  - `admin` - Administrative features
  - `guest` - Limited access without account

## 📝 Database Models

- **User**: User account and profile information
- **Movie**: Movie details, description, ratings
- **Showtime**: Movie showtimes, theaters, availability
- **Booking**: User ticket bookings with status tracking
- **Review**: User movie reviews and ratings

## 🧪 Development

### Backend Development
- Uses `nodemon` for automatic server restart on file changes
- Joi schema validation for all requests
- Error middleware for consistent error handling
- Rate limiting to prevent abuse

### Frontend Development
- Vite provides fast HMR (Hot Module Replacement)
- Vue Router for client-side routing
- Pinia for centralized state management
- Tailwind CSS for utility-first styling

## 📦 Dependencies

See [package.json](package.json) for backend and [frontend/package.json](frontend/package.json) for frontend dependencies.

## 📄 License

This project is created as a Web Backend Final Project.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Last Updated**: February 2026
