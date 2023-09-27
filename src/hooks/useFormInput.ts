import { useState } from 'react'

/**
 * @name useFormInput
 * @description custom hook to handle search form input state
 * @param {string} initialValue - bind value instance to input
 * @returns {FormInput} - object with value, setValue, reset, and bind
 *
 * Data binding can be achieved by using a controlled input.
 * A controlled input is achieved by binding the value to a state variable,
 * and an onChange event to change the state as the input value changes.
 *
 * @example
 * const { value, setValue, reset, bind } = useSearchQueryValue('');
 * <input type="text" {...bind} />
 * <button onClick={() => setValue('Foobar')}>Set Foobar</button>
 * <button onClick={() => setValue('')}>Set Empty</button>
 */

interface FormInput {
  value: string | number
  setValue: (value: string) => void
  reset: () => void
  bind: {
    value: string | number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
}

export const useFormInput = (initialValue: string | number): FormInput => {
  const initialValueString = initialValue.toString()
  const [value, setValue] = useState(initialValueString)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value) // set value to current input value
  }

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange,
    },
  }
}

export default useFormInput
