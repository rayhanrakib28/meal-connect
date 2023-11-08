import { useState } from 'react';
import { Sheet, Table, Avatar, Stack, Button, IconButton } from '@mui/joy';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { Link } from 'react-router-dom';

import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

const columnHelper = createColumnHelper();

const handleDelete = id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FF6C22',
        cancelButtonColor: '#2e355a',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://meal-connect-server.vercel.app/api/v1/user/services/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Food has been deleted.',
                            'success'
                        )
                        window.location.href = '/manage-foods';
                    }
                })
        }
    })

}

const columns = [
    columnHelper.accessor('FoodName', {
        id: 'FoodName',
        header: 'Food Name',
    }),
    columnHelper.accessor('ExpiredDate', {
        id: 'ExpiredDate',
        header: 'Expired Date',
    }),
    columnHelper.accessor('FoodQuantity', {
        id: 'FoodQuantity',
        header: 'Food Quantity',
    }),
    columnHelper.accessor('action', {
        id: 'action',
        header: <p style={{ textAlign: 'center' }}>Actions</p>,
        cell: ({ row }) => (
            <Stack justifyContent={'center'} direction={'row'} spacing={1}>
                <IconButton component={Link} to={`${row.original._id}`}>
                    <ManageSearchIcon />
                </IconButton>
                <IconButton
                    component={Link}
                    to={`update/${row.original._id}`}
                    color="success"
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    onClick={() => { handleDelete(row.original._id)}}
                    color="danger"
                >
                    <DeleteIcon />
                </IconButton>
            </Stack>
        ),
    }),
];

const ManageFoodsTable = ({ manageFoods }) => {
    const [expanded, setExpanded] = useState({});
    const data = manageFoods;
    const table = useReactTable({
        data,
        columns,
        state: {
            expanded,
        },
        getSubRows: (row) => row.subRows,
        onExpandedChange: setExpanded,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
    });
    // console.log(data);
    return (
        <>
            <Button component={Link} to="/addfood" sx={{ mb: 2 }}>
                Add Food
            </Button>
            <Sheet sx={{ borderRadius: 10 }}>
                <Table size="lg">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <th key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
        </>
    );
};

export default ManageFoodsTable;