import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from './wiseui/header';
import { ReactNode } from 'react';
import { Logo } from './wiseui/Logo';
import { Footer } from './wiseui/footer';
import { Navigation } from './wiseui/navigation';
import clsx from 'clsx';


export function Layout({ children, sections = [] }: {children: ReactNode, sections?: any}) {
    return (
            <div className="lg:ml-72 xl:ml-80 ">
                <motion.header
                    layoutScroll
                    className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pt-4 pb-8 dark:border-white/10 lg:block xl:w-80"
                >
                    <div className="hidden lg:flex">
                        <Link href="/" aria-label="Home">
                            <Logo className="h-12" /> 
                        </Link>
                    </div>
                    <Header />
                    <Navigation className="hidden lg:mt-10 lg:block" />
                </motion.header>
                <div className="relative px-4 pt-14 sm:px-6 lg:px- ">
                    <main className="py-16">
                        { children }
                    </main>
                </div>
                <Footer className="absolute bottom-0 " /> 
            </div>
    );
}