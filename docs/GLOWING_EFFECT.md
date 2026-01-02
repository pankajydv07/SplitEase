# Glowing Effect Component

This component provides an interactive glowing border effect that follows the user's mouse cursor. It's based on the Aceternity UI design pattern and is integrated across the entire SplitEase website.

## Installation

The following dependencies have been installed:

```bash
npm install motion --legacy-peer-deps
```

## Component Location

- **Core Component**: `/components/ui/glowing-effect.jsx` - Base glowing effect logic
- **Wrapper Component**: `/components/ui/glowing-card.jsx` - Convenient wrapper for cards
- **Demo Component**: `/components/glowing-effect-demo.jsx` - Demo showcase (optional)

## Usage

### Using GlowingCard (Recommended)

The easiest way to add the glowing effect to cards:

```jsx
import { GlowingCard } from "@/components/ui/glowing-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function MyComponent() {
  return (
    <GlowingCard>
      <CardHeader>
        <CardTitle>Your Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        Your card content here
      </CardContent>
    </GlowingCard>
  );
}
```

### Customizing GlowingCard

```jsx
<GlowingCard
  glowSpread={40}        // How wide the glow spreads (default: 40)
  glowProximity={64}     // Distance from card to activate (default: 64)
  glowInactiveZone={0.3} // Center zone without effect (default: 0.3)
  glowBorderWidth={2}    // Width of glowing border (default: 2)
  enableGlow={true}      // Enable/disable effect (default: true)
>
  {/* Card content */}
</GlowingCard>
```

### Using GlowingEffect Directly

For custom implementations:

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
        inactiveZone={0.3}
        borderWidth={2}
      />
      <div className="relative p-6">
        Your content here
      </div>
    </div>
  );
}
```

### Props

#### GlowingCard Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `glowSpread` | `number` | `40` | How wide the glow spreads |
| `glowProximity` | `number` | `64` | Distance from card to activate effect |
| `glowInactiveZone` | `number` | `0.3` | Center zone without effect (0-1) |
| `glowBorderWidth` | `number` | `2` | Width of the glowing border |
| `enableGlow` | `boolean` | `true` | Enable or disable the effect |
| `className` | `string` | `undefined` | Additional CSS classes |
| All Card props | - | - | Passes through all standard Card props |

#### GlowingEffect Props

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

## Where It's Used

The glowing effect is integrated throughout the SplitEase website:

### Dashboard
- **Balance Overview Cards**: Total Balance, You are owed, You owe
- **Expense Summary Card**: Chart showing monthly spending
- **Balance Details Card**: Detailed breakdown of balances
- **Groups Card**: List of user's groups

### Landing Page
- **Feature Cards** (6): All cards in "Everything you need to split expenses" section
- **Testimonial Cards** (3): All cards in "What our users are saying" section

### Person Detail Pages
- **Balance Card**: Shows amount owed/owing with a specific person

### Group Detail Pages
- **Group Balances Card**: Shows balances within the group
- **Members Card**: Displays group members

All these cards respond to mouse hover with an interactive glowing border effect.

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

### GlowingCard Wrapper

The `GlowingCard` component is a convenient wrapper that combines the regular `Card` component with the `GlowingEffect`. This makes it easy to add the glowing effect to any card without manually managing the positioning and effect props.

## Live Examples

To see the glowing effect in action:

1. **Dashboard**: Navigate to `/dashboard` to see interactive cards with glowing borders
2. **Landing Page**: Visit the home page to see feature and testimonial cards with the effect
3. **Person Page**: View any person detail page to see the balance card with glowing effect
4. **Group Page**: View any group detail page to see group cards with the effect

Simply hover your mouse near any card to see the interactive glowing border that follows your cursor.

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
