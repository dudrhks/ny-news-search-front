import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Actions, useTypedSelector } from "../modules";
import ListItem from "./common/ListItem";

function NewsList() {
  const dispatch = useDispatch();
  const { newsList, query, page } = useTypedSelector((state) => state.common);
  const fetchGetNewsMore = () => {
    dispatch(Actions.GET_NEWS_MORE({ query, page: page + 1 }));
  };

  return (
    <Container>
      <ul className="newsList">
        {newsList.map((item) => (
          <ListItem
            key={item._id}
            id={item._id}
            title={item.headline.main}
            paragraph={item.lead_paragraph}
            imgUrl={item.multimedia[0]?.url}
          />
        ))}
      </ul>
      <div className="btn__wrap">
        <button type="button" onClick={fetchGetNewsMore}>
          More News
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  > .newsList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  > .btn__wrap {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    > button {
      width: 200px;
      margin-bottom: 50px;
      border: 1px solid #ddd;
      color: #666;
      padding: 10px 50px;
      border-radius: 50px;
      cursor: pointer;
      box-shadow: 1px 1px 11px 0px rgba(0, 0, 0, 0.2);
    }
  }
  @media (max-width: 960px) {
    > .newsList {
      grid-template-columns: repeat(3, 1fr);
    }
    > .btn__wrap {
      margin-top: 40px;
      > button {
        width: 40%;
      }
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
    > .btn__wrap {
      > button {
        width: 50%;
      }
    }
  }
`;

export default NewsList;
