import { EventType } from './types'

type ResponseMessagesFormat = {
  id: string
  qoute: string
  author: string
}

type ImportanceType = Pick<EventType, 'importance'>

async function getMessages(): Promise<string[]> {
  const res = await fetch('https://dummyjson.com/quotes')
  const messagesObj = await res.json()
  const messages: string[] = []
  messagesObj.map((messageObj: ResponseMessagesFormat) => {
    messages.push(messageObj.qoute)
  })
  return messages
}

async function getEmployees(): Promise<string[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  const names = data.map((employee) => employee.name)
  return names
}

async function getEquip(): Promise<string[]> {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  const equip = data.map((item) => item.title)
  return equip
}

export async function setData(): Promise<EventType[]> {
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const importanceArr: ImportanceType[] = []
  const messages = await getMessages()
  const employees = await getEmployees()
  const equipment = await getEquip()
  for (let i = 0; i < messages.length; i += 1) {
    const ind = getRandomInt(0, 3)
    let importance: ImportanceType = { importance: 'Низкая' }
    switch (ind) {
      case 0:
        importance = { importance: 'Низкая' }
        break
      case 1:
        importance = { importance: 'Средняя' }
        break
      case 2:
        importance = { importance: 'Высокая' }
        break
      case 3:
        importance = { importance: 'Критическая' }
        break
      default:
        break
    }
    importanceArr.push(importance)
  }
  const data: EventType[] = []
  for (let i = 0; i < messages.length; i += 1) {
    data.push({
      id: i,
      added: new Date().toDateString(),
      importance: importanceArr[i].importance,
      message: messages[i],
      isReaded: false,
      responsibleEmployee: employees[getRandomInt(0, 9)],
      equip: equipment[getRandomInt(0, 29)],
      employeePhoto: '',
    })
  }
  return data
}
