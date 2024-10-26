import { ChangeEvent } from 'react';
export interface KhushiDDProps {
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    size?: 'small' | 'medium';
    height?: string;
    width?: string;
}
declare function KhushiDD({ placeholder, value, onChange, size, height, width }: KhushiDDProps): import("react/jsx-runtime").JSX.Element;
export default KhushiDD;
