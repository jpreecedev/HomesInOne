import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import Table, {
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'

import TablePaginationActions from 'Shared/TablePaginationActions'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  hover: {
    cursor: 'pointer'
  }
})

class MaterialTable extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      data: props.data,
      columnMap: props.columnMap,
      page: 0,
      rowsPerPage: 5
    }

    this.handleChangePage = this.handleChangePage.bind(this)
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
    this.handleRowClick = this.handleRowClick.bind(this)
  }

  handleChangePage(event, page) {
    this.setState({ page })
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value })
  }

  handleRowClick(event, selectedData) {
    if (this.props.rowClicked) {
      this.props.rowClicked(selectedData)
    }
  }

  render() {
    const { classes } = this.props
    const { data, columnMap, rowsPerPage, page } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {Object.keys(columnMap).map(column => {
                  return <TableCell key={column}>{columnMap[column]}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                return (
                  <TableRow
                    key={n.id}
                    hover
                    className={classes.hover}
                    onClick={event => this.handleRowClick(event, n)}
                  >
                    {Object.keys(columnMap).map(key => {
                      return <TableCell key={key}>{n[key]}</TableCell>
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  Actions={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    )
  }
}

MaterialTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
  columnMap: PropTypes.object.isRequired,
  rowClicked: PropTypes.func
}

export default withStyles(styles)(MaterialTable)
