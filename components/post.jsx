import styled from 'styled-components';
import './post.sass';

const Post = ({ body, clickHandler }) => (
  <Body className="Post" onClick={clickHandler}>{body}</Body>
);

const Body = styled.p`
  white-space: pre-wrap !important;
  border-radius: 4px;
  text-align: center;
  padding: 24px;
`;

export default Post;
