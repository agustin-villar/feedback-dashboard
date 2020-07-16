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
};

const fontFamilies = {
    main: '"Open Sans", "Arial", "Helvetica", sans-serif',
};

const getSpacing = ratio => `${ratio * 8}px`;

const getFontSize = (size, base = 16) => `${size / base}rem`;

export { getSpacing, breakpoints, colors, getFontSize, fontFamilies };
