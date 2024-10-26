import type { Meta, StoryObj } from '@storybook/react';
import Example from './example'; 

const meta: Meta<typeof Example> = {
  title: 'KhushiDD',
  component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    placeholder: 'Ingrese su correo electrónico',
    value: '',
    onChange: (e) => console.log(e.target.value),
  },
};
