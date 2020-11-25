import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default class extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      background: isDarkMode ? 'black' : 'white',
      width: '100vw',
      height: '100vh',
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}
