import React from 'react';
import MyButton, { MyButtonProps } from '../mybutton';

function Example(props: MyButtonProps) {
    return (
        <MyButton
            text={props.text}
            bgcolor={props.bgcolor}
            txtcolor={props.txtcolor}
            bordercolor={props.bordercolor}
            borderwidth={props.borderwidth}
            size={props.size}
            hoverTxtcolor={props.hoverTxtcolor}
            hoverBgcolor={props.hoverBgcolor}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    );
}

export default Example;