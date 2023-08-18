import { styled } from '@/src/styles'

export const CartContainer = styled('section', {
  padding: '4.5rem 3rem 3rem',

  maxWidth: '30rem',
  width: '100%',
  height: '100%',
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

  height: '100%',

  h4: {
    fontSize: '$lg',
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

export const CartProductsList = styled('ul', {
  display: 'grid',
  gap: '2.25rem',
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
