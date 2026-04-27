import type { PropsWithChildren } from 'react';

interface Props {
    onClick: () => void;
    style: string; // 1: primary, 2: secondary, 3: ternary
    disabled?: boolean;
    noTextPaddings?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const Button = (props: PropsWithChildren<Props>) => {
    let orderClasses: string;
    switch (props.style) {
        case "HeaderBar":
            orderClasses =
                'hover:text-blue-700 font-medium disabled:bg-neutral-400';
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
            className={`flex ${props.noTextPaddings ? 'p-1' : 'px-4 py-1.5'} font-normal items-center justify-center rounded-full ${orderClasses} transition-all duration-200 disabled:cursor-default flex flex-row gap-1`}>
            {props.children}
        </button>
    );
};

export default Button;
