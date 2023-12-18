import React, {FC, ReactNode, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width: string
    height: string
    children: ReactNode
    variant: CardVariant,
    onClick:(num:number)=> void
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         children,
         variant,
        onClick
     }) => {
    const [state, setState] = useState(0)
        return (
            <div style={{
                height: height,
                width: width,
                border: variant === CardVariant.outlined ? '1px solid teal' : 'none',
                background: variant === CardVariant.primary ? 'lightgray':'',
            }}
                 onClick={()=>onClick(state)}
            >
                {children}
            </div>
        );
    };

export default Card;