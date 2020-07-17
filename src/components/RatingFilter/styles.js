import { css } from 'styled-components';
import { ratingDotStyles } from '../Row/styles';
import { colors, fontFamilies, getSpacing } from '../../utils/styles';

const styles = css`
    display: flex;
    justify-content: center;

    .ratingFilter {
        &__button {
            ${ratingDotStyles}
            
            background-color: ${colors.background};
            border: 1px solid ${colors.darkGray};
            color: ${colors.darkGray};
            cursor: pointer;
            font-family: ${fontFamilies.main};
            margin-right: ${getSpacing(1)};
            opacity: 0.4;
            transition: all 0.2s ease-out;
            transition-property: background-color, border-color, color, opacity;
            
            &--active {
                border: 0;
                opacity: 1;
                ${ratingDotStyles}
            }
        }
    }
`;

export default styles;
