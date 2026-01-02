"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function GlowingCard({ 
  className, 
  children,
  glowSpread = 40,
  glowProximity = 64,
  glowInactiveZone = 0.3,
  glowBorderWidth = 2,
  enableGlow = true,
  ...props 
}) {
  return (
    <Card className={cn("relative", className)} {...props}>
      {enableGlow && (
        <GlowingEffect
          spread={glowSpread}
          glow={true}
          disabled={false}
          proximity={glowProximity}
          inactiveZone={glowInactiveZone}
          borderWidth={glowBorderWidth}
        />
      )}
      {children}
    </Card>
  );
}
