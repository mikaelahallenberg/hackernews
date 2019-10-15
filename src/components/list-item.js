import React from "react";
import { arrayOf, shape, string, bool } from "prop-types";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserItem from "../components/user-item";

const Container = styled.div`
  margin: 0.5em 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;
const Subtext = styled.div`
  color: #828282;
  font-size: 0.7em;
`;
const Story = styled.a`
  font-size: 0.9em;
  color: #363636;
`;

const ListItem = data => {
  return (
    <Router>
      <Container>
        <Wrapper>
          <Story href={data.url} target="_blank" noopener noreferrer>
            {data.title}
          </Story>
          <Subtext>
            {data.score} points by
            <Link
              to={`/user?id=${data.creator}`}
              style={{ textDecoration: "none" }}
            >
              {" "}
              {data.creator}{" "}
            </Link>
            {data.time} 5h ago
          </Subtext>
        </Wrapper>
      </Container>
      <Switch>
        <Route path={`/user?id=${data.creator}`}>
          <UserItem />
        </Route>
      </Switch>
    </Router>
  );
};

// ListItem.propTypes = {
//   data: arrayOf(
//     shape({
//       statuses: arrayOf(
//         shape({
//           name: string,
//           status: bool
//         })
//       )
//     })
//   )
// };
export default ListItem;
