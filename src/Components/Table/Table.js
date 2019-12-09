import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

function Table(props){

    let table=(
        <ReactTable 
            columns={props.columns}
            data = {props.data}
            defaultPageSize={3}
            showPagination={true} resizable={false} 
            previousText='Previous' nextText='Next' 
            pageSizeOptions={[5, 10, 20, 40, 80, 160]} 
            filterable={true} loading={false} 
            sortable={true} minRows={1}
        />
    )
    return table;

}
export default Table;