# Vocals - AI-Powered Music Player

An intelligent, AI-driven music player that seamlessly integrates offline playback, cloud storage, AI recommendations, and public API streaming. Built with Next.js, TailwindCSS, and cutting-edge AI technologies.

## Features

- 🎵 Multi-Source Music Playback (Local, Cloud, Public APIs)
- 🤖 AI-Powered Personalization & Recommendations
- 🎤 Real-Time Lyrics & AI-Enhanced Metadata
- 🎨 Modern UI with Fluid Animations
- 👥 Social & Collaborative Features
- 📱 Cross-Device Compatibility
- 🔌 Offline Support

## Tech Stack

- **Frontend**: Next.js, TailwindCSS, Framer Motion, DaisyUI/Radix UI
- **Backend**: Node.js/Express
- **AI/ML**: TensorFlow.js
- **Cloud**: AWS S3, Supabase
- **APIs**: Various Music Streaming APIs (Audiomack, SoundCloud, etc.)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file with the following variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
OPENAI_API_KEY=your_openai_key
AWS_ACCESS_KEY_ID=your_aws_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret
```

## License

MIT
