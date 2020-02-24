import React, { Fragment } from "react";
import ReactTable from "react-table";
import { CSVLink } from "react-csv";

import "react-table/react-table.css";

function Table(props) {
  let table = (
    <Fragment>
      <ReactTable
        columns={props.columns}
        data={props.data}
        defaultPageSize={3}
        showPagination={true}
        resizable={false}
        previousText="Previous"
        nextText="Next"
        pageSizeOptions={[5, 10, 20, 40, 80, 160]}
        filterable={true}
        loading={false}
        sortable={true}
        minRows={1}
        getTheadFilterThProps={() => {
          return {
            style: { overflow: "visible", textAlign: "left" }
          };
        }}
      />

      <CSVLink data={props.data}>Download My Project List</CSVLink>
    </Fragment>
  );
  
  return table;
}
export default Table;
