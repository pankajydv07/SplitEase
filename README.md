# SplitEase

A full-stack expense splitting application built with modern web technologies. SplitEase helps you manage shared expenses with friends, roommates, or groups by tracking who owes what and simplifying settlements.

## Features

- 💰 Track shared expenses and split bills
- 👥 Manage groups and participants
- 📊 View expense history and analytics
- 🔐 Secure authentication
- 📧 Email notifications
- 🤖 AI-powered expense management
- ✨ Interactive UI with glowing effect components

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS, Shadcn UI
- **Backend**: Convex (real-time database and backend)
- **Authentication**: Clerk
- **Email**: Resend
- **AI**: Google Gemini
- **Background Jobs**: Inngest

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pankajydv07/SplitEase.git
cd SplitEase
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

CLERK_JWT_ISSUER_DOMAIN=

RESEND_API_KEY=

GEMINI_API_KEY=
```

4. Set up Convex:
```bash
npx convex dev
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## UI Components

### Glowing Effect Component

An interactive glowing border effect component based on Aceternity UI design patterns. See [docs/GLOWING_EFFECT.md](docs/GLOWING_EFFECT.md) for detailed usage instructions.

**Quick Usage:**
```jsx
import { GlowingEffect } from "@/components/ui/glowing-effect";

<div className="relative h-64 rounded-xl border">
  <GlowingEffect
    spread={40}
    glow={true}
    disabled={false}
    proximity={64}
  />
  <div className="relative p-6">
    Your content here
  </div>
</div>
```

The demo is integrated into the landing page at the "Beautiful UI Components" section.

## License

This project is open source and available under the MIT License.
