const createdTimestamp = new Date()
const updatedTimestamp = new Date()
const userMock = {
  id: 2,
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe123@gmail.com',
  password: 'password',
  phoneNumber: null,
  address: null,
  dateOfBirth: null,
  profileImage: null,
  isPayingCustomer: false,
  createdAt: createdTimestamp,
  updatedAt: updatedTimestamp,
}

export { createdTimestamp, updatedTimestamp, userMock }
