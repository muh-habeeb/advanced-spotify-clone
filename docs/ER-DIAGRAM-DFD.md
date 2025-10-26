# Entity-Relationship Diagram & Data Flow Diagram
## Realtime Spotify Clone Application

---

## Entity-Relationship Diagram (ER)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                 SPOTIFY CLONE - ER DIAGRAM                               │
└─────────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐         ┌──────────────────┐         ┌──────────────────┐
│      USER        │         │     MESSAGE      │         │      ALBUM       │
├──────────────────┤         ├──────────────────┤         ├──────────────────┤
│ _id (ObjectId)   │◄──────┐ │ _id (ObjectId)   │         │ _id (ObjectId)   │
│ clerkId (String) │       │ │ senderId (String)│◄──────┐ │ title (String)   │
│ fullName (String)│       │ │ receiverId (Str) │       │ │ artist (String)  │
│ imageUrl (String)│       │ │ content (String) │       │ │ imageUrl (String)│
│ createdAt (Date) │       │ │ createdAt (Date) │       │ │ releaseYear (Int)│
│ updatedAt (Date) │       │ │ updatedAt (Date) │       │ │ songs[] (Array)  │◄─┐
└──────────────────┘       │ └──────────────────┘       │ │ createdAt (Date) │  │
         │                 │          │                 │ │ updatedAt (Date) │  │
         │                 │          │                 │ └──────────────────┘  │
         │                 │          │                 │                       │
         │  sends/receives │          │ references      │                       │
         │                 │          │                 │                       │
         └─────────────────┼──────────┘                 │                       │
                           │                            │                       │
                           │                            │                       │
                           │                            │       ┌──────────────────┐
                           │                            │       │      SONG        │
                           │                            │       ├──────────────────┤
                           │                            │       │ _id (ObjectId)   │
                           │                            │       │ title (String)   │
                           │                            │       │ artist (String)  │
                           │                            │       │ imageUrl (String)│
                           │                            │       │ audioUrl (String)│
                           │                            │       │ duration (Number)│
                           │                            │       │ albumId (Ref)    │◄─┘
                           │                            │       │ createdAt (Date) │
                           │                            │       │ updatedAt (Date) │
                           │                            │       └──────────────────┘
                           │                            │                │
                           │                            │                │
                           │                            └────────────────┘
                           │                            
                           │                            
┌──────────────────────────┴─────────────┐
│          EXTERNAL SERVICES             │
├────────────────────────────────────────┤
│  ┌─────────────────┐  ┌──────────────┐ │
│  │   CLERK AUTH    │  │  CLOUDINARY  │ │
│  ├─────────────────┤  ├──────────────┤ │
│  │ User Management │  │ File Storage │ │
│  │ Authentication  │  │ Image Upload │ │
│  │ Authorization   │  │ Audio Upload │ │
│  └─────────────────┘  └──────────────┘ │
└────────────────────────────────────────┘

RELATIONSHIPS:
==============
1. USER ←→ MESSAGE (One-to-Many): Users can send/receive multiple messages
   - senderId references User.clerkId
   - receiverId references User.clerkId

2. ALBUM ←→ SONG (One-to-Many): Albums contain multiple songs
   - Album.songs[] contains Song._id references
   - Song.albumId references Album._id (optional)

3. USER ←→ CLERK AUTH (One-to-One): Each user has unique Clerk authentication
   - User.clerkId maps to Clerk user ID

4. SONG/ALBUM ←→ CLOUDINARY (One-to-Many): Media files stored in Cloudinary
   - imageUrl and audioUrl point to Cloudinary resources

ENTITY ATTRIBUTES:
==================
USER:
- _id: Primary key (MongoDB ObjectId)
- clerkId: Unique identifier from Clerk Auth (String, Required, Unique)
- fullName: User's full name (String, Required)
- imageUrl: Profile picture URL (String, Required)
- createdAt/updatedAt: Timestamps

MESSAGE:
- _id: Primary key (MongoDB ObjectId)
- senderId: Sender's Clerk ID (String, Required)
- receiverId: Receiver's Clerk ID (String, Required)  
- content: Message text (String, Required)
- createdAt/updatedAt: Timestamps

ALBUM:
- _id: Primary key (MongoDB ObjectId)
- title: Album name (String, Required)
- artist: Artist name (String, Required)
- imageUrl: Album cover URL (String, Required)
- releaseYear: Year of release (Number, Required)
- songs: Array of Song references (ObjectId[], Ref: Song)
- createdAt/updatedAt: Timestamps

SONG:
- _id: Primary key (MongoDB ObjectId)
- title: Song name (String, Required)
- artist: Artist name (String, Required)
- imageUrl: Song cover URL (String, Required)
- audioUrl: Audio file URL (String, Required)
- duration: Song length in seconds (Number, Required)
- albumId: Album reference (ObjectId, Ref: Album, Optional)
- createdAt/updatedAt: Timestamps
```

---

## Data Flow Diagram (DFD) - Level 0 (Context Diagram)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           SPOTIFY CLONE - CONTEXT DIAGRAM (DFD LEVEL 0)                  │
└─────────────────────────────────────────────────────────────────────────────────────────┘

                                    ┌────────────────────┐
                                    │                    │
                          ┌─────────│   REGULAR USER     │◄────────┐
                          │         │                    │         │
                          │         └────────────────────┘         │
                          │                                        │
                          │ ┌─ Login/Register                       │ ┌─ Real-time Activity
                          │ ├─ Browse Music                         │ ├─ Friend Status
                          │ ├─ Play Songs                           │ ├─ Chat Messages
                          │ ├─ Create Playlists                     │ └─ Music Recommendations
                          │ ├─ Send Messages                        │
                          │ └─ View Friends Activity               │
                          ▼                                        │
            ┌─────────────────────────────────────────────────┐    │
            │                                                 │    │
            │            SPOTIFY CLONE                        │    │
            │         (MUSIC STREAMING &                      │    │
            │          SOCIAL PLATFORM)                       │    │
            │                                                 │    │
            └─────────────────────────────────────────────────┘    │
                          ▲                                        │
                          │ ┌─ Manage Songs                        │
                          │ ├─ Manage Albums                       │
                          │ ├─ Upload Media                        │
                          │ ├─ View Statistics                     │
                          │ └─ User Management                     │
                          │                                        │
                          │         ┌────────────────────┐         │
                          │         │                    │         │
                          └─────────│   ADMIN USER       │◄────────┘
                                    │                    │
                                    └────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                             EXTERNAL ENTITIES                                            │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                │
│  │ CLERK AUTH   │  │ CLOUDINARY   │  │  MONGODB     │  │  SOCKET.IO   │                │
│  │   SERVICE    │  │   SERVICE    │  │   DATABASE   │  │   SERVICE    │                │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘                │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram - Level 1 (System Overview)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           SPOTIFY CLONE - DFD LEVEL 1                                    │
└─────────────────────────────────────────────────────────────────────────────────────────┘

    ┌──────────┐                ┌─────────────────────────────────────────────────────┐
    │   USER   │                │                FRONTEND                             │
    └────┬─────┘                │                (React)                              │
         │                      └─────────────────┬───────────────────────────────────┘
         │ Interactions                           │ HTTP Requests/WebSocket
         │                                        │
         ▼                                        ▼
┌─────────────────┐              ┌─────────────────────────────────────────────────────┐
│  1. USER        │              │               BACKEND                               │
│  AUTHENTICATION │◄─────────────┤              (Node.js/Express)                     │
│  PROCESS        │              │                                                     │
└─────────────────┘              └─────────────────┬───────────────────────────────────┘
         │                                        │
         │ Auth Token                             │ Database Operations
         │                                        │ Real-time Events
         ▼                                        ▼
┌─────────────────┐              ┌─────────────────────────────────────────────────────┐
│  2. MUSIC       │              │                STORAGE                              │
│  MANAGEMENT     │◄─────────────┤                                                     │
│  SYSTEM         │              │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
└─────────────────┘              │  │   MONGODB   │  │ CLOUDINARY  │  │  SOCKET.IO  │ │
         │                       │  │  DATABASE   │  │FILE STORAGE │  │  REAL-TIME  │ │
         │                       │  └─────────────┘  └─────────────┘  └─────────────┘ │
         ▼                       └─────────────────────────────────────────────────────┘
┌─────────────────┐                              
│  3. REAL-TIME   │              
│  COMMUNICATION  │              
│  SYSTEM         │              
└─────────────────┘              
         │                       
         │                       
         ▼                       
┌─────────────────┐              
│  4. ADMIN       │              
│  MANAGEMENT     │              
│  SYSTEM         │              
└─────────────────┘              

PROCESS DESCRIPTIONS:
=====================

1. USER AUTHENTICATION PROCESS:
   - User registration/login via Clerk
   - JWT token generation and validation
   - User profile creation and management
   - Authorization middleware

2. MUSIC MANAGEMENT SYSTEM:
   - Browse songs and albums
   - Play music with audio controls
   - Create and manage playlists
   - Search and filter functionality
   - Music recommendation engine

3. REAL-TIME COMMUNICATION SYSTEM:
   - WebSocket connections for live chat
   - Real-time user activity tracking
   - Friend status and presence system
   - Live music activity sharing

4. ADMIN MANAGEMENT SYSTEM:
   - Upload songs and albums
   - Manage music catalog
   - User administration
   - System statistics and analytics
```

---

## Data Flow Diagram - Level 2 (Detailed Process Flows)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           SPOTIFY CLONE - DFD LEVEL 2                                    │
└─────────────────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────────────────────┐
│                            AUTHENTICATION FLOW                                           │
└───────────────────────────────────────────────────────────────────────────────────────────┘

USER ──┐
       │ Login Request
       ▼
    ┌─────────────┐        OAuth Flow        ┌─────────────┐
    │  2.1 CLERK  │◄──────────────────────┐  │  2.2 USER   │
    │AUTH SERVICE │                       │  │ VALIDATION  │
    └─────┬───────┘                       │  └─────┬───────┘
          │ User Data                     │        │ User Info
          ▼                               │        ▼
    ┌─────────────┐      User Created     │  ┌─────────────┐
    │ 2.3 CREATE  │──────────────────────┘   │ 2.4 JWT     │
    │USER PROFILE │                          │TOKEN GEN    │
    └─────┬───────┘                          └─────┬───────┘
          │ Profile Data                           │ Auth Token
          ▼                                        ▼
    ┌─────────────┐                          ┌─────────────┐
    │   MONGODB   │                          │   FRONTEND  │
    │  (Users)    │                          │(Auth Store) │
    └─────────────┘                          └─────────────┘

┌───────────────────────────────────────────────────────────────────────────────────────────┐
│                              MUSIC STREAMING FLOW                                        │
└───────────────────────────────────────────────────────────────────────────────────────────┘

USER ──┐
       │ Browse/Search
       ▼
    ┌─────────────┐     Query Request      ┌─────────────┐
    │ 3.1 MUSIC   │◄──────────────────────│ 3.2 SEARCH  │
    │   BROWSER   │                       │  & FILTER   │
    └─────┬───────┘                       └─────┬───────┘
          │ Song Selection                      │ Search Results
          ▼                                     ▼
    ┌─────────────┐     Audio Stream      ┌─────────────┐
    │ 3.3 AUDIO   │◄──────────────────────│ 3.4 CONTENT │
    │   PLAYER    │                       │  DELIVERY   │
    └─────┬───────┘                       └─────┬───────┘
          │ Play Status                         │ Media URLs
          ▼                                     ▼
    ┌─────────────┐                       ┌─────────────┐
    │ 3.5 ACTIVITY│                       │ CLOUDINARY  │
    │  TRACKER    │                       │(Audio/Image)│
    └─────┬───────┘                       └─────────────┘
          │ Activity Data
          ▼
    ┌─────────────┐
    │  SOCKET.IO  │
    │ (Real-time) │
    └─────────────┘

┌───────────────────────────────────────────────────────────────────────────────────────────┐
│                            REAL-TIME COMMUNICATION FLOW                                   │
└───────────────────────────────────────────────────────────────────────────────────────────┘

USER A ─┐                                                              ┌─ USER B
        │ Send Message                                                  │ Receive Message
        ▼                                                              ▼
    ┌─────────────┐    Message Data     ┌─────────────┐    Message     ┌─────────────┐
    │ 4.1 MESSAGE │────────────────────▶│ 4.2 MESSAGE │───────────────▶│ 4.3 MESSAGE │
    │   SENDER    │                     │  PROCESSOR  │                │  RECEIVER   │
    └─────────────┘                     └─────┬───────┘                └─────────────┘
                                              │ Store Message
                                              ▼
                                        ┌─────────────┐
                                        │   MONGODB   │
                                        │ (Messages)  │
                                        └─────┬───────┘
                                              │ Message History
                                              ▼
    ┌─────────────┐    Activity Update  ┌─────────────┐
    │ 4.4 USER    │◄────────────────────│ 4.5 FRIENDS │
    │ PRESENCE    │                     │  ACTIVITY   │
    └─────┬───────┘                     └─────────────┘
          │ Status Broadcast
          ▼
    ┌─────────────┐
    │  SOCKET.IO  │
    │(Broadcasting)│
    └─────────────┘

┌───────────────────────────────────────────────────────────────────────────────────────────┐
│                              ADMIN MANAGEMENT FLOW                                       │
└───────────────────────────────────────────────────────────────────────────────────────────┘

ADMIN ──┐
        │ Upload Content
        ▼
    ┌─────────────┐   File Upload      ┌─────────────┐   File Processing ┌─────────────┐
    │ 5.1 FILE    │────────────────────▶│ 5.2 MEDIA   │──────────────────▶│ 5.3 CONTENT │
    │  UPLOAD     │                     │ PROCESSOR   │                   │  VALIDATOR  │
    └─────────────┘                     └─────┬───────┘                   └─────┬───────┘
                                              │ Upload to Cloud                   │ Metadata
                                              ▼                                   ▼
                                        ┌─────────────┐                     ┌─────────────┐
                                        │ CLOUDINARY  │                     │ 5.4 DATABASE│
                                        │(File Store) │                     │   UPDATER   │
                                        └─────┬───────┘                     └─────┬───────┘
                                              │ File URLs                         │ Update DB
                                              └─────────────┬─────────────────────┘
                                                            ▼
                                                      ┌─────────────┐
                                                      │   MONGODB   │
                                                      │(Songs/Albums)│
                                                      └─────────────┘

DATA STORES:
============
D1: Users Database (MongoDB)
    - User profiles and authentication data
    - Clerk ID mappings

D2: Songs Database (MongoDB)
    - Song metadata and references
    - Audio file URLs from Cloudinary

D3: Albums Database (MongoDB)
    - Album information and song references
    - Cover image URLs from Cloudinary

D4: Messages Database (MongoDB)
    - Chat messages between users
    - Message timestamps and status

D5: Cloudinary Storage
    - Audio files (.mp3, .wav)
    - Image files (covers, profiles)

D6: Socket.IO Sessions
    - Active user connections
    - Real-time activity data
```

---

## System Architecture Components

### **Backend Technologies:**
- **Node.js/Express**: RESTful API server
- **Socket.IO**: Real-time communication
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **Clerk**: Authentication service
- **Cloudinary**: Media file storage
- **Express-fileupload**: File upload middleware

### **Frontend Technologies:**
- **React**: User interface library
- **TypeScript**: Type-safe JavaScript
- **Zustand**: State management
- **Tailwind CSS**: Styling framework
- **Vite**: Build tool and dev server

### **Key Features:**
1. **Authentication**: Clerk OAuth integration
2. **Music Streaming**: Audio playback with controls
3. **Real-time Chat**: WebSocket-based messaging
4. **Admin Panel**: Content management system
5. **Social Features**: Friend activity tracking
6. **File Upload**: Audio and image handling
7. **Search & Filter**: Music discovery
8. **Responsive Design**: Mobile-friendly interface

### **API Endpoints:**
```
Authentication:
POST /api/auth/callback

User Management:
GET /api/users
GET /api/users/messages/:userId

Music:
GET /api/songs
GET /api/songs/featured
GET /api/songs/made-for-you
GET /api/songs/trending

Albums:
GET /api/albums
GET /api/albums/:id

Admin:
POST /api/admin/songs
DELETE /api/admin/songs/:id
POST /api/admin/albums
DELETE /api/admin/albums/:id

Statistics:
GET /api/stats
```

### **WebSocket Events:**
```
Connection Events:
- user_connected
- user_disconnected
- users_online

Activity Events:
- update_activity
- activity_updated
- activities

Messaging Events:
- send_message
- receive_message
- message_sent
- message_error
```

This architecture provides a scalable, real-time music streaming platform with social features, efficient data management, and comprehensive admin controls.