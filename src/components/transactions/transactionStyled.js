import styled from "styled-components";

const Table = styled.table`
  width: 400px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  thead {
    background: #00bcd5;
    text-transform: uppercase;
    color: #fff;
  }
  th,
  td {
    height: 50px;
  }

  .tdGray {
    background: #ecf1f4;
    text-transform: uppercase;
    color: #a8a9ab;
  }
  .tdWhite {
    background: #fff;
    text-transform: uppercase;
    color: #a8a9ab;
  }
`;

export { Table };
