import  React, { Component }from "react";
import { number, string } from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import Menu from "../components/menu";
import fetchStatuses from "../actions/story-action";
const moment = require("moment");



const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #828282;
  max-width: 80%;
  margin: 0 auto;
  font-family: Verdana, sans-serif;
  background-color: bisque;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 0.8em 1.7em;
  line-height: 1.5;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 0.9em;
`;
const Time = styled.p`
  margin: 0;
  font-size: 0.9em;

  color: #363636;
`;
const Subwrapper = styled.div`
  margin-left: 0.5rem;
`;

class UserItem extends Component {

  componentDidMount() {
    const username = window.location.pathname.substr(1)
    this.props.dispatch(fetchStatuses(username));
  }
 
  render() {
    if (this.props.data.user) {
      const time = this.props.data.user.created;
      const formattedTime = moment(moment.unix(time)).format('MMMM DD, YYYY');

    return (
      <Container>
        <Menu />
        <Wrapper>
          
          <Subwrapper>
            <Paragraph>user:</Paragraph>
            <Paragraph>time:</Paragraph>
            <Paragraph>karma:</Paragraph>
            <Paragraph>submissions:</Paragraph>
          </Subwrapper>
  
          <Subwrapper>
            <Paragraph>{this.props.data.user.id}</Paragraph>
            <Time>{formattedTime}</Time>
            <Paragraph>{this.props.data.user.karma}</Paragraph>
            <Paragraph>{this.props.data.user.submitted}</Paragraph>
          </Subwrapper>
  
        </Wrapper>
      </Container>
    );
  }
  return null
}
};

UserItem.propTypes = {
  creator: string,
  karma: number,
  time: number,
  submissions: string
};



UserItem.defaultProps = {
  error: null,
  data: null
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
};

export default connect(mapStateToProps)(UserItem);
