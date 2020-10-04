/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
      id
      name
      birdthday
      createdAt
      updatedAt
    }
  }
`;
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
      id
      name
      birdthday
      createdAt
      updatedAt
    }
  }
`;
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
      id
      name
      birdthday
      createdAt
      updatedAt
    }
  }
`;
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
      id
      name
      car_plate
      car_model
      createdAt
      updatedAt
    }
  }
`;
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
      id
      name
      car_plate
      car_model
      createdAt
      updatedAt
    }
  }
`;
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
      id
      name
      car_plate
      car_model
      createdAt
      updatedAt
    }
  }
`;
