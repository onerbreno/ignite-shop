import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    fontSize: '$lg',
    marginTop: '5rem',
    color: '$green500',

    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('main', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 1000,
  padding: '0.25rem',

  marginTop: '4rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },

  boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',

  '& + &': {
    marginLeft: '-3rem',
  },
})

export const SuccessProductImages = styled('div', {
  display: 'flex',
})
