import React from "react";
import { number, string } from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import Menu from '../components/menu';

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
  flex-direction: column;
  width: 7em;
  padding: 0.8em 1.7em;

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
  console.log("moi");
  return (
    <Container>
      <Menu />
      <Wrapper>
        <Paragraph>
          user: <Span>fsfs{data.creator}</Span>
        </Paragraph>
        <Paragraph>
          time: <Span>eer{data.time}</Span>
        </Paragraph>
        <Paragraph>
          karma: <Span>fsfs{data.karma}</Span>
        </Paragraph>
        <Paragraph>
          about: <Span>submissions{data.submissions}</Span>
        </Paragraph>
      </Wrapper>
    </Container>
  );
};

UserItem.propTypes = {
  creator: string,
  karma: number,
  time: number,
  submissions: string
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
};

export default connect(mapStateToProps)(UserItem);
