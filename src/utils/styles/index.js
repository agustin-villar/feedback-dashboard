const breakpoints = {
    tabletWidth: '768px',
    desktopWidth: '1024px',
    maxDesktopWidth: '1200px',
};

const colors = {
    background: '#eef3f7',
    black: '#000',
    darkGray: '#53595d',
    mediumGray: '#d0d5da',
    lightGray: '#f0f0f0',
    white: '#fff',
    blue: '#06A1D0',
    new: '#7be0ad',
    read: '#e0b0d5',
    bug: '#f6511d',
    suggestion: '#7fb800',
    compliment: '#00a6ed',
    question: '#5f4b66',
};

const fontFamilies = {
    main: '"Open Sans", "Arial", "Helvetica", sans-serif',
};

/**
 * Will return spacing dimensions based on the 8pt grid system
 * @param {number} ratio - The number of times 8 should be multiplied by
 * @returns {string} The desired dimension in pixels
 */
const getSpacing = ratio => `${ratio * 8}px`;

/**
 * Will return font sizes from pixel to rem units
 * @param {number} size - The desired font size in pixels
 * @param {number} base - The base size in which measures should be calculated
 * @returns {string} The desired dimension in pixels
 */
const getFontSize = (size, base = 16) => `${size / base}rem`;

export { getSpacing, breakpoints, colors, getFontSize, fontFamilies };
