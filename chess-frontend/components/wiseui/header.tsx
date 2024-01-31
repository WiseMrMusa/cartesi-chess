import { CSSProperties, Ref, forwardRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';
import { Logo } from './Logo';
import { ConnectKitButton } from 'connectkit';


function TopLevelNavItem({ href, children }: { href: string, children: string}) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
                {children}
            </Link>
        </li>
    );
}

export const Header = forwardRef(function Header({ className }: {className?: string }, ref: Ref<HTMLDivElement>) {
    let { isOpen: mobileNavIsOpen } = { isOpen: false } // useMobileNavigationStore();
    let isInsideMobileNavigation = false // useIsInsideMobileNavigation();

    let { scrollY } = useScroll();
    let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9]);
    let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8]);

    return (
        <motion.div
            ref={ref}
            className={clsx(
                className,
                'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:z-30 lg:px-8 w-3/4',
                !isInsideMobileNavigation &&
                'backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80',
                isInsideMobileNavigation
                    ? 'bg-white dark:bg-zinc-900'
                    : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]'
            )}
            style={{
                '--bg-opacity-light': bgOpacityLight,
                '--bg-opacity-dark': bgOpacityDark,
            } as CSSProperties }
        >
            <div
                className={clsx(
                    'absolute inset-x-0 top-full h-px transition',
                    (isInsideMobileNavigation || !mobileNavIsOpen) &&
                    'bg-zinc-900/7.5 dark:bg-white/7.5'
                )}
            />
            <div className="flex items-center gap-5 ml-auto">
                <nav className="hidden md:block">
                    <ul role="list" className="flex items-center gap-8">
                        <TopLevelNavItem href="#">API</TopLevelNavItem>
                        <TopLevelNavItem href="#">Documentation</TopLevelNavItem>
                        <TopLevelNavItem href="#">Support</TopLevelNavItem>
                    </ul>
                </nav>
                <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
                    <ConnectKitButton showBalance showAvatar />
            </div>
        </motion.div>
    );
});