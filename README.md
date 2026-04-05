# Thumblify

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)

Thumblify is an AI-powered thumbnail generator that helps content creators, YouTubers, and marketers create eye-catching video thumbnails in seconds. Using advanced Google Gemini AI, Thumblify analyzes your video content and generates high-converting thumbnails with professional designs.

![Thumblify Preview](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Thumblify+AI+Thumbnail+Generator)

## ✨ Features

- **AI-Powered Generation**: Leverage Google Gemini 2.5 Flash Image model for stunning thumbnail creation
- **Multiple Styles**: Choose from Bold & Graphic, Tech/Futuristic, Minimalist, Photorealistic, and Illustration styles
- **Color Schemes**: 8+ predefined color palettes including vibrant, sunset, forest, neon, and more
- **Flexible Aspect Ratios**: Support for 16:9, 1:1, 9:16, and custom ratios
- **Smart Analysis**: AI analyzes video content to suggest optimal thumbnail concepts
- **High CTR Designs**: Templates optimized for maximum click-through rates
- **Cloud Storage**: Secure image storage with Cloudinary integration
- **User Authentication**: Secure user accounts with session management
- **Responsive Design**: Modern, mobile-friendly interface built with React and Tailwind CSS
- **Real-time Preview**: Instant preview of generated thumbnails
- **Pricing Tiers**: Basic, Pro, and Enterprise plans with different feature sets

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Motion** - Animation library for smooth interactions
- **Lenis** - Smooth scrolling library
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe backend code
- **MongoDB** - NoSQL database with Mongoose ODM
- **Google Gemini AI** - AI image generation
- **Cloudinary** - Image storage and optimization
- **Express Session** - Session management
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** database (local or cloud instance)
- **Google AI API Key** (for Gemini AI)
- **Cloudinary Account** (for image storage)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/thumblify.git
   cd thumblify
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Setup**

   Create `.env` file in the `server` directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/thumblify
   SESSION_SECRET=your-super-secret-session-key
   GOOGLE_AI_API_KEY=your-google-ai-api-key
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

5. **Start the development servers**

   **Terminal 1 - Start the backend server:**
   ```bash
   cd server
   npm run server
   ```

   **Terminal 2 - Start the frontend client:**
   ```bash
   cd client
   npm run dev
   ```

6. **Access the application**

   Open your browser and navigate to `http://localhost:5173`

## 📖 Usage

### For Content Creators

1. **Sign Up/Login**: Create an account or log in to access the thumbnail generator
2. **Enter Video Details**: Provide your video title and any additional context
3. **Customize Options**:
   - Select aspect ratio (16:9, 1:1, 9:16)
   - Choose a style (Bold & Graphic, Minimalist, etc.)
   - Pick a color scheme
   - Add custom prompts for specific requirements
4. **Generate**: Click generate and watch AI create your thumbnail
5. **Download/Edit**: Download the thumbnail or make further edits

### API Usage (Enterprise)

For enterprise users, Thumblify provides API access for programmatic thumbnail generation:

```javascript
// Example API call
const response = await fetch('/api/thumbnails/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-api-token'
  },
  body: JSON.stringify({
    title: 'My Amazing Video',
    style: 'Bold & Graphic',
    aspect_ratio: '16:9',
    color_scheme: 'vibrant'
  })
});
```

## 🏗️ Project Structure

```
thumblify/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── sections/       # Landing page sections
│   │   ├── data/           # Static data files
│   │   ├── configs/        # API configuration
│   │   └── assets/         # Static assets
│   ├── package.json
│   └── vite.config.ts
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middlewares/        # Custom middlewares
│   ├── configs/            # Database and AI configs
│   ├── package.json
│   └── server.ts
└── README.md
```

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Thumbnails
- `POST /api/thumbnails/generate` - Generate new thumbnail
- `GET /api/thumbnails/:id` - Get thumbnail by ID
- `GET /api/thumbnails/user/:userId` - Get user's thumbnails

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## 💰 Pricing

### Basic Plan ($29/month)
- 20 AI Thumbnails per month
- Basic Templates
- Standard Resolution
- Email Support

### Pro Plan ($79/month) - Most Popular
- Unlimited AI Thumbnails
- Premium Templates
- 4K Resolution
- A/B Testing Tools
- Priority Support
- Custom Fonts
- Brand Kit Analysis

### Enterprise Plan ($199/month)
- Everything in Pro
- API Access
- Team Collaboration
- Custom Branding
- Dedicated Account Manager

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Use TypeScript for type safety
- Follow ESLint configuration
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for powering the image generation
- **Cloudinary** for reliable image storage
- **Tailwind CSS** for the beautiful UI components
- **React Community** for the amazing ecosystem

## 📞 Support

- **Email**: support@thumblify.com
- **Documentation**: [docs.thumblify.com](https://docs.thumblify.com)
- **Discord**: [Join our community](https://discord.gg/thumblify)

---

**Made with ❤️ by the Thumblify team**</content>
<parameter name="filePath">c:\Users\HP\Desktop\thumblify\README.md