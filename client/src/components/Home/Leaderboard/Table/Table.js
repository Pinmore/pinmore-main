import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styles from './Table.css';

class Table extends Component {
  render() {
    return (
        <BootstrapTable className={styles.Table} data={this.props.data}>
          <TableHeaderColumn isKey dataField='rank' headerAlign="center" dataAlign='center'>
          Rank
          </TableHeaderColumn>
          <TableHeaderColumn dataField='player' headerAlign="center" dataAlign='center'>
          Player
          </TableHeaderColumn>
          <TableHeaderColumn dataField='points' headerAlign="center" dataAlign='center'>
          Points
          </TableHeaderColumn>
        </BootstrapTable>
    );
  }
}

export default Table;