import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export default class PictureLoader extends Component {
  static propTypes = {
    opacity: PropTypes.string.isRequired
  }

  render () {
    const { opacity } = this.props
    var rand = Math.floor(Math.random() * 3) + 1

    return (
      <div style={{
        backgroundColor:` rgba(255, 255, 255, ${opacity})`,
        animationDuration:`${rand}s`}}
      className="PictureLoader">
      </div>
    )
  }
}