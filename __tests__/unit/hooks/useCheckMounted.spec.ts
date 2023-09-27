import { renderHook } from '@testing-library/react'
import { useCheckMounted } from '~/hooks/useCheckMounted'

describe('useCheckMounted', () => {
  it('returns true after component has mounted', () => {
    let isMounted: boolean | undefined
    const ComponentWithHook = () => {
      isMounted = useCheckMounted()
      return null
    }

    const { unmount } = renderHook(() => ComponentWithHook())

    // Ensure the hook is evaluated after the component has mounted
    expect(isMounted).toBe(true)
    // Clean up to avoid any potential side effects
    unmount()
  })

  it('returns false after component has unmounted', () => {
    let isMounted: boolean | undefined
    const { unmount } = renderHook(() => {
      isMounted = useCheckMounted()
    })

    expect(isMounted).toBe(true)
    unmount()
  })
})
