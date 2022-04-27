export class Utente {
  id: number
  name: string
  iniaziali: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}