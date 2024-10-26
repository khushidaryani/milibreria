import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface MyFavouriteProps {
    color: string;
    disabled?: boolean;
    onClick?: () => void;
}

function MyFavourite({ color, disabled, onClick }: MyFavouriteProps) {

    return (
        <IconButton onClick={onClick} disabled={disabled}>
            <FavoriteIcon sx={{ color }} />
        </IconButton>
    );
    
}

export default MyFavourite;