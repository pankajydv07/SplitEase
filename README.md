# SplitEase

A full-stack expense splitting application built with modern web technologies. SplitEase helps you manage shared expenses with friends, roommates, or groups by tracking who owes what and simplifying settlements.

## Features

- 💰 Track shared expenses and split bills
- 👥 Manage groups and participants
- 📊 View expense history and analytics
- 🔐 Secure authentication
- 📧 Email notifications
- 🤖 AI-powered expense management
- ✨ Interactive glowing UI effects across the entire website

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

### Glowing Effect

An interactive glowing border effect is applied to cards across the entire website. The effect follows your mouse cursor, creating an engaging and modern user experience.

**Integrated Throughout:**
- Dashboard balance and summary cards
- Landing page feature and testimonial cards  
- Person detail balance cards
- Group detail cards

**Quick Usage:**
```jsx
import { GlowingCard } from "@/components/ui/glowing-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<GlowingCard>
  <CardHeader>
    <CardTitle>Your Title</CardTitle>
  </CardHeader>
  <CardContent>
    Your content
  </CardContent>
</GlowingCard>
```

See [docs/GLOWING_EFFECT.md](docs/GLOWING_EFFECT.md) for detailed usage instructions and customization options.

## License

This project is open source and available under the MIT License.
