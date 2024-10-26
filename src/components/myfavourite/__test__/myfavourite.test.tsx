import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyFavourite from '../myfavourite';

describe('MyFavourite component', () => {
    it('debería renderizarse correctamente', () => {
        render(<MyFavourite color="red" />);
        const iconButton = screen.getByRole('button');
        expect(iconButton).toBeInTheDocument();
    });

    it('debería estar deshabilitado cuando se pasa la prop disabled', () => {
        render(<MyFavourite color="red" disabled={true} />);
        const iconButton = screen.getByRole('button');
        expect(iconButton).toBeDisabled();
    });
});
