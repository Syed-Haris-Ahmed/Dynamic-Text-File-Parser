import React, { useState } from 'react'
import './Fields.css'
import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox, IconButton, TextField, Select, MenuItem, Button } from '@mui/material'
import { Add, Edit, Save, Delete } from '@mui/icons-material'

const EditableTable = ({ rows, setRows }) => {
  const [newRow, setNewRow] = useState({ index: '', name: '', type: 'Text' })
  const [selectAll, setSelectAll] = useState(false)
  const [showDeleteAll, setShowDeleteAll] = useState(false)
  const [isIndexAutoIncrement, setIsIndexAutoIncrement] = useState(true)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'index') {
      if (!/^\d*$/.test(value)) return
      setIsIndexAutoIncrement(value === '')
    }
    setNewRow({ ...newRow, [name]: value })
  }

  const handleSelectChange = (e) => {
    const { name, value } = e.target
    setNewRow({ ...newRow, [name]: value })
  }

  const handleAddRow = () => {
    const newIndex = isIndexAutoIncrement ? rows.length + 1 : parseInt(newRow.index, 10)
    let updatedRows
    if (rows.some(row => row.index === newIndex)) {
      updatedRows = rows.map(row => {
        if (row.index >= newIndex) {
          return { ...row, index: row.index + 1 }
        }
        return row
      })
      updatedRows = [...updatedRows, { ...newRow, index: newIndex, isEditing: false, isChecked: false }]
      updatedRows.sort((a, b) => a.index - b.index)
    } else {
      updatedRows = [...rows, { ...newRow, index: newIndex, isEditing: false, isChecked: false }]
    }
    setRows(updatedRows)
    setNewRow({ index: '', name: '', type: 'Text' })
    setIsIndexAutoIncrement(true)
  }

  const handleEditRow = (index) => {
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        return { ...row, isEditing: true }
      }
      return row
    })
    setRows(updatedRows)
  }

  const handleSaveRow = (index) => {
    const editedRow = rows[index]
    const newIndex = parseInt(editedRow.index, 10)

    if (index > rows.length - 1 || index < 0) {
        alert("Enter a valid index!");
        return
    }
  
    let updatedRows = rows.filter((_, i) => i !== index)

    updatedRows = updatedRows.map(row => {
      if (row.index >= newIndex) {
        return { ...row, index: row.index + 1 }
      }
      return row
    })
  
    updatedRows = [...updatedRows, { ...editedRow, index: newIndex, name: editedRow.name, type: editedRow.type, isEditing: false, isChecked: false }]
    updatedRows.sort((a, b) => a.index - b.index)
  
    const reindexedRows = updatedRows.map((row, i) => ({ ...row, index: i + 1 }))
  
    setRows(reindexedRows)
  }  

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index)
    const reindexedRows = updatedRows.map((row, i) => ({ ...row, index: i + 1 }))
    setRows(reindexedRows)
  }

  const handleRowChange = (index, e) => {
    const { name, value } = e.target
    if (name === 'index' && !/^\d*$/.test(value)) return
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        return { ...row, [name]: value }
      }
      return row
    })
    setRows(updatedRows)
  }

  const handleRowSelectChange = (index, e) => {
    const { name, value } = e.target
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        return { ...row, [name]: value }
      }
      return row
    })
    setRows(updatedRows)
  }

  const handleCheckboxChange = (index) => {
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        return { ...row, isChecked: !row.isChecked }
      }
      return row
    })
    setRows(updatedRows)
  }

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)
    const updatedRows = rows.map((row) => ({
      ...row,
      isChecked: newSelectAll,
    }))
    setRows(updatedRows)
    setShowDeleteAll(newSelectAll)
  }

  const handleDeleteAll = () => {
    setRows([])
    setSelectAll(false)
    setShowDeleteAll(false)
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h3>Configuration Table</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectAll}
                onChange={handleSelectAllChange}
                style={{ color: 'white' }}
              />
            </TableCell>
            <TableCell>Index</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>
              {showDeleteAll && (
                <Button onClick={handleDeleteAll} variant="contained" color="error">
                  Delete All
                </Button>
              )}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={row.isChecked}
                  onChange={() => handleCheckboxChange(index)}
                  style={{ color: 'white' }}
                />
              </TableCell>
              <TableCell>
                {row.isEditing ? (
                  <TextField
                    type="number"
                    name="index"
                    value={row.index}
                    onChange={(e) => handleRowChange(index, e)}
                    variant="standard"
                    inputMode="numeric"
                    InputProps={{ style: { color: 'white' } }}
                    sx={{
                      '& .MuiInputLabel-root': { color: 'white' },
                      '&:hover .MuiInputLabel-root': { color: '#92ffdf' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#00e9a2' },
                      '& .MuiInputLabel-root.Mui-focused:hover:': { color: '#00e9a2' },
                      '& .MuiInputBase-root': { color: 'white' },
                      '& .MuiInputBase-input:hover': { color: '#92ffdf' },
                      '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#dcfff5' },
                      '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                      '& .MuiInput-underline:after': { borderBottomColor: '#00e9a2' },
                    }}
                  />
                ) : (
                  row.index
                )}
              </TableCell>
              <TableCell>
                {row.isEditing ? (
                  <TextField
                    type="text"
                    name="name"
                    value={row.name}
                    onChange={(e) => handleRowChange(index, e)}
                    variant="standard"
                    InputProps={{ style: { color: 'white' } }}
                    sx={{
                      '& .MuiInputLabel-root': { color: 'white' },
                      '&:hover .MuiInputLabel-root': { color: '#92ffdf' },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#00e9a2' },
                      '& .MuiInputLabel-root.Mui-focused:hover:': { color: '#00e9a2' },
                      '& .MuiInputBase-root': { color: 'white' },
                      '& .MuiInputBase-input:hover': { color: '#92ffdf' },
                      '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#dcfff5' },
                      '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                      '& .MuiInput-underline:after': { borderBottomColor: '#00e9a2' },
                    }}
                  />
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell>
                {row.isEditing ? (
                  <Select
                    name="type"
                    value={row.type}
                    onChange={(e) => handleRowSelectChange(index, e)}
                    variant="standard"
                    style={{ color: 'white' }}
                    inputProps={{ style: { color: 'white' } }}
                    sx={{ '& .MuiSelect-select': { color: 'white' } }}
                  >
                    <MenuItem value="Text">Text</MenuItem>
                    <MenuItem value="Numeric">Numeric</MenuItem>
                    <MenuItem value="Date">Date</MenuItem>
                  </Select>
                ) : (
                  row.type
                )}
              </TableCell>
              <TableCell>
                {row.isEditing ? (
                  <IconButton onClick={() => handleSaveRow(index)} style={{ color: 'white' }}>
                    <Save />
                  </IconButton>
                ) : (
                  <>
                    <IconButton onClick={() => handleEditRow(index)} style={{ color: 'white' }}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteRow(index)} style={{ color: 'white' }}>
                      <Delete />
                    </IconButton>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                disabled
                style={{ color: 'white' }}
              />
            </TableCell>
            <TableCell>
              <TextField
                type="number"
                name="index"
                value={newRow.index}
                onChange={handleInputChange}
                placeholder="Index"
                variant="standard"
                inputMode="numeric"
                InputProps={{ style: { color: 'white' } }}
                sx={{
                  '& .MuiInputLabel-root': { color: 'white' },
                  '&:hover .MuiInputLabel-root': { color: '#92ffdf' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00e9a2' },
                  '& .MuiInputLabel-root.Mui-focused:hover:': { color: '#00e9a2' },
                  '& .MuiInputBase-root': { color: 'white' },
                  '& .MuiInputBase-input:hover': { color: '#92ffdf' },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#dcfff5' },
                  '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#00e9a2' },
                }}
              />
            </TableCell>
            <TableCell>
              <TextField
                type="text"
                name="name"
                value={newRow.name}
                onChange={handleInputChange}
                placeholder="Name"
                variant="standard"
                InputProps={{ style: { color: 'white' } }}
                sx={{
                  '& .MuiInputLabel-root': { color: 'white' },
                  '&:hover .MuiInputLabel-root': { color: '#92ffdf' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#00e9a2' },
                  '& .MuiInputLabel-root.Mui-focused:hover:': { color: '#00e9a2' },
                  '& .MuiInputBase-root': { color: 'white' },
                  '& .MuiInputBase-input:hover': { color: '#92ffdf' },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#dcfff5' },
                  '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#00e9a2' },
                }}
              />
            </TableCell>
            <TableCell>
              <Select
                name="type"
                value={newRow.type}
                onChange={handleSelectChange}
                variant="standard"
                style={{ color: 'white' }}
                inputProps={{ style: { color: 'white' } }}
                sx={{ '& .MuiSelect-select': { color: 'white' } }}
              >
                <MenuItem value="Text">Text</MenuItem>
                <MenuItem value="Numeric">Numeric</MenuItem>
                <MenuItem value="Date">Date</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <IconButton onClick={handleAddRow} style={{ color: 'white' }}>
                <Add />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default EditableTable
