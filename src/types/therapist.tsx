import { ISearch } from './basesearch.d'

export enum IGender {
  MALE = 0,
  FEMALE = 1,
}

export interface ITherapist {
  _id: string
  firstName?: string
  lastName?: string
  zipCode?: string
  city?: string
  email?: string
  gender?: IGender
}

export interface ITherapistFilter extends ISearch {
  searchKey?: string
}
