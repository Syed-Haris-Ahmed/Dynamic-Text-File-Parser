import React, { useState } from 'react'
import './Fields.css'

const EditableTable = () => {
  const [rows, setRows] = useState([])
  const [newRow, setNewRow] = useState({ index: '', name: '', type: 'text' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewRow({ ...newRow, [name]: value })
  }

  const handleSelectChange = (e) => {
    const { name, value } = e.target
    setNewRow({ ...newRow, [name]: value })
  }

  const handleAddRow = () => {
    setRows([...rows, { ...newRow, isEditing: false }])
    setNewRow({ index: '', name: '', type: 'text' })
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
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        return { ...row, isEditing: false }
      }
      return row
    })
    setRows(updatedRows)
  }

  const handleRowChange = (index, e) => {
    const { name, value } = e.target
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

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h3>Configuration Table</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                {row.isEditing ? (
                  <input
                    type="text"
                    name="index"
                    value={row.index}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                ) : (
                  row.index
                )}
              </td>
              <td>
                {row.isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={row.name}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                ) : (
                  row.name
                )}
              </td>
              <td>
                {row.isEditing ? (
                  <select
                    name="type"
                    value={row.type}
                    onChange={(e) => handleRowSelectChange(index, e)}
                  >
                    <option value="text">Text</option>
                    <option value="numeric">Numeric</option>
                    <option value="date">Date</option>
                  </select>
                ) : (
                  row.type
                )}
              </td>
              <td>
                {row.isEditing ? (
                  <button onClick={() => handleSaveRow(index)}>Save</button>
                ) : (
                  <button onClick={() => handleEditRow(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="index"
                value={newRow.index}
                onChange={handleInputChange}
                placeholder="Index"
              />
            </td>
            <td>
              <input
                type="text"
                name="name"
                value={newRow.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
            </td>
            <td>
              <select
                name="type"
                value={newRow.type}
                onChange={handleSelectChange}
              >
                <option value="text">Text</option>
                <option value="numeric">Numeric</option>
                <option value="date">Date</option>
              </select>
            </td>
            <td>
              <button onClick={handleAddRow}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EditableTable
