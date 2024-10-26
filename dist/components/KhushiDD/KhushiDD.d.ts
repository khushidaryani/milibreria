import { ChangeEvent } from 'react';
export interface KhushiDDProps {
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare function KhushiDD({ placeholder, value, onChange }: KhushiDDProps): import("react/jsx-runtime").JSX.Element;
export default KhushiDD;
