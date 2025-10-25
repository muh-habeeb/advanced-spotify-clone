# 🎵 Realtime Spotify Clone

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)](https://socket.io/)

*A full-stack Spotify clone with real-time features*

</div>

## ✨ Features

### 🎵 Music Experience
- Audio Playback Controls - Play, pause, skip, and previous track
- Volume Control - Adjustable audio volume with slider
- Queue Management - Add songs to queue and manage order
- Album Browsing - Browse and play entire albums
- Featured Content - Discover trending songs

### 👥 Social Features
- Real-time Chat - Integrated messaging system
- User Activity Tracking - See who's listening to what
- Online/Offline Status - Real-time presence indicators
- Friends Activity - Social sidebar showing activity

### 🔧 Admin Dashboard
- Content Management - Create and manage albums
- Analytics Dashboard - View statistics
- User Management - Monitor activity
- Media Upload - Upload via Cloudinary

### 🔐 Authentication & Security
- OAuth Integration via Clerk
- Role-based Access control
- Protected API endpoints

## 🛠️ Tech Stack

**Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Radix UI, Zustand

**Backend:** Node.js, Express.js, MongoDB, Mongoose, Socket.io, Cloudinary

## 📁 Project Structure
<details>
<summary>View full structure</summary>

```json
├── 📁 backend
│   ├── 📁 src
│   │   ├── 📁 controller
│   │   │   ├── 📄 admin.controller.js
│   │   │   ├── 📄 album.controller.js
│   │   │   ├── 📄 auth.controller.js
│   │   │   ├── 📄 song.controller.js
│   │   │   ├── 📄 stat.controller.js
│   │   │   └── 📄 user.controller.js
│   │   ├── 📁 lib
│   │   │   ├── 📄 cloudinary.js
│   │   │   ├── 📄 db.js
│   │   │   └── 📄 socket.js
│   │   ├── 📁 middleware
│   │   │   └── 📄 auth.middleware.js
│   │   ├── 📁 models
│   │   │   ├── 📄 album.model.js
│   │   │   ├── 📄 message.model.js
│   │   │   ├── 📄 song.model.js
│   │   │   └── 📄 user.model.js
│   │   ├── 📁 routes
│   │   │   ├── 📄 admin.route.js
│   │   │   ├── 📄 album.route.js
│   │   │   ├── 📄 auth.route.js
│   │   │   ├── 📄 song.route.js
│   │   │   ├── 📄 stat.route.js
│   │   │   └── 📄 user.route.js
│   │   ├── 📁 seeds
│   │   │   ├── 📄 albums.js
│   │   │   └── 📄 songs.js
│   │   └── 📄 index.js
│   ├── ⚙️ .env.sample
│   ├── ⚙️ .gitignore
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   └── 📝 readme.md
├── 📁 docs
│   ├── 📁 screenshots
│   │   └── 📝 README.md
│   ├── 📝 API.md
│   ├── 📝 ARCHITECTURE.md
│   └── 📝 DEPLOYMENT.md
├── 📁 frontend
│   ├── 📁 public
│   │   ├── 📁 albums
│   │   │   ├── 🖼️ 1.jpg
│   │   │   ├── 🖼️ 2.jpg
│   │   │   ├── 🖼️ 3.jpg
│   │   │   └── 🖼️ 4.jpg
│   │   ├── 📁 cover-images
│   │   │   ├── 🖼️ 1.jpg
│   │   │   ├── 🖼️ 10.jpg
│   │   │   ├── 🖼️ 11.jpg
│   │   │   ├── 🖼️ 12.jpg
│   │   │   ├── 🖼️ 13.jpg
│   │   │   ├── 🖼️ 14.jpg
│   │   │   ├── 🖼️ 15.jpg
│   │   │   ├── 🖼️ 16.jpg
│   │   │   ├── 🖼️ 17.jpg
│   │   │   ├── 🖼️ 18.jpg
│   │   │   ├── 🖼️ 2.jpg
│   │   │   ├── 🖼️ 3.jpg
│   │   │   ├── 🖼️ 4.jpg
│   │   │   ├── 🖼️ 5.jpg
│   │   │   ├── 🖼️ 6.jpg
│   │   │   ├── 🖼️ 7.jpg
│   │   │   ├── 🖼️ 8.jpg
│   │   │   └── 🖼️ 9.jpg
│   │   ├── 📁 songs
│   │   │   ├── 🎵 1.mp3
│   │   │   ├── 🎵 10.mp3
│   │   │   ├── 🎵 11.mp3
│   │   │   ├── 🎵 12.mp3
│   │   │   ├── 🎵 13.mp3
│   │   │   ├── 🎵 14.mp3
│   │   │   ├── 🎵 15.mp3
│   │   │   ├── 🎵 16.mp3
│   │   │   ├── 🎵 17.mp3
│   │   │   ├── 🎵 18.mp3
│   │   │   ├── 🎵 2.mp3
│   │   │   ├── 🎵 3.mp3
│   │   │   ├── 🎵 4.mp3
│   │   │   ├── 🎵 5.mp3
│   │   │   ├── 🎵 6.mp3
│   │   │   ├── 🎵 7.mp3
│   │   │   ├── 🎵 8.mp3
│   │   │   └── 🎵 9.mp3
│   │   ├── 🖼️ google.png
│   │   ├── 🖼️ screenshot-for-readme.png
│   │   ├── 🖼️ spotify.png
│   │   └── 🖼️ vite.svg
│   ├── 📁 src
│   │   ├── 📁 components
│   │   │   ├── 📁 skeletons
│   │   │   │   ├── 📄 FeaturedGridSkeleton.tsx
│   │   │   │   ├── 📄 PlaylistSkeleton.tsx
│   │   │   │   └── 📄 UsersListSkeleton.tsx
│   │   │   ├── 📁 ui
│   │   │   │   ├── 📄 avatar.tsx
│   │   │   │   ├── 📄 button.tsx
│   │   │   │   ├── 📄 card.tsx
│   │   │   │   ├── 📄 dialog.tsx
│   │   │   │   ├── 📄 input.tsx
│   │   │   │   ├── 📄 resizable.tsx
│   │   │   │   ├── 📄 scroll-area.tsx
│   │   │   │   ├── 📄 select.tsx
│   │   │   │   ├── 📄 slider.tsx
│   │   │   │   ├── 📄 table.tsx
│   │   │   │   └── 📄 tabs.tsx
│   │   │   ├── 📄 SignInOAuthButtons.tsx
│   │   │   └── 📄 Topbar.tsx
│   │   ├── 📁 layout
│   │   │   ├── 📁 components
│   │   │   │   ├── 📄 AudioPlayer.tsx
│   │   │   │   ├── 📄 FriendsActivity.tsx
│   │   │   │   ├── 📄 LeftSidebar.tsx
│   │   │   │   └── 📄 PlaybackControls.tsx
│   │   │   └── 📄 MainLayout.tsx
│   │   ├── 📁 lib
│   │   │   ├── 📄 axios.ts
│   │   │   └── 📄 utils.ts
│   │   ├── 📁 pages
│   │   │   ├── 📁 404
│   │   │   │   └── 📄 NotFoundPage.tsx
│   │   │   ├── 📁 admin
│   │   │   │   ├── 📁 components
│   │   │   │   │   ├── 📄 AddAlbumDialog.tsx
│   │   │   │   │   ├── 📄 AddSongDialog.tsx
│   │   │   │   │   ├── 📄 AlbumsTabContent.tsx
│   │   │   │   │   ├── 📄 AlbumsTable.tsx
│   │   │   │   │   ├── 📄 DashboardStats.tsx
│   │   │   │   │   ├── 📄 Header.tsx
│   │   │   │   │   ├── 📄 SongsTabContent.tsx
│   │   │   │   │   ├── 📄 SongsTable.tsx
│   │   │   │   │   └── 📄 StatsCard.tsx
│   │   │   │   └── 📄 AdminPage.tsx
│   │   │   ├── 📁 album
│   │   │   │   └── 📄 AlbumPage.tsx
│   │   │   ├── 📁 auth-callback
│   │   │   │   └── 📄 AuthCallbackPage.tsx
│   │   │   ├── 📁 chat
│   │   │   │   ├── 📁 components
│   │   │   │   │   ├── 📄 ChatHeader.tsx
│   │   │   │   │   ├── 📄 MessageInput.tsx
│   │   │   │   │   └── 📄 UsersList.tsx
│   │   │   │   └── 📄 ChatPage.tsx
│   │   │   └── 📁 home
│   │   │       ├── 📁 components
│   │   │       │   ├── 📄 FeaturedSection.tsx
│   │   │       │   ├── 📄 PlayButton.tsx
│   │   │       │   ├── 📄 SectionGrid.tsx
│   │   │       │   └── 📄 SectionGridSkeleton.tsx
│   │   │       └── 📄 HomePage.tsx
│   │   ├── 📁 providers
│   │   │   └── 📄 AuthProvider.tsx
│   │   ├── 📁 stores
│   │   │   ├── 📄 useAuthStore.ts
│   │   │   ├── 📄 useChatStore.ts
│   │   │   ├── 📄 useMusicStore.ts
│   │   │   └── 📄 usePlayerStore.ts
│   │   ├── 📁 types
│   │   │   └── 📄 index.ts
│   │   ├── 📄 App.tsx
│   │   ├── 🎨 index.css
│   │   ├── 📄 main.tsx
│   │   └── 📄 vite-env.d.ts
│   ├── ⚙️ .env.sample
│   ├── ⚙️ .gitignore
│   ├── 📝 README.md
│   ├── ⚙️ components.json
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   ├── 📄 postcss.config.js
│   ├── 📄 tailwind.config.js
│   ├── ⚙️ tsconfig.app.json
│   ├── ⚙️ tsconfig.json
│   ├── ⚙️ tsconfig.node.json
│   └── 📄 vite.config.ts
├── ⚙️ .gitignore
├── 📝 CHANGELOG.md
├── 📝 CONTRIBUTING.md
├── 📄 LICENSE
├── 📝 README.md
├── ⚙️ package-lock.json
└── ⚙️ package.json
```
</details>

## 🚀 Installation

### Prerequisites
- Node.js v18+
- MongoDB
- Cloudinary account
- Clerk account

### Steps

1. **Clone Repository**
   ` ash
   git clone https://github.com/yourusername/realtime-spotify-clone.git
   cd realtime-spotify-clone
   ` 

2. **Install Dependencies**
   ` ash
   npm install
   ` 

3. **Configure Environment**

   **backend/.env:**
   ` 
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/spotify-clone
   CLERK_PUBLISHABLE_KEY=your_key
   CLERK_SECRET_KEY=your_key
   ADMIN_EMAIL=admin@example.com
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ` 

   **frontend/.env:**
   ` 
   VITE_CLERK_PUBLISHABLE_KEY=your_key
   ` 

4. **Run Application**
   ` ash
   npm run dev
   ` 

5. **Access Application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## 🎯 Usage

### For Users
1. Sign up/login with OAuth
2. Browse and play music
3. Chat with other users
4. View friend's activity

### For Admins
1. Go to /admin
2. Upload songs and create albums
3. Monitor analytics

## 🧪 API Endpoints

**Songs:**
- GET /api/songs
- GET /api/songs/featured
- GET /api/songs/trending

**Albums:**
- GET /api/albums
- GET /api/albums/:id

**Admin:**
- POST /api/admin/songs
- POST /api/admin/albums
- GET /api/admin/stats

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push and create PR

## � Deployment

### Vercel Deployment (Frontend)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite
   - Click "Deploy"

3. **Add Environment Variables in Vercel Dashboard**
   - Settings → Environment Variables
   - Add: `VITE_CLERK_PUBLISHABLE_KEY`
   - Add: `VITE_API_URL` (if needed)

4. **Build Settings**
   - Framework: Vite
   - Build Command: `npm install --prefix frontend && npm run build --prefix frontend`
   - Output Directory: `frontend/dist`
   - Install Command: `npm install && npm install --prefix frontend`

### Railway/Heroku Deployment (Backend)

1. **Create Account**
   - Go to [railway.app](https://railway.app) or [heroku.com](https://heroku.com)

2. **Connect Repository**
   - Select your GitHub repository
   - Choose branch to deploy

3. **Add Environment Variables**
   - PORT
   - NODE_ENV=production
   - MONGODB_URI
   - CLERK_PUBLISHABLE_KEY
   - CLERK_SECRET_KEY
   - CLOUDINARY_CLOUD_NAME
   - CLOUDINARY_API_KEY
   - CLOUDINARY_API_SECRET
   - ADMIN_EMAIL

4. **Deploy**
   - Framework will auto-detect Node.js
   - Build: `npm install`
   - Start: `npm start`

### Troubleshooting

**Error: tsc: command not found**
- Solution: Updated build script to use `npx tsc`
- Ensure TypeScript is in `devDependencies`

**Error: Module not found**
- Solution: Run `npm install` before build
- Check all dependencies are listed in `package.json`

**Build timeout**
- Solution: Optimize bundle size
- Remove unused dependencies
- Use dynamic imports

## �📄 License

ISC License

## 🙏 Acknowledgments

- Spotify for design inspiration
- Clerk for authentication
- Cloudinary for media management

---

<div align="center">

**Built with ❤️**

</div>
