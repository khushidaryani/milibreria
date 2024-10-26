import type { Meta, StoryObj } from '@storybook/react';
import Example from './example'; //importamos el componente Example

const meta: Meta<typeof Example> = {
    title: 'MyButton',
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        text: 'Suscribir',
        txtcolor: '#921A40',       
        bgcolor: '#D9ABAB',        
        bordercolor: '#D9ABAB',    
        borderwidth: '1px',
        hoverTxtcolor: '#FFFFFF',  
        hoverBgcolor: '#921A40',   
        size: 'medium',
        onClick: () => alert('Se ha suscrito exitosamente'),
    },
};

export const Secondary: Story = {
    args: {
        text: 'Cancelar',
        txtcolor: '#5F6F65',      
        bgcolor: '#C9DABF',        
        bordercolor: '#C9DABF',    
        borderwidth: '2px',
        hoverTxtcolor: '#FFFFFF',  
        hoverBgcolor: '#5F6F65', 
        size: 'medium',
        onClick: () => alert('Se ha cancelado la suscripción exitosamente'),
    },
};
