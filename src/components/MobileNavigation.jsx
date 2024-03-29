import { ChevronDownIcon } from '@/icons/ChevronIcon';
import { CloseIcon } from '@/icons/CloseIcon';

import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';

function TransitionChild({ children, options }) {
  return (
    <Transition.Child
      enterFrom={options?.enterFrom}
      enterTo={options?.enterTo}
      enter={options?.enter}
      leaveFrom={options?.leaveFrom}
      leaveTo={options?.leaveTo}
      leave={options?.leave}
      as={Fragment}
    >
      {children}
    </Transition.Child>
  );
}

export function MobileNavigation({ className, route }) {
  const overlayOptions = {
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    enter: 'duration-150 ease-out',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
    leave: 'duration-150 ease-in',
  };

  const navigationOptions = {
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    enter: 'duration-150 ease-out',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95',
    leave: 'duration-150 ease-in',
  };

  return (
    <Popover className={className}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" />
      </Popover.Button>

      <Transition.Root>
        <TransitionChild options={overlayOptions}>
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm" />
        </TransitionChild>

        <TransitionChild options={navigationOptions}>
          <Popover.Panel
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5"
            focus
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500" />
              </Popover.Button>

              <h2 className="text-sm font-medium text-zinc-600">Navigation</h2>
            </div>

            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                {route?.map(({ label, href, id }) => (
                  <li key={id}>
                    <Popover.Button
                      className="block py-2"
                      href={href}
                      as={Link}
                    >
                      {label}
                    </Popover.Button>
                  </li>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </TransitionChild>
      </Transition.Root>
    </Popover>
  );
}
