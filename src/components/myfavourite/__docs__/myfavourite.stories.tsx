import type { Meta, StoryObj } from '@storybook/react';
import Example from './example';

const meta: Meta<typeof Example> = {
    title: 'MyFavourite',
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        color: 'red',
        onClick: () => alert('Icono Favorito activado'),
    },
};

export const Disabled: Story = {
    args: {
        color: 'lightgray',
        disabled: true,
    },
};
