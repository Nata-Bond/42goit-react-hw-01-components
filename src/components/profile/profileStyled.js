import styled from "styled-components";

const Profilediv = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 70px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px rgb(224, 223, 223);
  border: 1px solid darkgrey;

  img {
    width: 150px;
    border-radius: 50%;
    padding-top: 25px;
  }

  .name {
    font-size: 20px;
    font-weight: bold;
  }

  .tag,
  .location {
    font-size: 16px;
    color: grey;
  }

  .stats {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    padding-left: 0;
    background-color: rgb(224, 223, 223);
    border-top: 1px solid darkgrey;
  }
  li {
    height: 76px;
    width: 100px;
    text-align: center;
    padding-top: 25px;
  }

  li:not(:last-child) {
    border-right: 1px solid darkgrey;
  }

  .label {
    display: block;
    color: grey;
  }

  .quantity {
    color: black;
    font-weight: bold;
  }
`;

export { Profilediv };
