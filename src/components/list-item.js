import React from "react";
import { string, number } from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Container>
        <Wrapper>
          <Story href={data.url} target="_blank" noopener noreferrer>
            {data.title}
          </Story>
          <Subtext>
            {data.score} points by
            <Link
              to={`/${data.creator}`}
              style={{ textDecoration: "none" }}>
              {" "}{data.creator}{" "}
            </Link>
            posted at {data.time}
          </Subtext>
        </Wrapper>
      </Container>
  );
};

ListItem.propTypes = {
  creator: string,
  score: number,
  time: string,
  title: string,
  url:string
};
export default ListItem;
