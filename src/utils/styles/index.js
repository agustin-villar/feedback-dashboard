const breakpoints = {
    tabletWidth: '768px',
    desktopWidth: '1024px',
    maxDesktopWidth: '1200px',
};

const fontSizes = {
    heading: '3.5rem',
    headline: '2.4rem',
    title: '1.8rem',
    bodySize: '1.6rem',
    caption: '1.4rem',
    small: '1.3rem',
};

const colors = {
    black: '#000',
    darkGray: '#53595d',
    mediumGray: '#d0d5da',
    lightGray: '#f0f0f0',
    white: '#fff',
    blue: '#06A1D0',
};

const getSpacing = ratio => `${ratio * 8}px`;

const getFontSize = (size, base = 16) => `${size / base}rem`;

export { getSpacing, fontSizes, breakpoints, colors, getFontSize };
