import React from 'react';
import {
  Checkbox,
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from 'carbon-components-react';

export const CustomDataTable = () => {
  const rows = [
    {
      id: 'a',
      name: 'Load Balancer 3',
      protocol: 'HTTP',
      port: 3000,
      rule: 'Round robin',
      attached_groups: 'Kevin’s VM Groups',
      status: 'Disabled',
      enabled: true,
    },
    {
      id: 'b',
      name: 'Load Balancer 1',
      protocol: 'HTTP',
      port: 443,
      rule: 'Round robin',
      attached_groups: 'Maureen’s VM Groups',
      status: 'Starting',
      enabled: true,
    },
    {
      id: 'c',
      name: 'Load Balancer 2',
      protocol: 'HTTP',
      port: 80,
      rule: 'DNS delegation',
      attached_groups: 'Andrew’s VM Groups',
      status: 'Active',
      enabled: false,
    },
  ];

  const headers = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'protocol',
      header: 'Protocol',
    },
    {
      key: 'port',
      header: 'Port',
    },
    {
      key: 'rule',
      header: 'Rule',
    },
    {
      key: 'attached_groups',
      header: 'Attached Groups',
    },
    {
      key: 'status',
      header: 'Status',
    },
    {
      key: 'enabled',
      header: 'Enabled',
    },
  ];

  return (
    <DataTable rows={rows} headers={headers}>
      {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getTableProps,
          getTableContainerProps,
        }) => (
        <TableContainer
          className="data-table1"
          title="DataTable"
          description="With boolean column"
          {...getTableContainerProps()}>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader key={header.key} {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} {...getRowProps({ row })}>
                  {row.cells.map((cell) => {
                    if (cell.info.header === 'enabled') {
                      return (
                        <TableCell
                          key={cell.id}
                          id={cell.id}
                          className={`la-${cell.info.header}`}>
                          <Checkbox
                            id={'check-' + cell.id}
                            hideLabel
                            labelText="checkbox"
                          />
                        </TableCell>
                      );
                    } else {
                      return <TableCell key={cell.id}>{cell.value}</TableCell>;
                    }
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  );
};