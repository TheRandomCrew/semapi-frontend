import { css } from 'styled-components'

const accentColors = ['#FD6FFF', '#60EB9F', '#60EBE1', '#FFCA58'];
const neutralColors = ['#EB6060', '#01C781', '#6095EB', '#FFB200'];
const statusColors = {
    critical: '#FF3333',
    error: '#FF3333',
    warning: '#F7E464',
    ok: '#7DD892',
    unknown: '#a8a8a8',
    disabled: '#a8a8a8',
};

const backgroundColor = '#111111';

const colors = {
    active: '#666666',
    background: backgroundColor,
    black: '#000000',
    brand: '#FD6FFF',
    control: {
        dark: '#FFCA58',
        light: '#403216',
    },
    focus: '#FFCA58',
    icon: {
        dark: '#f8f8f8',
        light: '#666666',
    },
    placeholder: '#AAAAAA',
    text: {
        dark: '#eeeeee',
        light: '#444444',
    },
    white: '#FFFFFF',
};

const colorArray = (array, prefix) =>
    array.forEach((color, index) => {
        colors[`${prefix}-${index + 1}`] = color;
    });

colorArray(accentColors, 'accent');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(color => {
    colors[`status-${color}`] = statusColors[color];
});

export const dark = {
    global: {
        colors: {
          background: '#ffffff',
          brand: '#222222',
          control: {
            dark: '#FFED00',
            light: '#000000',
          },
          focus: '#FFED00',
          'neutral-1': '#00C9FF',
          'neutral-2': '#64FF00',
          'neutral-3': '#D0011B',
          'neutral-4': '#FFED00',
          'neutral-5': '#6095EB',
          'accent-1': '#FFED00',
          'accent-2': '#00C9FF',
          'accent-3': '#60EBE1',
          'status-critical': '#D0011B',
          'status-warning': '#FFED00',
          'status-ok': '#64FF00',
          'status-unknown': '#AAADAE',
          'status-disabled': '#AAADAE',
          'dark-1': '#000001',
          'dark-2': '#333333',
          'dark-3': '#666666',
          'light-1': '#D9D9D9',
          'light-2': '#AAADAE',
        },
        font: {
          family: "'Open Sans', Arial, sans-serif",
          face: undefined,
        },
      },
      anchor: {
        color: {
          dark: '#FFED00',
          light: '#000000',
        },
      },
      button: {
        extend: css`
          ${props => !props.plain && `
            font-weight: bold;
            border-radius: 0;
          `}
        `,
    },
};

export const isObject = item =>
item && typeof item === 'object' && !Array.isArray(item);