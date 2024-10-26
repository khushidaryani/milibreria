import { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

export interface KhushiDDProps {
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function KhushiDD({ placeholder, value, onChange }: KhushiDDProps) {
    return (
        <TextField
            type="email"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            variant="outlined"
            fullWidth
            sx={{
                marginBottom: '16px',
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#921A40', // Borde inicial
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#921A40', // Borde en foco
                    },
                },
                '& .MuiInputBase-input': {
                    color: '#921A40', // Color del texto del input
                },
            }}
        />
    );
}

export default KhushiDD;
