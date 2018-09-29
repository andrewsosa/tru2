import React from 'react';
import styled from 'styled-components';
import './createForm.sass';

const Input = styled.input`
  width: 50vw;
`;

const ButtonWrapper = styled.p`
  position: absolute;
  left: 100%;
  transition: 1ms;
`;

export default class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: '', btnStyle: { visibility: 'collapse' } };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postHandler = props.postHandler;
  }

  handleSubmit(event) { // eslint-disable-line
    event.preventDefault();
    const { msg } = this.state;
    if (msg === '') return;
    this.postHandler(msg);
    this.setState({ msg: '' });
  }

  handleChange(event) {
    const msg = event.target.value.replace(/\s+/g, ' ');
    // const opacity = (msg === '') ? 100 : 100;
    const visibility = (msg === '') ? 'collapse' : 'visible';
    this.setState({ msg, btnStyle: { visibility } });
  }

  render() {
    const { msg, btnStyle } = this.state;
    return (
      <form id="createForm" className="createForm" onSubmit={this.handleSubmit}>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <Input onChange={this.handleChange} value={msg} className="input" placeholder="What's tru?" />
          </p>
          {/* <ButtonWrapper className="control" style={btnStyle}> */}
          <button type="submit" className="button is-primary" style={btnStyle}>
            Submit
          </button>
          {/* </ButtonWrapper> */}
        </div>
      </form>
    );
  }
}
