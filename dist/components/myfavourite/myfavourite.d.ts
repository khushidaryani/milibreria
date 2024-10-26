export interface MyFavouriteProps {
    color: string;
    disabled?: boolean;
    onClick?: () => void;
}
declare function MyFavourite({ color, disabled, onClick }: MyFavouriteProps): import("react/jsx-runtime").JSX.Element;
export default MyFavourite;
