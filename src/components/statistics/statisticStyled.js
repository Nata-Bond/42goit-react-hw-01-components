import styled from "styled-components";

const Section = styled.section`
  color: black;
  width: 300px;
  display: block;
  margin: auto;
  margin-bottom: 70px;
  text-align: center;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 50%);
  border-top: 0.5px solid lightgray;
  border-left: 0.5px solid lightgray;

  .stat-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    padding: 0;
  }
`;

const Item = styled.li`
  height: 60px;
  width: 60px;
  display: inline-block;
  text-align: center;
  padding-top: 20px;
  background-color: ${(props) => props.rColor()};

  .label,
  .percentage {
    display: block;
    text-align: center;
  }
`;

export { Section, Item };
