import theme from '../../theme'
import PropTypes from 'prop-types'

const getTypeStyles = (type, colors) => {
  const typeStyles = {
    primary: {
      backgroundColor: colors.primary,
      textColor: colors.white,
      borderColor: colors.primary,
      hover: {
        backgroundColor: colors.primaryLight,
        textColor: colors.white,
        borderColor: colors.primaryLight,
      },
    },
  }

  const defaultStyles = {
    backgroundColor: colors.white,
    textColor: colors.almostBlack,
    borderColor: colors.almostBlack,
    hover: {
      backgroundColor: colors.white,
      textColor: colors.primary,
      borderColor: colors.primary,
    },
  }

  return typeStyles[type] ?? defaultStyles
}

const Button = ({ text, clickHandler, fullWidth, type }) => {
  const { colors, spacing, fontSize, radius } = theme

  const { backgroundColor, textColor, borderColor, hover } = getTypeStyles(
    type,
    colors
  )

  return (
    <>
      <button onClick={clickHandler}>
        <span className='text'>{text}</span>
      </button>

      <style jsx>{`
        button {
          font-family: Silka;
          font-size: ${fontSize.xs};
          text-transform: uppercase;
          padding: ${spacing.xxs} ${spacing.s};
          border: 1px solid ${borderColor};
          color: ${textColor};
          border-radius: ${radius.m};
          background: ${backgroundColor};
          text-align: center;
          ${fullWidth && 'width: 100%;'};
          cursor: pointer;
          transition: background-color 0.15s ease-out,
            border-color 0.15s ease-out, color 0.15s ease-out;
        }

        button:hover {
          background-color: ${hover.backgroundColor};
          border-color: ${hover.borderColor};
          color: ${hover.textColor};
        }
      `}</style>
    </>
  )
}

Button.defaultProps = {
  fullWidth: false,
  type: '',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
}

export default Button
