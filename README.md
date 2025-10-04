# 🎵 Advanced Spotify Clone

<div align="center">
  <img src="./frontend/public/spotify.png" alt="Spotify Clone" width="120" height="120">
  
  **A modern, feature-rich music streaming application built with React, TypeScript, and Node.js**
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-Express-green)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)](https://mongodb.com/)
  [![Socket.io](https://img.shields.io/badge/WebSocket-Socket.io-black)](https://socket.io/)
</div>

## ✨ Features

### 🎵 Music Playback
- **High-quality audio streaming** with seamless playback
- **Play/Pause controls** with instant response
- **Next/Previous track navigation** through your queue
- **Progress bar with seek functionality** - jump to any part of the song
- **Auto-advance to next song** when current track ends

### 🔊 Audio Controls
- **Volume control slider** with real-time adjustment
- **Mute/Unmute functionality** with volume memory
- **Audio visualization** with current playback time
- **Duration display** for total track length

### 📀 Playlist & Queue Management
- **Dynamic queue system** that updates in real-time
- **Album playback** - play entire albums from any starting track
- **Song queueing** - add songs to your current listening session
- **Smart queue navigation** with previous/next track logic
- **Resume playback** from where you left off

### 🎨 User Interface
- **Modern, responsive design** that works on all devices
- **Dark theme** with Spotify-inspired aesthetics
- **Album artwork display** with high-resolution cover images
- **Artist and track information** clearly displayed
- **Smooth animations** and transitions throughout the app

### 🔐 User Authentication
- **Secure authentication** powered by Clerk
- **User profile management** with personalized experiences
- **Session persistence** across browser sessions

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and context
- **TypeScript 5.6.2** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, customizable icons

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **Socket.io** - Real-time WebSocket communication
- **Cloudinary** - Media storage and optimization
- **Clerk** - Authentication and user management
- **Express FileUpload** - Handle file uploads

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Nodemon** - Development server auto-restart
- **Concurrently** - Run multiple scripts simultaneously

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** database
- **Cloudinary** account for media storage
- **Clerk** account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/advanced-spotify-clone.git
   cd advanced-spotify-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create `.env` file in the `backend` folder:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ADMIN_EMAIL=your_admin_email
   NODE_ENV=development

   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

   Create `.env` file in the `frontend` folder:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Seed the database (optional)**
   ```bash
   cd backend
   npm run seed:albums
   npm run seed:songs
   ```

5. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend development server (port 5173).

## 📱 Usage

### Playing Music
1. **Browse** through the featured albums and trending songs on the home page
2. **Click any song** to start playback and add it to your queue
3. **Use the bottom player controls** to pause, skip, or adjust volume
4. **Click on album artwork** to view the full album and play all tracks

### Managing Your Queue
1. **Songs automatically queue** when you start playing from an album
2. **Navigate** through your queue using the next/previous buttons
3. **Seek to any position** in the current track using the progress bar
4. **Volume control** lets you adjust audio levels in real-time

### Audio Controls
- **Play/Pause**: Large center button in the bottom player
- **Skip Forward/Back**: Arrow buttons on either side of play button
- **Volume**: Slider on the right side of the bottom player
- **Seek**: Click anywhere on the progress bar to jump to that position

## 📁 Project Structure

```
advanced-spotify-clone/
├── backend/
│   ├── src/
│   │   ├── controllers/     # API endpoint logic
│   │   ├── models/          # Database schemas
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Authentication & validation
│   │   ├── lib/            # Database & external services
│   │   └── seeds/          # Database seeding scripts
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── stores/         # Zustand state management
│   │   ├── layout/         # Layout components
│   │   ├── lib/            # Utilities and configurations
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static assets (images, audio files)
│   └── package.json
└── package.json
```

## 🎯 Key Components

### Audio System
- **AudioPlayer**: Core audio playback engine
- **PlaybackControls**: User interface for music controls
- **PlayerStore**: State management for current song, queue, and playback status

### Music Management
- **Album Management**: Browse and play complete albums
- **Song Queue**: Dynamic playlist management
- **Progress Tracking**: Real-time playback position and duration

### User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark Theme**: Spotify-inspired color scheme
- **Smooth Animations**: Polished user experience with fluid transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Spotify** for the design inspiration
- **React community** for excellent documentation and tools
- **Clerk** for seamless authentication
- **Cloudinary** for reliable media storage

---

<div align="center">
  Made with ❤️ and 🎵
</div>
