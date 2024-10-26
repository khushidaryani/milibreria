import { MouseEventHandler } from 'react';
export interface MyButtonProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    bordercolor: string;
    borderwidth: string;
    size?: 'small' | 'medium' | 'large';
    hoverTxtcolor?: string;
    hoverBgcolor?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyButton(props: MyButtonProps): import("react/jsx-runtime").JSX.Element;
export default MyButton;
