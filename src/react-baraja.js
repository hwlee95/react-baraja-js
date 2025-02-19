/**
 *  React BarajaJS
 *  A plugin for spreading items in a card-like fashion.
 *
 *  Copyright 2020-2023, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

import React     from 'react';
import PropTypes from 'prop-types';
import Baraja    from 'baraja-js-customized';
import 'baraja-js-customized/src/baraja.css';

/**
 * Provides React Component wrapper.
 */
class MyBarajaJS extends React.Component {
  componentDidMount() {
    this.baraja = new Baraja(
      this.refs.wrapper,
      this.props.options
    );
  }

  componentDidUpdate(prevProps) {
    if (!Object.is(this.props.fan, prevProps.fan)) {
      this.baraja.fan(this.props.fan);
    }

    if (this.props.add !== prevProps.add) {
      this.baraja.add(this.props.add);
    }

    if (this.props.close !== prevProps.close) {
      this.baraja.close();
    }

    if (this.props.last !== prevProps.last) {
      this.baraja.last();
    }

    if (this.props.next !== prevProps.next) {
      this.baraja.next();
    }
  }

  render() {
    return (
      <ul id={this.props.id} className="baraja-container" ref="wrapper">
        {this.props.children.map((Child, index) => {
          return <li key={index}>{Child}</li>;
        })}
      </ul>
    );
  }
}

MyBarajaJS.defaultProps = {
  id: 'baraja-js-customized',
  fan: {},
  close: false,
  last: false,
  next: false
};

MyBarajaJS.propTypes = {
  id: PropTypes.string,
  options: PropTypes.object,
  fan: PropTypes.object,
  add: PropTypes.string,
  close: PropTypes.bool,
  last: PropTypes.bool,
  next: PropTypes.bool
};

export default MyBarajaJS;
