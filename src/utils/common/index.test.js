import { getPlatform } from '.';

describe('should return desktop or mobile accordingly', () => {
    // Desktop platforms
    ['WinVista', 'Win7', 'Win8.1', 'WinXP', 'MacOSX'].forEach(platform => {
        test(platform, () => {
            expect(getPlatform(platform)).toBe('Desktop');
        });
    });

    // Mobile platforms
    ['Android', 'iOS'].forEach(platform => {
        test(platform, () => {
            expect(getPlatform(platform)).toBe('Mobile');
        });
    });
});
