import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin-left: 206px;
  margin-bottom: 100px;
  padding-left: 0;
`;

const ListItem = styled.li`
  width: 300px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 50%);

  .status {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => (props.isOnline ? "green" : "red")};
    margin-right: 15px;
  }

  .name {
    margin-left: 20px;
  }
`;

export { List, ListItem };
