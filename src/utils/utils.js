function getPlatform(platformString) {
    const platformRegex = /^(Win)[a-zA-Z0-9.]+|(MacOSX)$/;
    return platformRegex.test(platformString) ? 'Desktop' : 'Mobile';
}

export { getPlatform };
