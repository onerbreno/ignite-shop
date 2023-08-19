import Link from 'next/link'
import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  minHeight: 656,
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',

  marginLeft: 'auto',
})

export const Product = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  minWidth: 696,
  borderRadius: 8,

  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: 'cover',
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    gap: '0.5rem',

    borderRadius: 6,

    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    opacity: 0,
    transform: 'translateY(110%)',
    transition: 'all 0.2s ease-in-out',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    strong: {
      fontSize: '$lg',
      lineHeight: '1.6',

      color: '$gray100',
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      lineHeight: '1.4',

      color: '$green300',
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      position: 'relative',
      height: 48,
      width: 48,

      cursor: 'pointer',

      border: 0,
      borderRadius: 6,

      background: '$green500',

      '&:hover': {
        background: '$green300',
      },

      svg: {
        color: '$white',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
