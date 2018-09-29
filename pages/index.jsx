import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import openSocket from 'socket.io-client';

import Appbar from '../components/appbar';
import Dashboard from '../components/dashboard';

export default class Index extends React.Component {
  static async getInitialProps() {
    const resp = await fetch('http://localhost:3000/api/posts');
    const stream = await resp.json();
    return {
      stream,
    };
  }

  constructor(props) {
    super(props);
    this.state = { stream: props.stream };
    this.handleNewPost = this.handleNewPost.bind(this);
    this.submitNewPost = this.submitNewPost.bind(this);

    const socket = openSocket('http://localhost:3000');
    socket.on('posts', post => this.handleNewPost(post));
  }

  handleNewPost = (post) => {
    const { body } = post.post;
    this.setState(state => ({
      stream: [{ body }].concat(state.stream),
    }));
  }

  submitNewPost = (msg) => {
    fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      body: JSON.stringify({ body: msg }),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => console.log(res.json()));
  }

  render() {
    const { stream } = this.state;
    return (
      <div>
        <Appbar postHandler={this.submitNewPost} />
        <Dashboard content={stream} />
      </div>
    );
  }
}
