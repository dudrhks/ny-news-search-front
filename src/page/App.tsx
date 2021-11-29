import React, { useState } from "react";
import styled from "styled-components";
import BookMarkList from "../components/BookMarkList";
import NewsList from "../components/NewsList";
import SearchInput from "../components/SearchInput";
import GlobalStyle from "../styles/GlobalStyles";

function App() {
  const [bookmark, setBookmark] = useState(false);

  const onBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <Container>
      <GlobalStyle />
      <button onClick={onBookmark} className="btn__bookmark">
        {bookmark ? "NEW LIST" : "BOOK MARK"}
      </button>
      {bookmark && <BookMarkList />}
      {!bookmark && (
        <>
          <SearchInput />
          <NewsList />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 0 5%;
  > .btn__bookmark {
    border: 1px solid #cfcfcf;
    border-top: 0;
    background-color: yellowgreen;
    color: #fff;
    padding: 20px 36px;
    cursor: pointer;
  }
`;

export default App;
