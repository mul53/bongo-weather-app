import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {
  toggleSearchUI as toggleSearchUIAction,
  searchCurrentWeather as searchCurrentWeatherAction,
} from '../actions/searchActionCreators';

class Search extends Component {
  constructor() {
    super();
    this.search = null;
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick(e) {
    const { toggleSearchUI, active } = this.props;
    if (!this.search.contains(e.target) && active) {
      toggleSearchUI();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchCurrentWeather } = this.props;
    const { city } = this.state;
    searchCurrentWeather(city);
  }

  render() {
    const { active, loading, errorMessage } = this.props;
    return (
      <SearchWrapper active={active} onClick={this.handleClick}>
        <Form ref={node => this.search = node} onSubmit={this.handleSubmit}>
          <TextInput type="text" placeholder="Search for a location" onChange={this.handleChange} name="city" />
          <SearchButton type="submit" value="Search" />
        </Form>
        { loading && <Message>...loading</Message> }
        { errorMessage && <Message>{errorMessage}</Message> }
      </SearchWrapper>
    );
  }
}

const Message = styled.div`
color: white;
`;

const SearchWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: rgba(0,0,0,0.45);
z-index: 20;
pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
opacity: ${({ active }) => (active ? 1 : 0)};
transition: all 300ms;
`;

const Form = styled.form`
display: flex;
`;

const TextInput = styled.input`
font-family: "Segoe UI Light";
border-top-left-radius: 3px;
border-bottom-left-radius: 3px;
border: 0px;
width: 100%;
padding: 14px;
`;

const SearchButton = styled.input`
font-family: "Segoe UI Light";
padding: 0 32px;
border: 0px;
border-top-right-radius: 3px;
border-bottom-right-radius: 3px;
background-color: #542c85;
color: white;
cursor: pointer;
`;

const mapStateToProps = state => ({
  active: state.search.active,
  loading: state.search.loading,
  errorMessage: state.search.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  toggleSearchUI() {
    return dispatch(toggleSearchUIAction());
  },
  searchCurrentWeather(city) {
    return dispatch(searchCurrentWeatherAction(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
