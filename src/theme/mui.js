// @flow
import theme from './default'
import { createMuiTheme } from '@material-ui/core/styles'

const MuiTheme = createMuiTheme({
  typography: {
    fontFamily: theme.fonts.primary,
  },
  palette: {
    primary: {
      light: theme.palette.primary.lighter,
      main: theme.palette.primary.main,
      dark: theme.palette.primary.darker,
      contrastText: theme.palette.primary.contrastText,
    },
    secondary: {
      light: theme.palette.secondary.lighter,
      main: theme.palette.secondary.main,
      dark: theme.palette.secondary.darker,
      contrastText: theme.palette.secondary.contrastText,
    },
    error: {
      light: theme.palette.error.lighter,
      main: theme.palette.error.main,
      dark: theme.palette.error.darker,
      contrastText: theme.palette.error.contrastText,
    },

    text: {
      primary: theme.palette.text.primary,
      secondary: theme.palette.text.secondary,
    },
  },
  props: {
    MuiFilledInput: {
      disableUnderline: true,
    },
    MuiTextField: {
      variant: 'filled',
    },
    MuiButton: {
      size: 'large',
      variant: 'contained',
      color: 'secondary',
    },
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application 💣!,
      variant: 'contained',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 15,
        textTransform: 'none',
        fontWeight: 'var(--font-weight-bold)',
      },
      contained: {
        boxShadow: 'none !important',
      },
    },
    MuiTypography: {
      root: { color: theme.palette.text.primary },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: theme.palette.primary.darker + 11,
        backdropFilter: 'blur(10px)',
      },
    },
    MuiDrawer: {
      paper: {
        boxShadow: theme.shadows.strong,
      },
    },
    MuiChip: {
      root: {
        borderRadius: 12,
      },
    },
    MuiList: {
      root: {
        padding: '0 !important',
        // borderRadius: 20,
        overflow: 'hidden',
      },
    },
    MuiDialogTitle: {
      root: {
        textAlign: 'center',
      },
    },
    MuiInput: {
      root: {},
      underline: {
        '&:not($error):after': {
          borderColor: theme.palette.text.primary,
        },
        '&:hover:not($error):after': {
          borderColor: theme.palette.text.primary,
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: 'var(--color-subtle-background)',
      },
      inset: {
        marginLeft: 67,
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: 'var(--br-m) !important',
        background: 'var(--color-subtle-background) !important',
        transitionProperty: 'background-color, border-color,border-radius',
        transitionDuration: '0.25s',
        transitionTimingFunction: 'ease',

        '&:hover': {
          background: 'var(--color-subtle-background-darker) !important',
        },

        '&$focused': {
          background: 'var(--color-secondary) !important',
          color: 'var(--color-secondary-contrast) !important',
        },

        // border: `${theme.palette.background.lightgrey} 2px solid`,
        // '&$focused': {
        //   border: `${theme.palette.primary.lighter} 2px solid `,
        // },
      },
      input: {
        padding: '1.325rem .625rem .325rem',
      },
      multiline: {
        padding: '1.325rem .625rem .325rem !important',
      },
    },
    MuiTooltip: {
      tooltip: {
        // color: 'white',
        fontWeight: 600,
        borderRadius: 4,
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.contrastText,
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: 'var(--color-secondary)',
          color: 'var(--color-secondary-contrast)',
        },
        '&$selected:hover': {
          backgroundColor: 'var(--color-secondary)',
          color: 'var(--color-secondary-contrast)',
        },
      },
      button: {
        '&:hover:not($selected)': {
          background: `${theme.palette.background.lightgrey} !important`,
        },
      },
      gutters: {
        paddingLeft: 'var(--spacing-s)',
        paddingRight: 'var(--spacing-s)',
      },
    },
    MuiTabs: {
      root: {
        color: 'var(--color-text)',
        borderTop: '1px solid var(--color-subtle-background)',
      },
      scrollable: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },

      indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
          maxWidth: 40,
          width: '100%',
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
    MuiTab: {
      root: {
        padding: 0,
        textTransform: 'uppercase',

        // fontSize: '0.825rem !important',
        letterSpacing: '0.125rem',
        minWidth: 'unset !important',
        marginRight: '2rem',
        minHeight: 'calc(28px + var(--spacing-m) * 2)',
        opacity: '0.4 !important',
        transition: 'all 0.25s ease',

        // '&:focus': {
        //   opacity: '1 !important',
        // },
        '&:hover': {
          opacity: '1 !important',
          color: theme.palette.primary.main,
        },
        '&$selected': {
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-primary)',
          opacity: '1 !important',
        },
      },
      labelContainer: {
        padding: '0 !important',
      },
      wrapper: {
        '& svg': {
          height: '28px',
          width: '28px',
        },
      },
    },
  },
})

export default MuiTheme
