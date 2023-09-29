import { type BaseUserData } from '~/utils/types'

export type MockDB = Record<string, BaseUserData>
export const mockDatabase: MockDB = {
  foo: {
    id: 'foo',
    firstName: 'Foo',
    lastName: 'Bar',
    password: 'foobar1',
    email: 'foo@bar.com',
  },
  bar: {
    id: 'bar',
    firstName: 'Bar',
    lastName: 'Foo',
    password: 'barbat1',
    email: 'bar@foo.com',
  },
}
