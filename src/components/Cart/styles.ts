import { styled } from '@/src/styles'

export const CartContainer = styled('section', {
  padding: '4.5rem 3rem 3rem',

  maxWidth: '30rem',
  width: '100%',
  height: '100vh',

  background: '$gray800',

  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: '1',

  transform: 'translateX(100%)',
  visibility: 'hidden',
  transition: 'all 0.4s',

  variants: {
    isVisible: {
      true: {
        transform: 'translateX(0)',
        visibility: 'visible',
      },
    },
  },
})

export const CartContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2.25rem',
  height: '100%',

  h4: {
    fontSize: '$md',
    fontWeight: '400',
    color: '$gray300',
  },
})

export const CloseButton = styled('button', {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',

  border: 0,
  background: 'transparent',
  cursor: 'pointer',

  svg: {
    color: '$gray500',
  },
})

export const CartProductsList = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflowY: 'auto',
  borderRadius: 8,

  gap: '1.5rem',

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
    border: '3px solid $gray900',
    borderRadius: '20px',
  },
})

export const CartFooter = styled('footer', {
  width: '100%',
  display: 'grid',

  gap: '3rem',

  button: {
    height: '4.3125rem',

    cursor: 'pointer',
    borderRadius: 8,
    border: 0,

    fontWeight: 700,
    fontSize: '$md',
    lineHeight: 1.6,

    background: '$green500',
    color: '$white',
  },

  'button:hover': {
    background: '$green300',
    transition: 'background-color 0.2s',
  },
})

export const CartSummary = styled('div', {
  display: 'grid',
  gap: '0.5rem',

  span: {
    display: 'flex',
    justifyContent: 'space-between',

    lineHeight: 1.6,
  },
})

export const CartSummaryPriceContainer = styled('span', {
  p: {
    fontSize: '$md',
    fontWeight: 700,
  },

  strong: {
    lineHeight: 1.4,
    fontSize: '$xl',
  },
})
