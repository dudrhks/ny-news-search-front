import React from "react";
import styled from "styled-components";
import { useTypedSelector } from "../modules";
import ListItem from "./common/ListItem";

function BookMarkList() {
  const { bookmarkList } = useTypedSelector((state) => state.common);
  return (
    <Container>
      <ul className="newsList">
        {bookmarkList.map((item) => (
          <ListItem
            key={item._id}
            id={item._id}
            title={item.headline.main}
            paragraph={item.lead_paragraph}
            imgUrl={item.multimedia[0].url}
          />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 80px;
  > .newsList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media (max-width: 960px) {
    > .newsList {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (max-width: 768px) {
    > .newsList {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 15px;
      grid-row-gap: 15px;
    }
  }
  @media (max-width: 480px) {
    > .newsList {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 10px;
    }
  }
`;
export default BookMarkList;
