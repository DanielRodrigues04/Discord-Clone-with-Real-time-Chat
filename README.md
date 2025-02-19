# Discord Clone

A real-time chat application built with React, TypeScript, and Supabase, featuring a Discord-like interface and real-time messaging capabilities.

![Discord Clone Screenshot](https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1200)

## Features

- 🔐 **Authentication System**
  - Email/Password sign up and sign in
  - Secure session management
  - Protected routes

- 💬 **Real-time Chat**
  - Instant message delivery
  - Message history
  - Channel-based conversations
  - Read receipts

- 🎨 **Modern UI**
  - Discord-inspired design
  - Dark theme
  - Responsive layout
  - Clean and intuitive interface

- 👥 **User Profiles**
  - User avatars
  - Online status
  - Profile settings

## Tech Stack

- **Frontend**
  - React
  - TypeScript
  - Tailwind CSS
  - Lucide Icons
  - Zustand (State Management)

- **Backend**
  - Supabase
    - Real-time subscriptions
    - Authentication
    - PostgreSQL database
    - Row Level Security

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd discord-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Database Setup

The application requires the following tables in Supabase:

- `profiles`: User profiles and settings
- `channels`: Chat channels
- `messages`: Chat messages

The database schema includes:
- Foreign key relationships
- Row Level Security (RLS) policies
- Real-time subscription support

## Development

### Project Structure

```
discord-clone/
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utility functions and configurations
│   ├── store/         # State management
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
└── supabase/         # Database migrations and configurations
```

### Key Components

- `Auth.tsx`: Handles user authentication
- `Sidebar.tsx`: Channel list and navigation
- `Chat.tsx`: Real-time chat interface
- `useAuthStore.ts`: Authentication state management

### Best Practices

1. **Code Style**
   - Use TypeScript for type safety
   - Follow ESLint configuration
   - Use Prettier for code formatting

2. **State Management**
   - Use Zustand for global state
   - Keep component state local when possible
   - Implement proper error handling

3. **Security**
   - Implement Row Level Security
   - Validate user input
   - Handle authentication properly

4. **Performance**
   - Optimize re-renders
   - Implement proper loading states
   - Use proper caching strategies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Discord for inspiration
- Supabase for backend services
- React community for tools and libraries
