import { css } from 'styled-components';
import { getSpacing, colors, breakpoints } from '../../utils/styles';

const header = css`
    background-color: ${colors.white};
    box-shadow: 0 1px 1px 1px rgba(0,0,0,0.1);
    color: ${colors.darkGray};
    display: flex;
    font-weight: 700;
    justify-content: center;
    margin-bottom: ${getSpacing(2)};
    padding: ${getSpacing(2)};
`;

const main = css`
    width: calc(100% - ${getSpacing(4)});
    margin: 0 auto;

    @media (min-width: ${breakpoints.tabletWidth}) {
        max-width: ${breakpoints.maxDesktopWidth};
    }
    
    @media (min-width: ${breakpoints.desktopWidth}) {
        width: calc(100% - ${getSpacing(8)});
    }
`;

export { header, main };
