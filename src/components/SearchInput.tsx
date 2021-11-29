import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { Actions } from "../modules";

function SearchInput() {
  const dispatch = useDispatch();
  const search = useInput("");
  useEffect(() => {
    dispatch(Actions.GET_NEWS_SEARCH({ query: search.value, page: 0 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.value]);
  return (
    <Container>
      <input
        type="text"
        value={search.value}
        onChange={search.onChange}
        placeholder={"Please enter your keyword(s) to search."}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  > input {
    height: 50px;
    width: 80%;
    padding: 12px 24px;
    border: 1px solid #dddddd;
    font-size: 16px;
    box-shadow: 3px 3px 8px -2px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    margin: 40px 0 30px;
    > input {
      width: 100%;
      height: 40px;
      font-size: 14px;
    }
  }
`;

export default SearchInput;
