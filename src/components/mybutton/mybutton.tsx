import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

export interface MyButtonProps {
  text: string;
  txtcolor: string;
  bgcolor: string;
  bordercolor: string;
  borderwidth: string;
  size?: 'small' | 'medium' | 'large';
  hoverTxtcolor?: string;
  hoverBgcolor?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function MyButton(props: MyButtonProps) {
  const {
    text,
    txtcolor,
    bgcolor,
    bordercolor,
    borderwidth,
    size,
    hoverTxtcolor,
    hoverBgcolor,
    disabled,
    onClick,
  } = props;

  return (
    <Button
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      size={size}
      sx={{
        color: txtcolor,
        backgroundColor: bgcolor,
        borderColor: bordercolor,
        borderWidth: borderwidth,
        ':hover': {
          backgroundColor: hoverBgcolor,
          color: hoverTxtcolor,
        },
      }}
    >
      {text}
    </Button>
  );
}

export default MyButton;
