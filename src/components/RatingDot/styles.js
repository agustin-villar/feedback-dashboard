import { css } from 'styled-components';
import { colors, getFontSize, getSpacing } from '../../utils/styles';

const dotSize = '28px';

const styles = css`
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

export default styles;
