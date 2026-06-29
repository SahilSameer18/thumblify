# Thumblify

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)

Thumblify is an AI-powered thumbnail generator that helps content creators, YouTubers, and marketers create eye-catching video thumbnails in seconds. Using advanced Google Gemini AI, Thumblify analyzes your video content and generates high-converting thumbnails with professional designs.

## ✨ Features

- **AI-Powered Generation**: Leverage Google Gemini 2.5 Flash Image model for stunning thumbnail creation
- **Multiple Styles**: Choose from Bold & Graphic, Tech/Futuristic, Minimalist, Photorealistic, and Illustration styles
- **Color Schemes**: 8 predefined color palettes including vibrant, sunset, forest, neon, and more
- **Flexible Aspect Ratios**: Support for 16:9, 1:1, and 9:16
- **YouTube Preview**: See how your thumbnail looks in a real YouTube feed
- **Cloud Storage**: Secure image storage with Cloudinary integration
- **User Authentication**: Session-based auth with MongoDB persistent sessions
- **Responsive Design**: Modern, mobile-friendly interface built with React and Tailwind CSS
- **Real-time Preview**: Instant preview of generated thumbnails
- **My Generations**: Manage, download, and delete all your past thumbnails

## 🚀 Tech Stack

### Frontend
- **React 19** — Modern React with hooks
- **TypeScript** — Type-safe JavaScript
- **Vite** — Fast build tool and dev server
- **Tailwind CSS v4** — Utility-first CSS
- **React Router v7** — Client-side routing
- **Motion** — Animation library
- **Lenis** — Smooth scrolling
- **Axios** — HTTP client
- **Lucide React** — Icon library
- **React Hot Toast** — Toast notifications

### Backend
- **Node.js + Express.js** — Web server
- **TypeScript** — Type-safe backend
- **MongoDB + Mongoose** — Database with ODM
- **Google Gemini AI (`@google/genai`)** — AI image generation
- **Cloudinary** — Image storage and CDN
- **Express Session + connect-mongo** — Session management
- **bcrypt** — Password hashing

## 📋 Prerequisites

- **Node.js** v18+
- **npm** package manager
- **MongoDB Atlas** account (or local MongoDB)
- **Google AI API Key** — from [Google AI Studio](https://aistudio.google.com/)
- **Cloudinary Account** — for image storage

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/SahilSameer18/thumblify.git
cd thumblify
```

### 2. Install server dependencies
```bash
cd server
npm install
```

### 3. Install client dependencies
```bash
cd ../client
npm install
```

### 4. Environment Setup

Create a `.env` file in the `server/` directory:
```env
PORT=3000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/thumblify
SESSION_SECRET=your-super-secret-session-key
GEMINI_API_KEY=your-google-ai-api-key
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
```

Create a `.env` file in the `client/` directory:
```env
VITE_BASE_URL=http://localhost:3000
```

### 5. Start development servers

**Terminal 1 — Backend:**
```bash
cd server
npm run server
```

**Terminal 2 — Frontend:**
```bash
cd client
npm run dev
```

### 6. Open in browser
Navigate to `http://localhost:5173`

## 📖 Usage

1. **Sign Up / Login** — Create an account to access the generator
2. **Enter Video Title** — Type your video topic or title
3. **Customize Options**:
   - Aspect Ratio: 16:9, 1:1, or 9:16
   - Style: Bold & Graphic, Minimalist, Photorealistic, Illustrated, Tech/Futuristic
   - Color Scheme: Vibrant, Sunset, Ocean, Forest, Purple, Monochrome, Neon, Pastel
   - Additional Prompts: extra context for the AI
4. **Generate** — Click Generate and wait ~15–30 seconds for AI to create your thumbnail
5. **Preview** — See how it looks in a YouTube feed via the YouTube Preview
6. **Download** — Download the thumbnail directly from the preview

## 🏗️ Project Structure

```
thumblify/
├── client/                  # React frontend (Vite + TypeScript)
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # Generate, MyGeneration, YtPreview, HomePage
│       ├── sections/        # Landing page sections
│       ├── context/         # Auth context (session-based)
│       ├── configs/         # Axios API config
│       ├── data/            # Static data
│       └── assests/         # Images and type definitions
└── server/                  # Express backend (TypeScript)
    ├── controllers/         # Auth, Thumbnail, User controllers
    ├── models/              # Mongoose models (User, Thumbnail)
    ├── routes/              # Auth, Thumbnail, User routes
    ├── middlewares/         # Auth protect middleware
    ├── configs/             # DB, AI, Cloudinary configs
    └── server.ts            # Entry point
```

## 🎯 API Endpoints

### Auth
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| GET  | `/api/auth/verify` | Verify session / get current user |

### Thumbnails
| Method | Route | Description |
|--------|-------|-------------|
| POST   | `/api/thumbnail/generate` | Generate a new AI thumbnail |
| DELETE | `/api/thumbnail/delete/:id` | Delete a thumbnail |

### User
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/user/thumbnails` | Get all thumbnails for logged-in user |
| GET | `/api/user/thumbnails/:id` | Get a single thumbnail by ID |

## 💰 Pricing

| Plan | Price | Thumbnails | Resolution |
|------|-------|------------|------------|
| Basic | $29/mo | 20/month | Standard |
| Pro ⭐ | $79/mo | Unlimited | 4K |
| Enterprise | $199/mo | Unlimited | 4K + API |

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ by the Sahil Sameer**