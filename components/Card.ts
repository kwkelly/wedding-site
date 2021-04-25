import styled from "styled-components";

export const Thumbnail = styled.img`
  max-width: 75px;
  max-height: 75px;
  grid-area: thumbnail;
  align-self: center;
  margin-right: 1rem;
`;

export const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 1rem;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "thumbnail  header"
    "body       body";
`;

export const Header = styled.h3`
  grid-area: header;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const Body = styled.div`
  grid-area: body;
`;
