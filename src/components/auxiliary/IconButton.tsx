import type { PropsWithChildren } from 'react';

interface Props {
    onClick: () => void;
    style: string; // 1: primary, 2: secondary, 3: ternary
    disabled?: boolean;
    textPaddings?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const IconButton = (props: PropsWithChildren<Props>) => {
    let orderClasses: string;
    switch (props.style) {
        case "HeaderBar":
            orderClasses =
                'hover:text-blue-500 font-medium disabled:bg-neutral-400';
            break;
        case "SideBar":
            orderClasses =
                'hover:scale-105 font-4xl';
            break;
        default:
            return null;
    }

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className={`flex ${props.textPaddings ? 'px-4 py-1.5' : 'p-1' } font-normal items-center justify-center rounded-full ${orderClasses} transition-all duration-200 disabled:cursor-default flex flex-row gap-1`}>
            {props.children}
        </button>
    );
};

export default IconButton;
