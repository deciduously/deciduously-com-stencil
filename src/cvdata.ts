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

const massachussets: AddressRegion = {
  fullName: "Massachussets",
  abbreviation: "MA",
  country: "United States",
}

interface Locality {
  name: string,
  state: AddressRegion,
  postalCode: string,
}

const watertown: Locality = {
  name: "Watertown",
  state: massachussets,
  postalCode: "02472"
}

export interface Address {
  street: string,
  locality: Locality
}

const watertownAddress: Address = {
  street: "37 Capitol St",
  locality: watertown
}

export interface CvData {
  name: string,
  address: Address
}

/*
*
* TOPLEVEL
*
*/

export const defaultCv: CvData = {
  name: "Ben Lovy",
  address: watertownAddress
}
