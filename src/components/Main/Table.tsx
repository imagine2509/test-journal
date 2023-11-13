import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useAppSelector } from '../../App/redux/hooks'

const Table = () => {
  const paginatorLeft = (
    <Button type='button' icon='pi pi-refresh' className='p-button-text' />
  )
  const paginatorRight = (
    <Button type='button' icon='pi pi-cloud' className='p-button-text' />
  )
  const tableValue = useAppSelector((state) => state.eventsState)

  return (
    <div className='card'>
      <DataTable
        value={tableValue}
        paginator
        paginatorTemplate='CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
        currentPageReportTemplate='Showing {first} to {last} of {totalRecords}'
        rows={10}
        rowsPerPageOptions={[10, 20, 50]}
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}>
        <Column field='Date' header='Дата' style={{ width: '25%' }}></Column>
        <Column
          field='importance'
          header='Важность'
          style={{ width: '10%' }}></Column>
        <Column
          field='equipment'
          header='Оборудование'
          style={{ width: '10%' }}></Column>
        <Column
          field='message'
          header='Сообщение'
          style={{ width: '40%' }}></Column>
        <Column
          field='responsible'
          header='Ответственный'
          style={{ width: '15%' }}></Column>
      </DataTable>
    </div>
  )
}

export default Table
