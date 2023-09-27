import { act, renderHook } from '@testing-library/react'
import { useFormInput } from '~/hooks/useFormInput'

describe('useFormInput', () => {
  describe('when passed an initial value', () => {
    it('initializes the value with the passed value', () => {
      const foo = 'foo'
      const empty = ''

      const { result } = renderHook(() => useFormInput(foo))
      expect(result.current.value).toEqual(foo)

      const { result: emptyResult } = renderHook(() => useFormInput(empty))
      expect(emptyResult.current.value).toEqual(empty)
    })

    describe('setValue', () => {
      it('updates the value when setValue is called', () => {
        const { result } = renderHook(() => useFormInput('foo'))
        const newValue = 'bar'

        act(() => result.current.setValue(newValue))

        expect(result.current.value).toEqual(newValue)
      })
    })

    describe('reset', () => {
      it('resets the value to an empty string', () => {
        const { result } = renderHook(() => useFormInput('foo'))

        act(() => result.current.reset())

        expect(result.current.value).toEqual('')
      })
    })

    describe('bind', () => {
      describe('onChange', () => {
        it('updates the value when onChange is called', () => {
          const { result } = renderHook(() => useFormInput('foo'))
          const newValue = 'bar'

          act(() =>
            result.current.bind.onChange({
              target: { value: newValue },
            } as React.ChangeEvent<HTMLInputElement>)
          )

          expect(result.current.value).toEqual(newValue)
        })
      })
      describe('properly binds value and onChange to input', () => {
        it('binds the value', () => {
          const { result } = renderHook(() => useFormInput('foo'))
          const expected: string | number = result.current.value
          const actual: unknown = result.current.bind.value
          expect(actual).toEqual(expected)
        })

        it('binds the onChange callback', () => {
          const { result } = renderHook(() => useFormInput('foo'))
          const actual: unknown = result.current.bind.onChange
          expect(actual).toBeInstanceOf(Function)
        })
      })
    })
  })

  describe('handles edge cases', () => {
    const specialCharactersString = '!@#$%^&*()_+{}[]:";<>,.?/\\|~`'
    const veryLongString = 'a'.repeat(1000)

    describe('when passed special characters as input', () => {
      it('initializes special characters', () => {
        const { result } = renderHook(() =>
          useFormInput(specialCharactersString)
        )
        expect(result.current.value).toEqual(specialCharactersString)
      })

      it('updates special characters', () => {
        const { result } = renderHook(() =>
          useFormInput(specialCharactersString)
        )
        const newValue = specialCharactersString + 'foo'

        act(() => result.current.setValue(newValue))

        expect(result.current.value).toEqual(newValue)
      })

      it('resets special characters', () => {
        const { result } = renderHook(() =>
          useFormInput(specialCharactersString)
        )

        act(() => result.current.reset())

        expect(result.current.value).toEqual('')
      })
    })

    describe('when passed a number as input', () => {
      it('initializes a number', () => {
        const { result } = renderHook(() => useFormInput(1))
        expect(result.current.value).toEqual('1')
      })

      it('updates a number', () => {
        const { result } = renderHook(() => useFormInput(1))
        const newValue = '2'

        act(() => result.current.setValue(newValue))

        expect(result.current.value).toEqual(newValue)
      })

      it('resets a number', () => {
        const { result } = renderHook(() => useFormInput(1))

        act(() => result.current.reset())

        expect(result.current.value).toEqual('')
      })
    })

    describe('when passed a very long string as input', () => {
      it('initializes a very long string', () => {
        const { result } = renderHook(() => useFormInput(veryLongString))
        expect(result.current.value).toEqual(veryLongString)
      })

      it('updates a very long string', () => {
        const { result } = renderHook(() => useFormInput(veryLongString))
        const newValue = veryLongString + 'foo'

        act(() => result.current.setValue(newValue))

        expect(result.current.value).toEqual(newValue)
      })

      it('resets a very long string', () => {
        const { result } = renderHook(() => useFormInput(veryLongString))

        act(() => result.current.reset())

        expect(result.current.value).toEqual('')
      })
    })
  })
})
