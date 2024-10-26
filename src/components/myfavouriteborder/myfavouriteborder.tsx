// Khushi Manojkumar Daryani Daryani

import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface MyFavouriteBorderProps {
    color: string;
    disabled?: boolean;
    onClick?: () => void;
}

function MyFavouriteBorder({ color, disabled, onClick }: MyFavouriteBorderProps) {
    return (
        <IconButton onClick={onClick} disabled={disabled}>
            <FavoriteBorderIcon sx={{ color }} />
        </IconButton>
    );
}

export default MyFavouriteBorder;
