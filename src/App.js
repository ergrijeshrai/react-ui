import React from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Navbar} from './Navbar';
import {Sidebar} from './Sidebar'
import { Table } from './Table';
import { Footer } from './Footer';
import { Graphqlpage } from './Graphqlpage';
import { from } from '@apollo/client';

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar/>
      <div className='container'>
      <div className='row'>
        
        <div className='col-md-6 pb-5'>

          <Table />
        </div>
        <div className='col-md-6 mt-5'>
         <Graphqlpage/>
       
        </div>
        </div>
      </div>
      <div className='container-fluid px-0'>
       
        <Footer/>
       
      </div>
    </div>
  );
}

export default App;
