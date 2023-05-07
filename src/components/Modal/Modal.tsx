'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef<HTMLDivElement | null>(null);
    const wrapper = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (event.target === overlay.current || event.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper],
    );

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') onDismiss();
        },
        [onDismiss],
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    return (
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 m-auto bg-black/60"
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-5/12 p-6"
            >
                {children}
            </div>
        </div>
    );
}
