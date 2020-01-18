/*
*
* ADDRESS
*
*/

interface AddressRegion {
  fullName: string,
  abbreviation: string,
  country: string,
}

interface Locality {
  name: string,
  state: AddressRegion,
  postalCode: string,
}

export interface Address {
  street: string,
  locality: Locality
}

export interface Header {
  firstName: string,
  lastName: string,
  email: string,
  subtitle: string,
  links: string[],
}

export interface CvData {
  header: Header,
  address: Address
}

/*
*
*/