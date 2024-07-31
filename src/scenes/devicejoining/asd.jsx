const columns = [
    {
      title: "Actions",
      field: "actions",
      width: 100,
      render: (rowData) => (
        <IconButton
          onClick={() => handleDelete(rowData)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];
  
  const handleDelete = (rowData) => {
    context.dispatch({ type: "DELETE_ROW", payload: rowData });
  };
  
  
  
 