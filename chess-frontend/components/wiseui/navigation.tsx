import clsx from "clsx";
import Link from "next/link";

export const Navigation = ({className, props}: {className?: string, props?: any}) => {
    const isAnchorLink = false;
    const active = false;
    
    return (
        <div className={className} {...props}>
            <nav>
                {
                    navigation.map((e)=> {
                        return(
                            <Link
                                key={e.id}
                                href={e.href}
                                className={clsx(
                                    'flex justify-between gap-2 py-1 pr-3 text-sm transition',
                                    isAnchorLink ? 'pl-7' : 'pl-4',
                                    active
                                        ? 'text-zinc-900 dark:text-white'
                                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                                )}
                            >
                                <span className="truncate">{e.name}</span>
                                {/* {tag && (
                                    <Tag variant="small" color="zinc">
                                        {tag}
                                    </Tag>
                                )} */}
                            </Link>
                        )
                    })
                }
            </nav>
        </div>
    )
}


export const navigation = [
    {
        id: 1,
        name: "Play",
        href: './play'
    },{
        id: 2,
        name: "Puzzles",
        href: "./puzzles"
    },{
        id: 3,
        name: "TV",
        href: "./tv"
    }
]