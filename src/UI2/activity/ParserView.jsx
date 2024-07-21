import React from 'react'
import './ActivityView.css'
import InputField from './field-components/InputField'
import SelectField from './field-components/SelectField'
import CreateIcon from '@mui/icons-material/Create'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import ConstructionIcon from '@mui/icons-material/Construction'
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined'
import ActionButtons from './field-components/ActionButtons'
import UploadFileButton from './field-components/UploadFileButton'
import DataTable, {createTheme} from 'react-data-table-component'
import DownloadIcon from '@mui/icons-material/Download'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

createTheme('solarized', {
    text: {
      primary: 'white',
      secondary: 'white',
    },
    background: {
      default: '#001f16',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: 'white',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark')

const menuItems = [
    { value: 0, label: 'config 1' },
    { value: 1, label: 'onelink_config' },
]

const handleFileLoad = (content) => {
    console.log('File content loaded:', content)
}

const columns = [
	{
		name: 'Title',
		selector: row => row.title,
        sortable: true,
    },
	{
        name: 'Year',
		selector: row => row.year,
        sortable:true,
	},
]

const data = [
  	{
		id: 1,
		title: 'Item',
		year: '1988',
	},
	{
		id: 2,
		title: 'Item',
		year: '1984',
	},{
		id: 3,
		title: 'Item',
		year: '1985',
	},{
		id: 4,
		title: 'Item',
		year: '1986',
	},{
		id: 5,
		title: 'Item',
		year: '1987',
	},{
		id: 6,
		title: 'Item',
		year: '1988',
	},{
		id: 7,
		title: 'Item',
		year: '1989',
	},{
		id: 8,
		title: 'Item',
		year: '1990',
	},{
		id: 9,
		title: 'Item',
		year: '1991',
	},{
		id: 10,
		title: 'Item',
		year: '1992',
	},{
		id: 11,
		title: 'Item',
		year: '1993',
	},{
		id: 12,
		title: 'Item',
		year: '1994',
	},{
		id: 13,
		title: 'Item',
		year: '1995',
	},{
		id: 14,
		title: 'Item',
		year: '1986',
	},{
		id: 15,
		title: 'Item',
		year: '1984',
	},{
		id: 16,
		title: 'Item',
		year: '1984',
	},{
		id: 17,
		title: 'Item',
		year: '1984',
	},{
		id: 18,
		title: 'Item',
		year: '1984',
	},{
		id: 19,
		title: 'Item',
		year: '1984',
	},{
		id: 20,
		title: 'Item',
		year: '1984',
	},{
		id: 21,
		title: 'Item',
		year: '1984',
	},{
		id: 22,
		title: 'Item',
		year: '1984',
	},{
		id: 23,
		title: 'Item',
		year: '1984',
	},{
		id: 24,
		title: 'Item',
		year: '1984',
	},{
		id: 25,
		title: 'Item',
		year: '1984',
	},{
		id: 26,
		title: 'Item',
		year: '1984',
	},{
		id: 27,
		title: 'Item',
		year: '1984',
	},{
		id: 28,
		title: 'Item',
		year: '1984',
	},{
		id: 29,
		title: 'Item',
		year: '1984',
	},{
		id: 30,
		title: 'Item',
		year: '1984',
	},{
		id: 31,
		title: 'Item',
		year: '1984',
	},{
		id: 32,
		title: 'Item',
		year: '1984',
	},{
		id: 33,
		title: 'Item',
		year: '1984',
	},{
		id: 34,
		title: 'Item',
		year: '1984',
	},{
		id: 2,
		title: 'Item',
		year: '1984',
	},{
		id: 35,
		title: 'Item',
		year: '1984',
	},
    
]

function ParserView() {
    return (
        <div>
            <div className="view-container config-container">
                <UploadFileButton variant="outlined" text="Upload Data File" icon={<UploadFileIcon />} onFileLoad={handleFileLoad} />
                <UploadFileButton variant="outlined" text="Upload Configuration File" icon={<ConstructionIcon />} onFileLoad={handleFileLoad} />
                <SelectField menuItems={menuItems} text="Select Configuration" />
            </div>

            <div className="process-container">
                <div className="table-container" style={{ left: '9.5vw' }}>
					<h3>Parsed Data Table</h3>
					<DataTable
                        pagination
                        columns={columns}
                        data={data}
                        theme="solarized"
                    />
                </div>

                <div className="process-buttons-container">
                    <div className="grid-element">
                        <ActionButtons variant="outlined" text="Parse to Table" icon={<TableViewOutlinedIcon />} />
                    </div>

                    <div className="grid-element">
                        <ActionButtons variant="outlined" text="Download Excel File" icon={<DownloadIcon />} />
                        <ActionButtons variant="contained" text="Save Parsed Data to DB" icon={<CloudUploadOutlinedIcon />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParserView
