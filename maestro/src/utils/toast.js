/**
 * Toast utility functions
 * Makes it easy to show toast notifications throughout the app
 */
import { toast } from 'sonner';

/**
 * Show a success toast notification
 * @param {string} message - The message to display
 * @param {object} options - Additional options for the toast
 */
export const showSuccess = (message, options = {}) => {
    toast.success(message, options);
};

/**
 * Show an error toast notification
 * @param {string} message - The message to display
 * @param {object} options - Additional options for the toast
 */
export const showError = (message, options = {}) => {
    toast.error(message, options);
};

/**
 * Show an info toast notification
 * @param {string} message - The message to display
 * @param {object} options - Additional options for the toast
 */
export const showInfo = (message, options = {}) => {
    toast.info(message, options);
};

/**
 * Show a warning toast notification
 * @param {string} message - The message to display
 * @param {object} options - Additional options for the toast
 */
export const showWarning = (message, options = {}) => {
    toast.warning(message, options);
};

/**
 * Show a custom toast notification
 * @param {string} message - The message to display
 * @param {object} options - Additional options for the toast
 */
export const showToast = (message, options = {}) => {
    toast(message, options);
};

/**
 * Show a promise toast notification that changes based on promise state
 * @param {Promise} promise - The promise to track
 * @param {object} messages - Messages for different promise states
 * @param {object} options - Additional options for the toast
 */
export const showPromise = (promise, messages, options = {}) => {
    return toast.promise(promise, messages, options);
};

export default {
    success: showSuccess,
    error: showError,
    info: showInfo,
    warning: showWarning,
    promise: showPromise,
    show: showToast,
}; 