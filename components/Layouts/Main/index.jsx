import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
    HomeIcon,
    MenuAlt2Icon,
    DownloadIcon,
    XIcon,
    BookOpenIcon,
    NewspaperIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import classNames from "helpers/classNames";
import { useRouter } from "next/router";

const navigationData = [
    { name: "Home", href: "/", icon: HomeIcon, current: false },
    { name: "Downloads", href: "/downloads", icon: DownloadIcon, current: false },
    { name: "Syllabus ICSE", href: "/syllabus/icse", icon: BookOpenIcon, current: false },
    { name: "Syllabus ISC", href: "/syllabus/isc", icon: BookOpenIcon, current: false },
    { name: "Specimen Paper ISC", href: "/specimen/isc", icon: NewspaperIcon, current: false },
    { name: "Specimen Paper ICSE", href: "/specimen/icse", icon: NewspaperIcon, current: false },
];
const projects = [
    // { id: 1, name: "GraphQL API", href: "#" },
    // { id: 2, name: "iOS App", href: "#" },
];

export default function MainLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [navigation, setNavigation] = useState(navigationData);
    const router = useRouter();
    useEffect(() => {
        let newNavigation = navigationData.map((nav) => {
            if (nav.href === router.pathname || nav.href + "/" === router.pathname)
                return {
                    ...nav,
                    current: true,
                };
            return nav;
        });
        setNavigation(newNavigation);
    }, [router.pathname]);
    return (
        <>
            <div className="h-screen flex bg-[#E8F9FD]">
                {/* START OF NAVIGATION */}
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XIcon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        {/* <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-rose-500-mark-white-text.svg"
                                            alt="Workflow"
                                        /> */}
                                    </div>
                                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                        <nav className="px-2">
                                            <div className="space-y-1">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? "bg-gray-900 text-white"
                                                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                                        )}
                                                        aria-current={
                                                            item.current ? "page" : undefined
                                                        }
                                                    >
                                                        <item.icon
                                                            className={classNames(
                                                                item.current
                                                                    ? "text-gray-300"
                                                                    : "text-gray-400 group-hover:text-gray-300",
                                                                "mr-4 flex-shrink-0 h-6 w-6"
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:w-64 lg:fixed lg:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex-1 flex flex-col min-h-0">
                        {/* <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-logo-rose-500-mark-white-text.svg"
                                alt="Workflow"
                            />
                        </div> */}
                        <div className="flex-1 flex flex-col overflow-y-auto bg-gray-800">
                            <nav className="flex-1 px-2 py-4">
                                <div className="space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                            )}
                                            aria-current={item.current ? "page" : undefined}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current
                                                        ? "text-gray-300"
                                                        : "text-gray-400 group-hover:text-gray-300",
                                                    "mr-3 flex-shrink-0 h-6 w-6"
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* End OF NAVIGATION */}

                <div className="lg:pl-64 flex flex-col w-0 flex-1">
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-1 px-4 flex justify-between">
                            <div className="flex-1 flex">
                                <form className="w-full flex lg:ml-0" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                            <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search-field"
                                            className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                            name="search"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <main className="flex-1 text-blue-900 h-full overflow-y-auto ">
                        <div className="py-8 xl:py-10 min-h-full relative ">
                            {children}
                            <div className=" absolute  w-full bottom-0 left-0 bg-base-300 text-white p-4 text-center">
                                Made with ❤️ by
                                <a className="underline ml-2" href="http://chirag.codes">
                                    Chirag Bhalotia
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
