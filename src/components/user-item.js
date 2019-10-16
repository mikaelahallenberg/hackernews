import  React, { Component }from "react";
import { number, string } from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import Menu from "../components/menu";
import fetchStatuses from "../actions/story-action";


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
`;

const Paragraph = styled.p`
  margin: 0;
`;

const Subwrapper = styled.div`
  margin-left: 0.5rem;
`;

class UserItem extends Component {

  componentWillMount() {
    const username = window.location.pathname.substr(1)
    this.props.dispatch(fetchStatuses(username));


  }
  componentWillUnmount() {
    this.props.dispatch(fetchStatuses());

  }
  render() {
    if (this.props.data.user) {

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
            <Paragraph>{this.props.data.user.created}</Paragraph>
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
