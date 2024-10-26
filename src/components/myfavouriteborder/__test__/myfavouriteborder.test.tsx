import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyFavouriteBorder from '../myfavouriteborder';

describe('MyFavouriteBorder component', () => {
    it('debería renderizarse correctamente', () => {
        render(<MyFavouriteBorder color="blue" />);
        const iconButton = screen.getByRole('button');
        expect(iconButton).toBeInTheDocument();
    });

    it('debería estar deshabilitado cuando se pasa la prop disabled', () => {
        render(<MyFavouriteBorder color="blue" disabled={true} />);
        const iconButton = screen.getByRole('button');
        expect(iconButton).toBeDisabled();
    });
});
