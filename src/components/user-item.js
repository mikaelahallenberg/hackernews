import React from "react";
import { arrayOf, shape, string, bool } from "prop-types";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";



const Container = styled.div`
  margin: 0.5em 0;
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  color: #828282;
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 6em;
`;

const Paragraph = styled.p`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;
const Span = styled.span`
  margin-left: 0.5rem;

`;

const UserItem = data => {
  return (
      <Container>
        <Wrapper>
         <Paragraph>user: <Span>fsfs{data.creator}</Span></Paragraph>
          <Paragraph>time: <Span>eer{data.time}</Span></Paragraph>
          <Paragraph>karma: <Span>fsfs{data.karma}</Span></Paragraph>
          <Paragraph>about: <Span>submissions{data.submissions}</Span></Paragraph>
        </Wrapper>
      </Container>
  );
};


// UserItem.propTypes = {
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

UserItem.defaultProps = {
  error: null,
  data: null
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
}

export default connect(mapStateToProps)(UserItem);