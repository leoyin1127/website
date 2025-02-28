'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Start with light mode as the initial state to avoid hydration mismatch
    const [theme, setTheme] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Only run theme detection on the client side
        // Check for system preference
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        // Check for stored preference
        const storedTheme = localStorage.getItem('theme') as Theme | null;

        // Use stored theme or system preference
        const initialTheme = storedTheme || systemPreference;
        setTheme(initialTheme);

        // Apply theme to document
        if (initialTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const updateTheme = (newTheme: Theme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Always provide a context, but use a noop function for setTheme when not mounted
    // This ensures that components using the context won't error during SSR
    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                // If not mounted yet, provide a dummy function that doesn't do anything
                setTheme: mounted ? updateTheme : () => { }
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export default ThemeProvider; 