import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import KhushiDD from '../KhushiDD';

describe('KhushiDD component', () => {
    it('debería renderizarse correctamente', () => {
        render(<KhushiDD placeholder="Ingresa tu email" value="" onChange={() => { }} />);
        const input = screen.getByPlaceholderText(/ingresa tu email/i);
        expect(input).toBeInTheDocument();
    });
});
