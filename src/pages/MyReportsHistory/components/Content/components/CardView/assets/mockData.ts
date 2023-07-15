import { v4 as uuidv4 } from 'uuid'

interface Props {
  report: string
  lastUpdated: string
  taskNumber: number
  id: string
}

const mockData: Props[] = [
  {
    id: uuidv4(),
    report: 'Rego BI9820',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 7,
  },
  {
    id: uuidv4(),
    report: 'Rego 45FE67',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 23,
  },
  {
    id: uuidv4(),
    report: 'Rego W235EW',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 4,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
  {
    id: uuidv4(),
    report: 'Rego FOE451',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 54,
  },
  {
    id: uuidv4(),
    report: 'Rego OP4597',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 512,
  },
  {
    id: uuidv4(),
    report: 'Rego RT5367',
    lastUpdated: '25 Dec 2022 - 18:24',
    taskNumber: 76,
  },
]

export default mockData
