# Glowing Effect Component

This component provides an interactive glowing border effect that follows the user's mouse cursor. It's based on the Aceternity UI design pattern.

## Installation

The following dependencies have been installed:

```bash
npm install motion --legacy-peer-deps
```

## Component Location

- Component: `/components/ui/glowing-effect.jsx`
- Demo: `/components/glowing-effect-demo.jsx`

## Usage

### Basic Usage

```jsx
import { GlowingEffect } from "@/components/ui/glowing-effect";

function MyCard() {
  return (
    <div className="relative h-64 rounded-xl border">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative p-6">
        Your content here
      </div>
    </div>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `blur` | `number` | `0` | Amount of blur effect in pixels |
| `inactiveZone` | `number` | `0.7` | Zone where effect is inactive (0-1) |
| `proximity` | `number` | `0` | Distance from element where effect activates |
| `spread` | `number` | `20` | Spread of the glowing effect |
| `variant` | `"default" \| "white"` | `"default"` | Color variant of the effect |
| `glow` | `boolean` | `false` | Whether to show the glow effect |
| `className` | `string` | `undefined` | Additional CSS classes |
| `disabled` | `boolean` | `true` | Whether the effect is disabled |
| `movementDuration` | `number` | `2` | Duration of the movement animation |
| `borderWidth` | `number` | `1` | Width of the glowing border |

### Demo Component

A complete demo is available at `/components/glowing-effect-demo.jsx` which shows a grid of cards with the glowing effect. This demo has been integrated into the landing page.

## Features

- **Interactive**: Effect follows the mouse cursor
- **Customizable**: Multiple props to control appearance and behavior
- **Performance Optimized**: Uses `requestAnimationFrame` for smooth animations
- **Responsive**: Works on all screen sizes
- **Dark Mode Compatible**: Supports both light and dark themes

## Important Notes

### Project Structure

This project uses:
- ✅ shadcn/ui component structure
- ✅ Tailwind CSS for styling
- ✅ JavaScript (not TypeScript)
- ✅ lucide-react for icons
- ✅ Next.js 15 with App Router

### Component Directory

The component is placed in `/components/ui/` which is the standard location for shadcn/ui components as defined in `components.json`.

## Demo

To see the demo:

1. Ensure Clerk environment variables are set up (see main README)
2. Run the development server: `npm run dev`
3. Navigate to `http://localhost:3000`
4. Scroll to the "Beautiful UI Components" section

The demo shows 5 interactive cards arranged in a responsive grid. Hover over any card to see the glowing effect in action.

## Troubleshooting

### Effect not showing

1. Ensure `disabled={false}` is set
2. Check that `glow={true}` is set
3. Verify the parent container has `position: relative`

### Performance issues

1. Reduce `movementDuration` for faster animations
2. Increase `inactiveZone` to reduce the active area
3. Consider using `disabled={true}` on mobile devices

## Credits

Based on the Aceternity UI design pattern from https://21st.dev/community/aceternity
