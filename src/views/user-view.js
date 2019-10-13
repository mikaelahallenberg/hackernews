import React from "react";
import { string, func, shape, arrayOf, objectOf, object, number } from "prop-types";
import { connect } from "react-redux";
import ListItem from "../components/list-item";
import fetchStatuses from '../actions/story-action';
import styled from 'styled-components';

const Container = styled.section`
display: flex;
max-width: 40em;
flex-direction: column;
`;
const Wrapper = styled.div`
width: 32em;
display: flex;
justify-content: space-between;
`;
const Heading = styled.h1`
font-size: 1.6em;
color: 
`;
const UserView = () => {
   
    return (
      <Container>
        user view
        {/* <Wrapper>
        {this.props.data.map((item, i) => {
          return <ListItem 
            key={i} 
            provider={item.provider}
            pending={item.pending}
            statuses={item.statuses}/>
          })}
        </Wrapper> */}
      </Container>
    );
}
  


// UserView.propTypes = {
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

UserView.defaultProps = {
  error: null,
  data: null
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
}

export default connect(mapStateToProps)(UserView);