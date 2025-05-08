import React from 'react';
import { Toaster } from 'sonner';

/**
 * Toast provider component using Sonner
 * Provides toast notifications for the entire app
 */
export const ToastProvider = ({ children }) => {
    return (
        <>
            {children}
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: '#fff',
                        color: '#1a1a1a',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.5rem'
                    },
                    duration: 3000,
                }}
            />
        </>
    );
};

export default ToastProvider; 