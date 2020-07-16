import { css } from 'styled-components';
import { colors, getSpacing, getFontSize, breakpoints } from '../../utils/styles';

const styles = css`
    .table {
        &__row {
            background-color: ${colors.white};
            border-bottom: 1px solid ${colors.lightGray};
            padding: ${getSpacing(1)};
        }

        &__cell {
            background: ${colors.white};
            color: ${colors.darkGray};
            font-size: ${getFontSize(14)};
            line-height: 1.5;
            padding: ${getSpacing(0.5)} ${getSpacing(1)} 0;
            text-align: left;

            &--left-align {
                text-align: left;
            }
        }
    }
    
    // Mobile breakpoints only
    @media (max-width: ${parseInt(breakpoints.tabletWidth, 10) - 1}px) {
        display: block;
        
        thead, tbody, th, td, tr { 
            display: block; 
        }
        
        .table {
            &__cell {
                display: flex;
                
                // hide headers on mobile breakpoints
                &--head {
                    position: absolute;
                    top: -9999px;
                    left: -9999px;
                }

                &:last-of-type {
                    padding-bottom: ${getSpacing(0.5)};
                }

                &:before {
                    flex-basis: 30%;
                    flex-shrink: 0;
                    font-weight: 700;
                    padding-right: ${getSpacing(2)};
                    text-align: right;
                }
            }
        }

        td:nth-of-type(1):before { content: "Rating"; }
        td:nth-of-type(2):before { content: "Comment"; }
        td:nth-of-type(3):before { content: "Browser"; }
        td:nth-of-type(4):before { content: "Device"; }
        td:nth-of-type(5):before { content: "Platform"; }
    }

    @media (min-width: ${breakpoints.tabletWidth}) {
        .table {
            &__cell {
                text-align: center;
                padding: ${getSpacing(2)};
                vertical-align: middle;

                &--left-align {
                    text-align: left;
                    width: 45%;
                }

                &--head {
                    background: ${colors.darkGray};
                    color: ${colors.white};
                    font-size: ${getFontSize(16)};
                }
            }
        }
    }
`;

export default styles;
