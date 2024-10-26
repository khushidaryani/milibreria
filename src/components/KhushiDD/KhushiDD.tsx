// Khushi Manojkumar Daryani Daryani

import { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

export interface KhushiDDProps {
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    size?: 'small' | 'medium';
    height?: string;
    width?: string;
}

function KhushiDD({ placeholder, value, onChange, size = 'medium', height, width }: KhushiDDProps) {
    return (
        <TextField
            type="email"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            variant="outlined"
            size={size}
            sx={{
                height: height, 
                width: width, 
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
