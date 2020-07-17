import { css } from 'styled-components';
import { getSpacing, getFontSize, colors, breakpoints, fontFamilies } from '../../utils/styles';

const header = css`
    background-color: ${colors.white};
    box-shadow: 0 1px 1px 1px rgba(0,0,0,0.1);
    color: ${colors.darkGray};
    display: flex;
    font-weight: 700;
    justify-content: center;
    margin-bottom: ${getSpacing(2)};
    padding: ${getSpacing(2)};

    @media (min-width: ${breakpoints.tabletWidth}) {
        margin-bottom: ${getSpacing(4)};
    }
`;

const main = css`
    width: calc(100% - ${getSpacing(4)});
    margin: 0 auto;

    .filters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: ${getSpacing(2)};

        &__keyword-input {
            border: 1px solid ${colors.mediumGray};
            flex-basis: 100%;
            font-family: ${fontFamilies.main};
            font-size: ${getFontSize(14)};
            margin-bottom: ${getSpacing(1)};
            padding: ${getSpacing(1)};
        }
    }

    @media (min-width: ${breakpoints.tabletWidth}) {
        max-width: ${breakpoints.maxDesktopWidth};

        .filters {
            align-content: center;
            align-items: center;
    
            &__keyword-input {
                flex-basis: 25%;
                margin: 0 ${getSpacing(4)} 0 0;
            }
        }
    }
    
    @media (min-width: ${breakpoints.desktopWidth}) {
        width: calc(100% - ${getSpacing(8)});
    }
`;

export { header, main };
