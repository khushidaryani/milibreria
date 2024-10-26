import React from 'react';
import KhushiDD, { KhushiDDProps } from '../KhushiDD';

function Example(props: KhushiDDProps) {
    return (
        <KhushiDD
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default Example;
