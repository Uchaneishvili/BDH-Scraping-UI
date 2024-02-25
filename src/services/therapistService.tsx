import axios from 'axios'
import { ITherapist, ITherapistFilter } from '../types/therapist'
import FormatData from '../util/FormatData'

export const getTherapists = async (query: ITherapistFilter) => {
  const pagingPath = FormatData.generatePaginationURLPath(query)
  return await axios.get(`http://localhost:3001/therapists${pagingPath}`)
}

export const generateCSV = async (data: ITherapist[]) => {
  return await axios.post(`http://localhost:3001/therapists/csv`, data)
}
export const crawlTherapists = async () => {
  return await axios.post(`http://localhost:3001/therapists`)
}
