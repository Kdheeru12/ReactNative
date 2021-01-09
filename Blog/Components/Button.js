import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button as GButton } from 'galio-framework';
import nowTheme from '../Themes'


class Button extends React.Component {
  render() {
    const { small, shadowless, children, color, style, fontSize, round, ...props } = this.props;

    const colorStyle = color && nowTheme.COLORS[color.toUpperCase()];

    const buttonStyles = [
      small && styles.smallButton,
      colorStyle === 'neutral'
        ? { backgroundColor: 'rgba(0,0,0,0)' }
        : color && { backgroundColor: colorStyle },
      round && { borderRadius: nowTheme.SIZES.BASE * 2 },
      !shadowless && styles.shadow,
      { ...style }
    ];

    return (
      <GButton
        style={buttonStyles}
        shadowless
        textStyle={{ fontSize: fontSize || 12, fontWeight: '700' }}
        {...props}
      >
        {children}
      </GButton>
    );
  }
}

Button.propTypes = {
  small: PropTypes.bool,
  shadowless: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      'default',
      'primary',
      'info',
      'error',
      'success',
      'warning',
      'simple',
      'neutral'
    ])
  ])
};

const styles = StyleSheet.create({
  smallButton: {
    width: 75,
    height: 28
  }
});

export default Button;
