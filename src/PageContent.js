import React, { Component } from 'react';

export default class extends Component {
  render() {
    const styles = {
      background: 'white',
      width: '100vw',
      height: '100vh',
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}
