import DataTable from 'react-data-table-component';
import React from 'react'

export const Table = () => {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Position',
            selector: row => row.position,
            sortable: true,
        },
        {
            name: 'Office',
            selector: row => row.Office,
            sortable: true,
        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true,
        },
        
    ];
    
    const data = [
        {
            id: 1,
            name: 'Mohan',
            position: 'Web Designer',
            Office: 'Noida',
              age : '64'
        },
        {
            id: 2,
            name: 'Rahul',
            position: 'graphics designer',
            Office: 'gurgaon',
              age : '35'
        },
        {
            id: 3,
            name: 'Saurabh',
            position: 'Chief Executive Officer (CEO)',
            Office: 'hariyana',
              age : '25'
        },
        {
            id: 4,
            name: 'Muhammad',
            position: 'Seo',
            Office: 'ghazibad',
              age : '55'
        },
        {
            id: 5,
            name: 'Advik',
            position: 'Senior Javascript Developer',
            Office: 'lucknow',
              age : '65'
        },
        {
            id: 6,
            name: 'Krish',
            position: 'Pre-Sales Support',
            Office: 'noida',
              age : '60'
        },
        {
            id: 7,
            name: 'Veer',
            position: 'Accountant',
            Office: 'Delhi',
              age : '45'
        },
        
    ]
  
        return (
            <DataTable className='data-table-one'
                columns={columns}
                data={data}
            />
        );
    
  
}
