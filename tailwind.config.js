// Конфиг Tailwind для upsalesai.online (раньше был inline в index.html для CDN-версии).
// Пересборка: npx tailwindcss@3 -c tailwind.config.js -i src/tailwind.css -o assets/css/tailwind.css --minify
module.exports = {
	content: ['./index.html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#5b3ec9',
				'primary-dark': '#6a4de6',
				'blue-dark': '#6a4de6',
				secondary: '#13C296',
				dark: '#090E34',
				'dark-2': '#1D2144',
				'dark-3': '#2C3154',
				'body-color': '#637381',
				'body-color-dark': '#959CB1',
			},
			fontFamily: { sans: ['Inter', 'sans-serif'] },
			animation: {
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float 6s ease-in-out 2s infinite',
				'gradient': 'gradient 8s ease infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'glow-pulse': 'glowPulse 3s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				gradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				glowPulse: {
					'0%, 100%': { boxShadow: '0 0 20px rgba(91,62,201,0.3), 0 0 60px rgba(91,62,201,0.1)' },
					'50%': { boxShadow: '0 0 40px rgba(91,62,201,0.5), 0 0 80px rgba(91,62,201,0.2)' },
				},
			},
		},
	},
};
