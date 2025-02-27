const baseTheme = require('prism-react-renderer/themes/vsDark');

const themeDark = [
    {
        types: ['keyword'],
        style: {
            color: '#469446',
        },
    },
    {
        types: ['string'],
        style: {
            color: '#a49840',
        },
    },
    {
        types: ['function'],
        style: {
            color: '#9e6db1',
        },
    },
    {
        types: ['operator'],
        style: {
            color: '#888',
        },
    },
    {
        types: ['number', 'variable'],
        style: {
            color: '#336b9d',
        },
        },
    {
        types: ['comment'],
        style: {
            color: '#65737e',
        },
    },
    {
        types: ['inserted'],
        style: {
            color: '#b5cea8',
            background: '#355235',
        },
    },
];

module.exports = {
    plain: {
        backgroundColor: '#242526',
        color: '#eee',
    },
    styles: baseTheme.styles.concat(themeDark),
};