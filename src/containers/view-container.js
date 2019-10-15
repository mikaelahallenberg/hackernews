import React, { Component } from "react";
import {
  string,
  func,
  shape,
  arrayOf,
  objectOf,
  object,
  number
} from "prop-types";
import { connect } from "react-redux";
import ListItem from '../components/list-item';
import fetchStatuses from "../actions/story-action";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Container = styled.section`
  max-width: 80%;
  margin: 0 auto;
  font-family: Verdana, sans-serif;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: bisque;
  color: #363636;
`;
const Menu = styled.div`
  background-color: #f58c47;
  height: 1.8em;
  display: flex;
  align-items: center;
  color: #1a1a1a;
  font-size: 0.8em;
  font-weight: 700;
`;
const ListItemWrapper = styled.div`
  padding: 0 0 0.8em 1.7em;
`;

const Icon = styled.span`
height: 1.2em
width: 1.2em
border: 1px solid #ffff;
color: #ffff;
display: flex;
align-items: center;
justify-content: center;
margin: 0 .5em 0 .15em;

`;

class ViewContainer extends Component {
  componentWillMount() {
    this.props.dispatch(fetchStatuses());
  }
  
  render() {
    if (this.props.data.length !== 0  ) {
      return (
        <Router>
        <Container>
          <Wrapper>
            <Menu>
              <Link to="/" style={{'textDecoration': 'none'}}>
              <Icon>Y</Icon>
              </Link>
              Hacker News
            </Menu>
            <ListItemWrapper>
              {this.props.data.stories.map((item, index)=> {
              return <ListItem 
              key={index}
              creator={item.creator}
              title={item.title}
              score={item.score}
              time={item.time}
              url={item.url}/>
              })}

            </ListItemWrapper>
          </Wrapper>
        </Container>
        </Router>
      );
    } 
    return null
 
  }
}

// ViewContainer.propTypes = {
//   dispatch: func.isRequired,
//   error: object,
//   data: objectOf(
//     shape({
//       stories: arrayOf(
//         shape({
//           creator: string,
//           score: number,
//           time: number,
//           title: string,
//           url: string,
//         })
//       ),
//       users: arrayOf(
//         shape({
//           created: string,
//           id: string,
//           karma: string,
//           submitted: number
//         })
//       ),
//     }),
//   )
// };

ViewContainer.defaultProps = {
  error: null,
  data: null
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
};

export default connect(mapStateToProps)(ViewContainer);
