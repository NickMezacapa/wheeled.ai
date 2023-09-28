/**
 * @name user.js
 *
 * @description
 * This file is a base template for the user object.
 * This application aims to read and write respective user data to
 * a MySQL database, per the format shaped below.
 *
 * This file serves as a reference for the database schema, in js object form.
 * Media files are stored with placeholder links.
 */

user = {
  id: 1,
  first_name: 'John',
  last_name: 'Doe',
  email: 'j.doe@gmail.com',
  phoneNumber: '1234567890',
  address: '1234 Main St',
  dateOfBirth: '01/01/2000',
  profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
  isPayingCustomer: true, // default false until purchase
  vehicles: {
    // One-to-many (1:N) relationship with vehicles (user can have multiple vehicles)
    1: {
      id: 1,
      make: 'Honda',
      model: 'Civic',
      year: '2010',
      color: 'Blue',
      mileage: '100000',
      vinNumber: '1234567890',
      licensePlate: '123ABC',
      state: 'CA',
      insurance: {
        provider: 'Geico',
        policyNumber: '1234567890',
        expiration: '01/01/2021',
      },
      registration: {
        expiration: '01/01/2021',
      },
      media: {
        vehicleIdNum: 1, // @id @default(autoincremenet())
        interior: {
          odometer: 'https://www.w3schools.com/howto/img_avatar.png',
          dashboard: 'https://www.w3schools.com/howto/img_avatar.png',
          pedals: 'https://www.w3schools.com/howto/img_avatar.png',
          videoOfHorn: 'https://www.w3schools.com/howto/img_avatar.png',
          videoOfEngineRev: 'https://www.w3schools.com/howto/img_avatar.png',
          seatbelts: {
            front: {
              driver: 'https://www.w3schools.com/howto/img_avatar.png',
              passenger: 'https://www.w3schools.com/howto/img_avatar.png',
            },
            back: {
              driver: 'https://www.w3schools.com/howto/img_avatar.png',
              passenger: 'https://www.w3schools.com/howto/img_avatar.png',
            },
          },
        },
        exterior: {
          front: 'https://www.w3schools.com/howto/img_avatar.png',
          back: 'https://www.w3schools.com/howto/img_avatar.png',
          left: 'https://www.w3schools.com/howto/img_avatar.png',
          right: 'https://www.w3schools.com/howto/img_avatar.png',
          roof: 'https://www.w3schools.com/howto/img_avatar.png',
          trunk: 'https://www.w3schools.com/howto/img_avatar.png',
          videoOfWipers: 'https://www.w3schools.com/howto/img_avatar.png',
          licensePlate: 'https://www.w3schools.com/howto/img_avatar.png',
          vinNumber: 'https://www.w3schools.com/howto/img_avatar.png',
          tires: {
            front: {
              driver: 'https://www.w3schools.com/howto/img_avatar.png',
              passenger: 'https://www.w3schools.com/howto/img_avatar.png',
            },
            back: {
              driver: 'https://www.w3schools.com/howto/img_avatar.png',
              passenger: 'https://www.w3schools.com/howto/img_avatar.png',
            },
          },
          lights: {
            hazards: 'https://www.w3schools.com/howto/img_avatar.png',
            turnSignals: 'https://www.w3schools.com/howto/img_avatar.png',
            brakeLights: 'https://www.w3schools.com/howto/img_avatar.png',
            headlights: {
              high: 'https://www.w3schools.com/howto/img_avatar.png',
              low: 'https://www.w3schools.com/howto/img_avatar.png',
              daytimeRunning: 'https://www.w3schools.com/howto/img_avatar.png',
            },
          },
          breaks: {
            videoOfForwardStop:
              'https://www.w3schools.com/howto/img_avatar.png',
            videoOfReverseStop:
              'https://www.w3schools.com/howto/img_avatar.png',
          },
        },
      },
    },
  }, // ... more vehicles if needed (user registers more than 1 car)
  inspections: {
    // One-to-many (1:N) relationship with inspections (user can have multiple inspections)
    inspectionId: {
      id: 1,
      vehicleId: vehicleId,
      type: 'uber', // can either be uber or lyft or both
      date: '01/01/2020',
      time: '12:00',
      location: '1234 Main St',
      inspector: 'John Doe',
      status: 'pass', // can either be pass or fail
      pdfCopy: 'https://www.w3schools.com/howto/img_avatar.png', // media image of inspection form for user to supply to rideshare company
    }, // ... more inspections if needed (user registers more than 1 inspection)
  },
}
