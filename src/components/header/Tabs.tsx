import { TabMenu } from 'primereact/tabmenu'
import { MenuItem } from 'primereact/menuitem'

const tabsText: MenuItem[] = [{ label: 'Таблица' }, { label: 'Карточки' }]

const Tabs = () => {
  return (
    <nav className='navbar'>
      <TabMenu model={tabsText} />
    </nav>
  )
}

export default Tabs
