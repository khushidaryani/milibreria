import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyButton from '../mybutton';

describe('MyButton component', () => {
    it('debería renderizarse correctamente', () => {
        render(
            <MyButton
                text="Suscribir"
                txtcolor="white"
                bgcolor="blue"
                bordercolor="blue"
                borderwidth="2px"
            />
        );
        const button = screen.getByRole('button', { name: /suscribir/i });
        expect(button).toBeInTheDocument();
    });

    it('debería estar deshabilitado cuando se pasa la prop disabled', () => {
        render(<MyButton text="Suscribir" txtcolor="white" bgcolor="blue" bordercolor="black" borderwidth="2px" disabled={true} />);
        const button = screen.getByRole('button', { name: /suscribir/i });
        expect(button).toBeDisabled();
    });
    
});
