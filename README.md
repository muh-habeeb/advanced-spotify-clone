# 🎵 Realtime Spotify Clone

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)](https://socket.io/)

*A full-stack Spotify clone with real-time features, built with modern web technologies*

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🛠️ Installation](#installation) • [🤝 Contributing](#contributing)

</div>

## ✨ Features

### 🎵 Music Experience
- **Audio Playback Controls** - Play, pause, skip, and previous track functionality
- **Volume Control** - Adjustable audio volume with slider interface
- **Queue Management** - Add songs to queue and manage playback order
- **Album Browsing** - Browse and play entire albums seamlessly
- **Featured Content** - Discover trending and featured songs

### 👥 Social Features
- **Real-time Chat** - Integrated messaging system with live communication
- **User Activity Tracking** - See what other users are currently listening to
- **Online/Offline Status** - Real-time user presence indicators
- **Friends Activity** - Social sidebar showing friend's listening activity

### 🔧 Admin Dashboard
- **Content Management** - Create and manage albums and songs
- **Analytics Dashboard** - View comprehensive statistics and insights
- **User Management** - Monitor user activity and engagement
- **Media Upload** - Upload audio files and album artwork via Cloudinary

### 🔐 Authentication & Security
- **OAuth Integration** - Secure authentication via Clerk
- **Role-based Access** - Admin privileges for content management
- **Protected Routes** - Secure API endpoints with middleware protection

### � Technical Features
- **Real-time Updates** - Socket.io integration for live features
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **State Management** - Zustand for efficient client-side state
- **File Upload** - Cloudinary integration for media management
- **Database Integration** - MongoDB with Mongoose ODM

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and TypeScript
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Socket.io Client** - Real-time communication
- **Clerk React** - Authentication and user management

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **Clerk Express** - Authentication middleware
- **Cloudinary** - Cloud media management
- **Node Cron** - Scheduled task management

### Development Tools
- **ESLint** - Code linting and formatting
- **Nodemon** - Development server auto-restart
- **Concurrently** - Run multiple npm scripts simultaneously

## 📁 Project Structure

```
spotify-clone/
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Application pages
│   │   ├── stores/          # Zustand state management
│   │   ├── layout/          # Layout components
│   │   ├── providers/       # Context providers
│   │   └── types/           # TypeScript type definitions
│   └── public/              # Static assets
│
├── backend/                  # Node.js Express backend
│   ├── src/
│   │   ├── controller/      # API route controllers
│   │   ├── models/          # Mongoose database models
│   │   ├── routes/          # API route definitions
│   │   ├── middleware/      # Authentication middleware
│   │   ├── lib/             # Utility libraries
│   │   └── seeds/           # Database seeding scripts
│   └── tmp/                 # Temporary file storage
│
└── README.md                # Project documentation
```

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Cloudinary account
- Clerk account

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/realtime-spotify-clone.git
cd realtime-spotify-clone
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Environment Configuration

#### Backend Environment (.env)
Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/spotify-clone
# or MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/spotify-clone

# Authentication
CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key
ADMIN_EMAIL=admin@example.com

# Cloud Storage
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Frontend Environment (.env)
Create a `.env` file in the `frontend` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
```

### 4. Database Setup

#### Option 1: Local MongoDB
```bash
# Start MongoDB service
mongod

# Seed the database (optional)
cd backend
npm run seed:albums
npm run seed:songs
```

#### Option 2: MongoDB Atlas
1. Create a MongoDB Atlas cluster
2. Get your connection string
3. Replace `MONGODB_URI` in your backend `.env` file

### 5. Start the Application

#### Development Mode
```bash
# From the root directory
npm run dev
```

This will start both the backend server (port 5000) and frontend development server (port 3000) concurrently.

#### Production Mode
```bash
# Build the frontend
npm run build

# Start the production server
npm start
```

### 6. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Admin Panel**: http://localhost:3000/admin (requires admin email)

## 🔧 Configuration

### Clerk Authentication Setup
1. Create a Clerk account at [clerk.dev](https://clerk.dev)
2. Create a new application
3. Configure OAuth providers (Google, GitHub, etc.)
4. Copy your publishable and secret keys to the environment files

### Cloudinary Setup
1. Create a Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name, API key, and API secret from the dashboard
3. Add these credentials to your backend environment file

### Admin Access
Set the `ADMIN_EMAIL` environment variable to your email address to gain admin privileges.

## 🎯 Usage

### For Regular Users
1. **Sign Up/Login** - Use OAuth to authenticate
2. **Browse Music** - Explore featured songs and albums
3. **Play Music** - Click on any song to start playback
4. **Chat** - Message other users in real-time
5. **View Activity** - See what friends are listening to

### For Admins
1. **Access Admin Panel** - Navigate to `/admin`
2. **Upload Songs** - Add new tracks with metadata
3. **Create Albums** - Organize songs into albums
4. **View Analytics** - Monitor platform statistics

## 🧪 API Endpoints

### Authentication
- `POST /api/auth/callback` - Handle authentication callback
- `GET /api/auth/check` - Check authentication status

### Songs
- `GET /api/songs` - Get all songs
- `GET /api/songs/featured` - Get featured songs
- `GET /api/songs/trending` - Get trending songs
- `GET /api/songs/made-for-you` - Get personalized recommendations

### Albums
- `GET /api/albums` - Get all albums
- `GET /api/albums/:id` - Get specific album
- `POST /api/albums` - Create album (admin)

### Admin
- `POST /api/admin/songs` - Upload songs
- `POST /api/admin/albums` - Create albums
- `GET /api/admin/stats` - Get platform statistics

### Users
- `GET /api/users` - Get all users
- `GET /api/users/messages/:userId` - Get messages with user

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Follow the existing code style

## 📱 Screenshots

<!-- Add screenshots here when available -->
*Screenshots will be added soon*

## 🚦 Roadmap

- [ ] Mobile app development
- [ ] Playlist creation and management
- [ ] Advanced search and filtering
- [ ] Social features (following, sharing)
- [ ] Offline playback support
- [ ] Music recommendations AI
- [ ] Dark/Light theme toggle

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Spotify](https://spotify.com) for inspiration
- [Clerk](https://clerk.dev) for authentication
- [Cloudinary](https://cloudinary.com) for media management
- The open-source community for amazing tools and libraries

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/realtime-spotify-clone/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

---

<div align="center">

**Built with ❤️ by [Your Name](https://github.com/yourusername)**

⭐ Star this repository if you found it helpful!

</div>
