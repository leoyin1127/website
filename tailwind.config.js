/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    safelist: [
        'bg-white',
        'text-white',
        'border-white',
        'bg-blue-500',
        'bg-purple-600',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#0f172a',   // Dark blue
                'secondary': '#3b82f6', // Blue
                'accent': '#6366f1',    // Indigo
                'neutral': '#f8fafc',   // Light gray
                'base-100': '#ffffff',
                'info': '#06b6d4',      // Cyan
                'success': '#10b981',   // Emerald
                'warning': '#f59e0b',   // Amber
                'error': '#ef4444',     // Red
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
                mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
            },
            animation: {
                'gradient': 'gradient 8s ease infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
} 