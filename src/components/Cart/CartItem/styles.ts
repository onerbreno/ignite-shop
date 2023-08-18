import { styled } from '@/src/styles'

export const CartItemContainer = styled('li', {
  display: 'flex',
  alignItems: 'center',

  gap: '1.25rem',
  height: '100%',
  maxHeight: '5.8125rem',
})

export const ImageContainer = styled('div', {
  // padding: '0.5rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
})

export const CartItemContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '0.5rem',

  div: {
    display: 'grid',
    gap: 2,
  },

  button: {
    color: '$green500',
    fontWeight: '700',

    width: 'min-content',
    border: 0,

    cursor: 'pointer',
    textAlign: 'left',

    background: 'transparent',
  },

  'button:hover': {
    transition: 'color 0.2s',
    color: '$green300',
  },
})
