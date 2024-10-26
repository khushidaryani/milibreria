import type { Meta, StoryObj } from '@storybook/react';
import Example from './example'; 

const meta: Meta<typeof Example> = {
    title: 'MyFavouriteBorder',
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        color: 'red',
        onClick: () => alert('Icono Favorito sin relleno activado'),
    },
};

export const Disabled: Story = {
    args: {
        color: 'lightgray',
        disabled: true,
    },
};
