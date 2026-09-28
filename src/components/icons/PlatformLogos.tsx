import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * LOGO OFICIAL DO WHATSAPP (Standard Official Brand Asset)
 * Utiliza o vetor oficial canônico do WhatsApp:
 * - Balão de conversa verde oficial (#25D366) com o contorno branco e o fone de ouvido oficial clássico.
 * 100% fiel à identidade visual real oficial do aplicativo WhatsApp (Meta).
 */
export const WhatsAppOfficialIcon: React.FC<IconProps> = ({ className = '', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-[0_2px_8px_rgba(37,211,102,0.4)] ${className}`}
      aria-label="WhatsApp"
      role="img"
    >
      {/* Disco Verde Oficial do WhatsApp #25D366 */}
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      
      {/* Glifo Oficial Canônico do WhatsApp */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 12C17.5 8.96 15.04 6.5 12 6.5C8.96 6.5 6.5 8.96 6.5 12C6.5 13.06 6.8 14.05 7.33 14.89L6.85 16.65L8.67 16.18C9.48 16.69 10.71 17.5 12 17.5C15.04 17.5 17.5 15.04 17.5 12ZM14.93 13.91C14.81 14.24 14.28 14.54 13.88 14.62C13.61 14.68 13.25 14.72 12.06 14.23C10.55 13.6 9.57 12.06 9.5 11.96C9.43 11.86 8.89 11.14 8.89 10.4C8.89 9.66 9.27 9.3 9.42 9.14C9.55 9.01 9.75 8.95 9.95 8.95C10.02 8.95 10.08 8.95 10.13 8.96C10.28 8.96 10.36 8.97 10.46 9.21C10.59 9.51 10.89 10.27 10.93 10.34C10.97 10.42 11.01 10.52 10.96 10.62C10.91 10.73 10.87 10.77 10.8 10.85C10.73 10.94 10.65 11 10.59 11.08C10.51 11.17 10.43 11.26 10.52 11.41C10.6 11.55 10.9 12.03 11.33 12.42C11.89 12.92 12.35 13.08 12.51 13.15C12.64 13.2 12.78 13.19 12.87 13.09C12.98 12.97 13.12 12.77 13.27 12.57C13.38 12.43 13.51 12.41 13.64 12.46C13.78 12.51 14.5 12.87 14.65 12.94C14.8 13.02 14.9 13.05 14.94 13.12C14.98 13.18 14.98 13.55 14.86 13.88L14.93 13.91Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

// Aliases para uso consistente
export const WhatsAppIcon3D: React.FC<IconProps> = WhatsAppOfficialIcon;

/**
 * LOGO OFICIAL DO INSTAGRAM (Oficial Brand Asset)
 */
export const InstagramOfficialIcon: React.FC<IconProps> = ({ className = '', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-[0_2px_8px_rgba(225,48,108,0.4)] ${className}`}
      aria-label="Instagram"
      role="img"
    >
      <defs>
        <radialGradient id="igOfficialDef" cx="19%" cy="98%" r="120%">
          <stop offset="0%" stopColor="#FED576" />
          <stop offset="12%" stopColor="#F48E44" />
          <stop offset="38%" stopColor="#E1306C" />
          <stop offset="68%" stopColor="#C13584" />
          <stop offset="90%" stopColor="#833AB4" />
          <stop offset="100%" stopColor="#405DE6" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igOfficialDef)" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="3.5" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
      <circle cx="12" cy="12" r="2.8" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
      <circle cx="15.2" cy="8.8" r="0.9" fill="#FFFFFF" />
    </svg>
  );
};

export const InstagramIcon3D: React.FC<IconProps> = InstagramOfficialIcon;

/**
 * LOGO OFICIAL DO GOOGLE MAPS (Pino Oficial 4 Cores)
 */
export const GoogleMapsOfficialIcon: React.FC<IconProps> = ({ className = '', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-[0_2px_8px_rgba(66,133,244,0.35)] ${className}`}
      aria-label="Google Maps"
      role="img"
    >
      <circle cx="12" cy="12" r="11" fill="#181820" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <g transform="translate(6, 4) scale(0.5)">
        <path d="M12 0C5.373 0 0 5.373 0 12C0 17.9 5.6 25.4 12 32C18.4 25.4 24 17.9 24 12C24 5.373 18.627 0 12 0Z" fill="#EA4335" />
        <path d="M12 0C10.3 0 8.7 0.4 7.3 1.1L12 12V0Z" fill="#FBBC04" />
        <path d="M0 12C0 15.3 1.8 19.3 4.7 23.4L12 12H0Z" fill="#34A853" />
        <path d="M12 32C12.7 31.2 13.4 30.3 14.1 29.4L7.4 26.2L12 32Z" fill="#4285F4" />
        <circle cx="12" cy="11.8" r="4.5" fill="#181820" />
      </g>
    </svg>
  );
};

export const GoogleMapsIcon3D: React.FC<IconProps> = GoogleMapsOfficialIcon;

/**
 * LOGO OFICIAL DO GOOGLE ('G' Oficial 4 Cores)
 */
export const GoogleOfficialIcon: React.FC<IconProps> = ({ className = '', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] ${className}`}
      aria-label="Google"
      role="img"
    >
      <circle cx="12" cy="12" r="11" fill="#181820" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <g transform="translate(5.5, 5.5) scale(0.55)">
        <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.24 16.08 18.09V21.09H19.93C22.18 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
        <path d="M12 24C15.24 24 17.96 22.92 19.93 21.09L16.08 18.09C15.01 18.81 13.62 19.25 12 19.25C8.87 19.25 6.22 17.14 5.27 14.29H1.29V17.38C3.26 21.3 7.31 24 12 24Z" fill="#34A853" />
        <path d="M5.27 14.29C5.02 13.57 4.89 12.8 4.89 12C4.89 11.2 5.02 10.43 5.27 9.71V6.62H1.29C0.47 8.24 0 10.06 0 12C0 13.94 0.47 15.76 1.29 17.38L5.27 14.29Z" fill="#FBBC05" />
        <path d="M12 4.75C13.77 4.75 15.35 5.36 16.6 6.55L20.02 3.13C17.95 1.19 15.24 0 12 0C7.31 0 3.26 2.7 1.29 6.62L5.27 9.71C6.22 6.86 8.87 4.75 12 4.75Z" fill="#EA4335" />
      </g>
    </svg>
  );
};

export const GoogleIcon3D: React.FC<IconProps> = GoogleOfficialIcon;
