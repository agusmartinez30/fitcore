import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router'

// Centers the 390px-wide screen horizontally and anchors it to the top, like a real device.
export function MobileFrame() {
  const { pathname } = useLocation()

  // Every screen opens scrolled to the top, including when going back.
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen items-start justify-center">
      <Outlet />
    </div>
  )
}
