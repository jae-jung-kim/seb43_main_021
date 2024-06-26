import React from "react";
import styled from "styled-components";

const ItemBody = ({
  title,
  text,
  showTitleWarning,
  showTextWarning,
  handleTitleChange,
  handleTextChange,
}) => {
  return (
    <ItemBodyContainer>
      <Title>
        <input placeholder="제목" value={title} onChange={handleTitleChange} />
        {showTitleWarning && <Warning>제목을 입력해주세요.</Warning>}
      </Title>
      <TextArea>
        <textarea
          placeholder="경매 등록할 게시글의 내용을 입력해주세요."
          value={text}
          onChange={handleTextChange}
        />
        {showTextWarning && <Warning>게시글 내용을 입력해주세요.</Warning>}
      </TextArea>
    </ItemBodyContainer>
  );
};

export default ItemBody;

const ItemBodyContainer = styled.div``;

const Title = styled.div`
  padding: 2rem 0rem;
  border-bottom: 1px solid var(--white2-color);
  outline: none;

  input {
    border: none;
    outline: none;
    font-size: 25px;
    width: 100%;
  }

  input::placeholder {
    color: var(--white4-color);
  }
`;

const TextArea = styled.div`
  padding: 2.2rem 0 1.5rem 0;
  border-bottom: 1px solid var(--white2-color);

  textarea {
    width: 100%;
    height: 12rem;
    box-sizing: border-box;
    border: 2px solid var(--black1-color);
    border-radius: 5px;
    font-size: 16px;
    resize: none;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
  }

  textarea::placeholder {
    color: var(--white4-color);
  }
`;

const Warning = styled.div`
  color: var(--red1-color);
  font-size: 13px;
`;
