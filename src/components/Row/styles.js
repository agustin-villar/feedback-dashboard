import { css } from 'styled-components';
import { colors, getFontSize, getSpacing } from '../../utils/styles';

const dotSize = '28px';

const ratingDotStyles = css`
    align-content: center;
    background-color: ${colors.blue};
    border: 1px solid ${colors.blue};
    border-radius: 100%;
    box-sizing: border-box;
    color: ${colors.white};
    display: inline-flex;
    font-size: ${getFontSize(16)};
    height: ${dotSize};
    justify-content: center;
    padding: ${getSpacing(0.25)};
    width: ${dotSize};
`;

const commentStyles = css`
    .comment-content {
        margin-right: ${getSpacing(1)}
    }

    .label {
        background-color: ${colors.darkGray};
        border-radius: 4px;
        color: ${colors.white};
        display: inline-block;
        font-size: ${getFontSize(10)};
        line-height: 1.2;
        margin-right: ${getSpacing(0.5)};
        padding: ${getSpacing(0.5)} ${getSpacing(1)};
        
        &--bug {
            background-color: ${colors.bug};
        }

        &--suggestion {
            background-color: ${colors.suggestion};
        }

        &--compliment {
            background-color: ${colors.compliment};
        }

        &--question {
            background-color: ${colors.question};
        }
    }
`;

export { ratingDotStyles, commentStyles };
