/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styled from "styled-components";
import { BsBookmarkHeartFill, BsBookmarkHeart } from "react-icons/bs";
import Modal from "./Modal";
import { Actions, useTypedSelector } from "../../modules";
import { useDispatch } from "react-redux";

type ListItemProps = {
  id: string;
  title: string;
  paragraph: string;
  imgUrl?: string;
};

function ListItem({ id, title, paragraph, imgUrl }: ListItemProps) {
  const dispatch = useDispatch();
  const { bookmarkList } = useTypedSelector((state) => state.common);
  const [modal, setModal] = useState(false);
  // 북마크 추가하기
  const fetchAddBookmark = () => {
    dispatch(Actions.ADD_BOOKMARK({ id }));
  };
  const onModal = () => {
    setModal(!modal);
    if (modal) {
      dispatch(Actions.DELETE_BOOKMARK({ id }));
    }
  };
  const selectBookMark = bookmarkList.filter((x) => x._id === id).length !== 0;

  return (
    <>
      <Item>
        <div className="btn__wrapper">
          {selectBookMark ? (
            <button onClick={onModal}>
              <BsBookmarkHeartFill size={28} color={"yellowgreen"} />
            </button>
          ) : (
            <button onClick={fetchAddBookmark}>
              <BsBookmarkHeart size={28} />
            </button>
          )}
        </div>
        {imgUrl && (
          <div className="thumbnail">
            <img src={`https://www.nytimes.com/${imgUrl}`} />
          </div>
        )}

        <div className="item__content">
          <h3>{title}</h3>
          <p>{paragraph.length > 30 ? paragraph.substr(0, 30) : paragraph}</p>
          {paragraph.length > 30 && <span>...more</span>}
        </div>
      </Item>
      {modal && <Modal onClose={onModal} />}
    </>
  );
}

const Item = styled.li`
  flex-grow: 2;
  padding: 24px 0;
  box-shadow: 1px 1px 11px 0px rgba(0, 0, 0, 0.2);
  > .btn__wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 7px;
    > button {
      cursor: pointer;
    }
  }
  > .thumbnail {
    width: 100%;
    height: 150px;
    margin-bottom: 12px;
    > img {
      object-fit: cover;
    }
  }

  > .item__content {
    padding: 0 24px;
    > h3 {
      min-height: 100px;
      font-size: 22px;
      line-height: 1.4em;
      font-weight: bold;
      height: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    > p {
      margin-top: 10px;
      font-size: 16px;
      color: #666;
      margin-bottom: 8px;
    }
    > span {
      color: #c7c7c7;
    }
  }

  // 모바일
  @media (max-width: 768px) {
    padding: 12px 0;
    > .thumbnail {
      height: 100px;
    }
    > .item__content {
      padding: 0 12px;
      > h3 {
        font-size: 20px;
        height: 110px;
      }
      > p {
        font-size: 14px;
        margin-top: 24px;
      }
    }
  }
  @media (max-width: 480px) {
    > .item__content {
      > h3 {
        -webkit-line-clamp: 5;
      }
    }
  }
`;

export default ListItem;
