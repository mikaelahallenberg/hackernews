import React, { Component } from "react";
import { string, number } from "prop-types";
import { connect } from "react-redux";
import ListItem from "../components/list-item";
import fetchStatuses from "../actions/story-action";
import styled from "styled-components";
import Menu from "../components/menu";
const moment = require("moment");

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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  cursor: pointer;
  margin-top: -1.5rem;
  color: #1a1a1a;
  border: none;
  background-color: transparent;
`;

const ListItemWrapper = styled.div`
  padding: 0.8em 1.7em;
`;

class ViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByScore: false
    };
    this.props.dispatch(fetchStatuses());
  }

  sortStories() {
    this.setState({sortByScore: !this.state.sortByScore})
  }

  render() {
    if (this.props.data.length !== 0) {

      let stories;
      if (this.state.sortByScore) {
        stories = this.props.data.stories.slice().sort(
          (a, b) => parseFloat(b.score) - parseFloat(a.score)
        );
      } else {
        stories = this.props.data.stories.slice()
      }

      return (
        <Container>
          <Wrapper>
            <Menu />
            <ButtonWrapper>
              <Button onClick={() => this.sortStories()}>
                {this.state.sortByScore ? "| unsort |" : "| sort by best score |"}
              </Button>
            </ButtonWrapper>
            <ListItemWrapper>
              {stories.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    creator={item.creator}
                    title={item.title}
                    score={item.score}
                    time={moment(moment.unix(item.time).format()).fromNow()}
                    url={item.url}
                  />
                );
              })}
            </ListItemWrapper>
          </Wrapper>
        </Container>
      );
    }
    return null;
  }
}

ViewContainer.propTypes = {
  creator: string,
  score: number,
  time: number,
  title: string,
  url: string
};

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
