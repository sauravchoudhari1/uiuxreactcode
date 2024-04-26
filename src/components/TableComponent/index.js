import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./table.css";

const columns = [
  { field: 'id', headerName: 'Sr No',width:"90" },
  { field: 'heading1', headerName: 'Heading1',width:"150"},
  { field: 'heading2', headerName: 'Heading2',width:"150"},
  { field: 'heading3', headerName: 'Heading3',width:"150"},
  { field: 'heading4', headerName: 'Heading4',width:"150"},
  { field: 'heading5', headerName: 'Heading5',width:"150"},
  { field: 'heading6', headerName: 'Heading6',width:"150"},
];

const rows = [
  { id: 1, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 2, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 3, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 4, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 5, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 6, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 7, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 8, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 9, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 10, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 11, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 12, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 13, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 14, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
  { id: 15, heading1: 'item', heading2: 'item', heading3: "item", heading4: "item", heading5: "item", heading6: "item" },
];

export default function TableComponent() {
  return (
    <div style={{ height: 370, width: '100%' ,marginTop:'20px',backgroundColor:"white"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        headerClassName="custom-header"
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        sx={{justifyContent:"space-between"}}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}