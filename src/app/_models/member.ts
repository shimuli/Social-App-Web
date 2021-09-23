import { Photo } from './photo';

export interface Member {
  id: number
  username: string
  gender: string
  dateOfBirth: Date
  knownAs: string
  photoUrl: string
   age: number
  created: Date
  lastActive: Date
  bio: string
  lookingFor: string
  interest: string
  city: string
  country: string
  photos: Photo[]
}
