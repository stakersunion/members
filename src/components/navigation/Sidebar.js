'use client'

import { usePathname } from 'next/navigation'
import { Logo, SidebarItem } from '@/components/navigation'
import { routes } from '@/utils/routes'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside
      className={'fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'}
    >
      <nav className={'flex flex-col items-center gap-4 px-2 sm:py-5'}>
        <Logo />
        {Object.values(routes).map((route) => {
          let active = false
          if (!route.path.startsWith('http')) {
            const splitPath = pathname.split('/')
            const splitRoutePath = route.path.split('/')
            active = splitPath[1] === splitRoutePath[1]
          }

          if (route.hidden) return
          return (
            <SidebarItem
              key={route.path}
              route={route}
              variant={active ? 'active' : 'default'}
            />
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
