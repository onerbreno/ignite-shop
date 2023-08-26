import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '&::-webkit-scrollbar': {
      width: '12px',
      borderRadius: '20px',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: '$gray900',
      borderRadius: '20px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$gray800',
      width: '2px',
      border: '3px solid $gray900',
      borderRadius: '20px',
    },
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  'h4, p': {
    lineHeight: 1.6,
  },
})
