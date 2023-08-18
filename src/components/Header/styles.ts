import { styled } from '@/src/styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ButtonCart = styled('div', {
  position: 'relative',
  display: 'flex',
  height: 48,
  width: 48,
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray800',
  borderRadius: 6,

  cursor: 'pointer',

  svg: {
    color: '$gray500',

    '&:hover': {
      color: '$gray300',
    },
  },

  span: {
    position: 'absolute',
    top: -7,
    right: -7,

    width: '1.5rem',
    height: '1.5rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontWeight: '700',
    lineHeight: 1.6,

    outline: '3px solid $gray900',
    borderRadius: '50%',
    background: '$green500',
  },
})
