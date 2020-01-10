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

export interface CvData {
  name: string,
  address: Address
}
