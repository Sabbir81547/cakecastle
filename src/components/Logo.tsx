import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  inverted?: boolean;
}

export default function Logo({ size = 'md', showText = true, className = '', inverted = false }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-10 h-10', text: 'text-xl sm:text-2xl' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl sm:text-3xl' },
  };

  // Color classes based on inverted state
  const primaryColor = inverted ? 'hsl(var(--background))' : 'hsl(var(--primary))';
  const textColor = inverted ? 'text-background' : 'text-primary';
  const subtextColor = inverted ? 'text-background/70' : 'text-muted-foreground';

  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Castle Icon */}
      <div className={`relative ${sizes[size].icon}`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Castle base */}
          <rect 
            x="15" 
            y="45" 
            width="70" 
            height="50" 
            rx="3" 
            fill={primaryColor}
          />
          
          {/* Castle towers */}
          <rect 
            x="10" 
            y="30" 
            width="20" 
            height="65" 
            rx="2" 
            fill={primaryColor}
          />
          <rect 
            x="70" 
            y="30" 
            width="20" 
            height="65" 
            rx="2" 
            fill={primaryColor}
          />
          
          {/* Center tower */}
          <rect 
            x="35" 
            y="20" 
            width="30" 
            height="75" 
            rx="2" 
            fill={primaryColor}
          />
          
          {/* Tower tops - crenellations */}
          <rect x="8" y="22" width="8" height="12" rx="1" fill={primaryColor} />
          <rect x="24" y="22" width="8" height="12" rx="1" fill={primaryColor} />
          <rect x="68" y="22" width="8" height="12" rx="1" fill={primaryColor} />
          <rect x="84" y="22" width="8" height="12" rx="1" fill={primaryColor} />
          
          {/* Center tower top */}
          <rect x="33" y="12" width="10" height="12" rx="1" fill={primaryColor} />
          <rect x="57" y="12" width="10" height="12" rx="1" fill={primaryColor} />
          
          {/* Crown/tiara on top - representing cake decoration */}
          <path 
            d="M45 8 L50 2 L55 8" 
            stroke="hsl(var(--accent))" 
            strokeWidth="3" 
            strokeLinecap="round" 
            fill="none"
          />
          
          {/* Door */}
          <rect 
            x="40" 
            y="65" 
            width="20" 
            height="30" 
            rx="10" 
            fill={inverted ? primaryColor : 'hsl(var(--background))'}
            opacity={inverted ? 0.3 : 1}
          />
          
          {/* Windows */}
          <circle cx="20" cy="55" r="5" fill={inverted ? primaryColor : 'hsl(var(--background))'} opacity={inverted ? 0.3 : 1} />
          <circle cx="80" cy="55" r="5" fill={inverted ? primaryColor : 'hsl(var(--background))'} opacity={inverted ? 0.3 : 1} />
          <circle cx="50" cy="45" r="6" fill={inverted ? primaryColor : 'hsl(var(--background))'} opacity={inverted ? 0.3 : 1} />
          
          {/* Cake slice accent on door */}
          <path 
            d="M45 72 L50 65 L55 72 Z" 
            fill="hsl(var(--accent))"
          />
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span 
            className={`font-serif font-bold ${textColor} ${sizes[size].text}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cake Castle
          </span>
          <span className={`text-[10px] sm:text-xs ${subtextColor} tracking-wider uppercase`}>
            Beanibazar
          </span>
        </div>
      )}
    </motion.div>
  );
}
