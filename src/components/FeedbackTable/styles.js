import { css } from 'styled-components';
import { colors, getSpacing, getFontSize, breakpoints } from '../../utils/styles';

const styles = ({ labels }) => {
    const labelRules = labels.map(
        (label, index) => `&:nth-of-type(${index + 1}):before { content: '${label}'}`,
    ).join(' ');

    return css`
        margin-bottom: ${getSpacing(4)};
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
        width: 100%;

        .table {
            &__row {
                background-color: ${colors.white};
                border-bottom: 1px solid ${colors.lightGray};
                padding: ${getSpacing(1)};

                &--new,
                &--read {
                    border-left: 3px solid ${colors.read};
                }

                &--new {
                    border-left: 3px solid ${colors.new};
                }
            }

            &__cell {
                background: ${colors.white};
                color: ${colors.darkGray};
                font-size: ${getFontSize(14)};
                line-height: 1.5;
                padding: ${getSpacing(0.5)} ${getSpacing(1)} 0;
                position: relative;
                text-align: left;

                &--left-align {
                    text-align: left;
                }

                &--empty {
                    color: ${colors.mediumGray};
                }
            }
        }
        
        // Table layout for mobile breakpoints only
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
                        color: ${colors.darkGray};
                        flex-basis: 30%;
                        flex-shrink: 0;
                        font-weight: 700;
                        padding-right: ${getSpacing(2)};
                        text-align: right;
                    }

                    ${labelRules}
                }
            }
        }

        @media (min-width: ${breakpoints.tabletWidth}) {
            margin-bottom: ${getSpacing(8)};

            .table {
                &__row {
                    &--new,
                    &--read {
                        border-left: 0;
                    }

                    &--new {
                        border-left: 0;
                    }
                }
                &__cell {
                    background-color: transparent;
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

                    &--new,
                    &--read {
                        &:after {
                            border-left: 3px solid ${colors.read};
                            content: '';
                            height: 100%;
                            left: 0;
                            position: absolute;
                            top: 0;
                        }
                    }

                    &--new {
                        &:after {
                            border-left: 3px solid ${colors.new};
                        }
                    }
                }
            }
        }
    `;
};

export default styles;
