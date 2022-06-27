import styled from "styled-components";
const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  font-size: 20px;

  .content-table {
    border-collapse: collapse;
    margin: 25px 0;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  .content-table thead tr {
    background-color: #009879;
    color: white;
    text-align: left;
    font-weight: bold;
  }
  .content-table th,
  .content-table td {
    padding: 12px 40px;
  }
  .content-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  .content-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  .content-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  .active-row {
    font-weight: bold;
    color: #009879;
  }
`;

export default Wrapper;
