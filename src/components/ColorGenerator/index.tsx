import React, { useState } from 'react';
import Color from 'color';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

const COLOR_SHADES: Record<
    string,
        {
            adjustment: number;
            adjustmentInput: string;
            displayOrder: number;
            codeOrder: number;
        }
    > = {
        '--ifm-color-primary': {
            adjustment: 0,
            adjustmentInput: '0',
            displayOrder: 3,
            codeOrder: 0,
        },
        '--ifm-color-primary-dark': {
            adjustment: 0.1,
            adjustmentInput: '10',
            displayOrder: 4,
            codeOrder: 1,
        },
        '--ifm-color-primary-darker': {
            adjustment: 0.15,
            adjustmentInput: '15',
            displayOrder: 5,
            codeOrder: 2,
        },
        '--ifm-color-primary-darkest': {
            adjustment: 0.3,
            adjustmentInput: '30',
            displayOrder: 6,
            codeOrder: 3,
        },
        '--ifm-color-primary-light': {
            adjustment: -0.1,
            adjustmentInput: '-10',
            displayOrder: 2,
            codeOrder: 4,
        },
        '--ifm-color-primary-lighter': {
            adjustment: -0.15,
            adjustmentInput: '-15',
            displayOrder: 1,
            codeOrder: 5,
        },
        '--ifm-color-primary-lightest': {
            adjustment: -0.3,
            adjustmentInput: '-30',
            displayOrder: 0,
            codeOrder: 6,
        },
    };

    const DEFAULT_PRIMARY_COLOR = 'f3de8c';

    function ColorGenerator(): JSX.Element {
        const [ baseColor, setBaseColor ] = useState(DEFAULT_PRIMARY_COLOR);
        const [ shades, setShades ] = useState(COLOR_SHADES);
        const color = Color(`#${baseColor}`);
        const adjustColors = Object.keys(shades)
            .map((shade) => ({
                ...shades[shade],
                variableName: shade,
            }))
            .map((value) => ({
                ...value,
                hex: color.darken(value.adjustment).hex(),
            }));

        return(
            <div>
                <p>
                    {/* eslint-disable-next-line jsx-ally/label-has-associated-control */}
                    <label htmlFor="primary_color">
                        <strong className="margin-right--sm">Primary Color</strong>
                    </label>{' '}
                    <input
                        id="primary_color"
                        className={styles.input}
                        defaultValue={baseColor}
                        onChange={(event) => {
                            const colorValue = event.target.value.replace(/^#+/, '');

                            try {
                                Color(`#${baseColor}`);
                                setBaseColor(colorValue);
                            } catch {
                                console.log('invalid color', colorValue)
                            }
                        }}
                    />
                </p>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>CSS Variable Name</th>
                                <th>Hex</th>
                                <th>Adjustment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adjustColors
                                .sort((a, b) => a.displayOrder - b.displayOrder)
                                .map((value) => {
                                    const { variableName, adjustment, adjustmentInput, hex } = value;
                                    return (
                                        <tr key={variableName}>
                                            <td>
                                                <code>{variableName}</code>
                                            </td>
                                            <td>
                                                <span
                                                    className={styles.color}
                                                    style={{
                                                        backgroundColor: hex;
                                                    }}
                                                />
                                                <code className="margin-left--sm">
                                                    {hex.toUpperCase()}
                                                </code>
                                            </td>
                                            <td>
                                                {variableName === '--ifm-color-primary' ? (
                                                    0
                                                ) : (
                                                    <input
                                                        aria-label={`${variableName} CSS variable name`}
                                                        className={styles.input}
                                                        type="number"
                                                        value={adjustmentInput}
                                                        onChange={(event) => {
                                                            const newValue = parseFloat(event.target.value);
                                                            setShades({
                                                                ...shades,
                                                                [variableName]: {
                                                                    ...shades[variableName],
                                                                    adjustmentInput: event.target.value,
                                                                    adjustment: Number.isNaN(newValue)
                                                                        ? adjustment
                                                                        : newValue / 100.0,
                                                                },
                                                            });
                                                        }}
                                                    />
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <p>
                    Replace the variables in <code>src/css/custom.css</code> with these new variables.
                </p>
                <CodeBlock className="css">
                    {adjustedColors
                        .sort((a, b) => a.codeOrder - b.codeOrder)
                        .map((value) => `${value.variableName}: ${value.hex.toLowerCase()};`)
                        .join('\n')
                    }
                </CodeBlock>
            </div>
        );
    }

export default ColorGenerator;