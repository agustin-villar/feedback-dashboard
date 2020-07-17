import { css } from 'styled-components';
import { getSpacing, colors, getFontSize } from '../../utils/styles';

const styles = css`
    margin-left: auto;

    .statusFilter {
        &__button {
            border: 0;
            background-color: ${colors.mediumGray};
            border-radius: 4px;
            color: ${colors.darkGray};
            cursor: pointer;
            font-size: ${getFontSize(11)};
            padding: ${getSpacing(1)} ${getSpacing(2)};
            text-shadow: -1px -1px 0 ${colors.white};

            &--new {
                border-radius: 4px 0 0 4px;
                margin-right: 1px;

                &.statusFilter__button--active {
                    background-color: ${colors.new};
                    text-shadow: 1px 1px 0 ${colors.white};
                }
            }

            &--read {
                border-radius: 0 4px 4px 0;

                &.statusFilter__button--active {
                    background-color: ${colors.read};
                    text-shadow: 1px 1px 0 ${colors.white};
                }
            }
        }
    }
`;

export default styles;
