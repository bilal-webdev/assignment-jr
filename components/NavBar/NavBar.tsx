import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'HOME', href: '#', current: true },
    { name: 'OUR STORY', href: '#', current: false },
    { name: 'WRITE', href: '#', current: false },
    { name: 'LEARN', href: '#', current: false },
    { name: 'WORK SHOPS', href: '#', current: false },
    { name: 'CONTACT US', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <Disclosure as="nav" className="absolute top-4 left-0 w-full z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <div className="max-w-screen-2xl mx-auto sm:px-6 md:px-11 lg:px-16">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden md:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'text-[#FFE176] nav-current' : 'text-white hover-text-yellow',
                                            'px-2 font-bold text-base font-alef no-underline text-center',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button type="button" className="text-white mr-2">
                            <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6 mr-3 hover:text-[#FFE176]" />
                        </button>
                        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-[200px]">
                            <input
                                type="text"
                                className="w-full h-10 text-white text-center font-alef border-2 border-white bg-black focus:outline-none"
                                placeholder="TYPE TO SEARCH"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'text-[#FFE176]' : 'text-white hover-text-yellow',
                                'block rounded-md px-2 py-2 text-base font-medium font-alef no-underline',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
