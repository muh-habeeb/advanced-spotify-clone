# 📚 API Documentation

Complete API reference for the Realtime Spotify Clone backend.

## Base URL
- **Development**: `http://localhost:5000/api`
- **Production**: `https://your-backend-domain.com/api`

## Authentication

All protected endpoints require a Bearer token in the Authorization header:

```http
Authorization: Bearer <clerk_jwt_token>
```

### Authentication Flow
1. Frontend authenticates with Clerk
2. Clerk provides JWT token
3. Token sent with API requests
4. Backend validates with Clerk

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "statusCode": 400
}
```

## Endpoints

### Authentication

#### Check Authentication Status
```http
GET /auth/callback
```

**Headers:**
- `Authorization: Bearer <token>` (required)

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "name": "User Name"
    }
  }
}
```

---

### Songs

#### Get All Songs
```http
GET /songs
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "song_id",
      "title": "Song Title",
      "artist": "Artist Name",
      "audioUrl": "https://cloudinary.com/audio.mp3",
      "imageUrl": "https://cloudinary.com/image.jpg",
      "duration": 180,
      "albumId": "album_id",
      "createdAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
```

#### Get Featured Songs
```http
GET /songs/featured
```

Returns a curated list of featured songs.

#### Get Trending Songs
```http
GET /songs/trending
```

Returns currently trending songs based on play counts.

#### Get Made For You Songs
```http
GET /songs/made-for-you
```

**Headers:**
- `Authorization: Bearer <token>` (required)

Returns personalized song recommendations.

---

### Albums

#### Get All Albums
```http
GET /albums
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "album_id",
      "title": "Album Title",
      "artist": "Artist Name",
      "imageUrl": "https://cloudinary.com/album-cover.jpg",
      "releaseYear": 2023,
      "songs": ["song_id_1", "song_id_2"],
      "createdAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
```

#### Get Album by ID
```http
GET /albums/:id
```

**Parameters:**
- `id` (string): Album ID

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "album_id",
    "title": "Album Title",
    "artist": "Artist Name",
    "imageUrl": "https://cloudinary.com/album-cover.jpg",
    "releaseYear": 2023,
    "songs": [
      {
        "_id": "song_id",
        "title": "Song Title",
        "artist": "Artist Name",
        "audioUrl": "https://cloudinary.com/audio.mp3",
        "duration": 180
      }
    ]
  }
}
```

#### Create Album (Admin Only)
```http
POST /albums
```

**Headers:**
- `Authorization: Bearer <admin_token>` (required)
- `Content-Type: multipart/form-data`

**Body:**
```
title: Album Title
artist: Artist Name
releaseYear: 2023
imageFile: <image_file>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "new_album_id",
    "title": "Album Title",
    "artist": "Artist Name",
    "imageUrl": "https://cloudinary.com/new-album-cover.jpg",
    "releaseYear": 2023
  }
}
```

---

### Admin

#### Check Admin Status
```http
GET /admin/check
```

**Headers:**
- `Authorization: Bearer <token>` (required)

**Response:**
```json
{
  "success": true,
  "data": {
    "admin": true
  }
}
```

#### Create Song (Admin Only)
```http
POST /admin/songs
```

**Headers:**
- `Authorization: Bearer <admin_token>` (required)
- `Content-Type: multipart/form-data`

**Body:**
```
title: Song Title
artist: Artist Name
albumId: album_id (optional)
duration: 180
audioFile: <audio_file>
imageFile: <image_file>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "new_song_id",
    "title": "Song Title",
    "artist": "Artist Name",
    "audioUrl": "https://cloudinary.com/new-audio.mp3",
    "imageUrl": "https://cloudinary.com/new-image.jpg",
    "duration": 180,
    "albumId": "album_id"
  }
}
```

#### Delete Song (Admin Only)
```http
DELETE /admin/songs/:id
```

**Headers:**
- `Authorization: Bearer <admin_token>` (required)

**Parameters:**
- `id` (string): Song ID

#### Create Album (Admin Only)
```http
POST /admin/albums
```

**Headers:**
- `Authorization: Bearer <admin_token>` (required)
- `Content-Type: multipart/form-data`

**Body:**
```
title: Album Title
artist: Artist Name
releaseYear: 2023
imageFile: <image_file>
```

#### Delete Album (Admin Only)
```http
DELETE /admin/albums/:id
```

**Headers:**
- `Authorization: Bearer <admin_token>` (required)

**Parameters:**
- `id` (string): Album ID

---

### Statistics

#### Get Platform Statistics (Admin Only)
```http
GET /stats
```

**Headers:**
- `Authorization: Bearer <admin_token>` (required)

**Response:**
```json
{
  "success": true,
  "data": {
    "totalSongs": 150,
    "totalAlbums": 25,
    "totalUsers": 1000,
    "totalArtists": 75
  }
}
```

---

### Users

#### Get All Users
```http
GET /users
```

**Headers:**
- `Authorization: Bearer <token>` (required)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "user_id",
      "clerkId": "clerk_user_id",
      "fullName": "User Name",
      "imageUrl": "https://images.clerk.dev/user.jpg"
    }
  ]
}
```

#### Get Messages with User
```http
GET /users/messages/:userId
```

**Headers:**
- `Authorization: Bearer <token>` (required)

**Parameters:**
- `userId` (string): Clerk User ID

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "message_id",
      "senderId": "sender_clerk_id",
      "receiverId": "receiver_clerk_id",
      "content": "Message content",
      "createdAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
```

---

## Socket.io Events

### Client to Server Events

#### User Connected
```javascript
socket.emit('user_connected', userId);
```

#### Send Message
```javascript
socket.emit('send_message', {
  senderId: 'sender_id',
  receiverId: 'receiver_id',
  content: 'Message content'
});
```

#### Update Activity
```javascript
socket.emit('update_activity', {
  userId: 'user_id',
  activity: 'Playing Song Title by Artist'
});
```

### Server to Client Events

#### Users Online
```javascript
socket.on('users_online', (users) => {
  // users: string[] - Array of online user IDs
});
```

#### User Connected
```javascript
socket.on('user_connected', (userId) => {
  // userId: string - ID of newly connected user
});
```

#### User Disconnected
```javascript
socket.on('user_disconnected', (userId) => {
  // userId: string - ID of disconnected user
});
```

#### Receive Message
```javascript
socket.on('receive_message', (message) => {
  // message: Message object
});
```

#### Message Sent
```javascript
socket.on('message_sent', (message) => {
  // message: Message object - Confirmation of sent message
});
```

#### Activity Updated
```javascript
socket.on('activity_updated', ({ userId, activity }) => {
  // userId: string
  // activity: string - Current user activity
});
```

#### Activities
```javascript
socket.on('activities', (activities) => {
  // activities: [string, string][] - Array of [userId, activity] pairs
});
```

---

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid request parameters |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Admin access required |
| 404 | Not Found - Resource not found |
| 409 | Conflict - Resource already exists |
| 422 | Unprocessable Entity - Validation error |
| 500 | Internal Server Error - Server error |

---

## Rate Limiting

### Current Limits
- **General API**: 100 requests per minute per IP
- **File Upload**: 10 uploads per minute per user
- **Messages**: 50 messages per minute per user

### Headers
Rate limit information is included in response headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

---

## File Upload Specifications

### Audio Files
- **Supported formats**: MP3, WAV, M4A
- **Maximum size**: 10MB
- **Quality**: 128kbps minimum recommended

### Image Files
- **Supported formats**: JPEG, PNG, WebP
- **Maximum size**: 5MB
- **Dimensions**: 1000x1000 minimum for album covers

### Upload Process
1. Files are temporarily stored in server `/tmp` directory
2. Files are uploaded to Cloudinary
3. URLs are returned and stored in database
4. Temporary files are cleaned up via cron job

---

## Development

### Running Locally
```bash
cd backend
npm install
npm run dev
```

### Environment Variables
See [Installation Guide](../README.md#installation) for required environment variables.

### Testing
```bash
# Run tests (when implemented)
npm test

# Test specific endpoint
curl -X GET http://localhost:5000/api/songs \
  -H "Authorization: Bearer <token>"
```

### Database Seeding
```bash
# Seed albums
npm run seed:albums

# Seed songs
npm run seed:songs
```

This API documentation provides comprehensive information for integrating with the Realtime Spotify Clone backend.


<CENTER> THIS FILE IS GENERATED BY AI</CENTER>
