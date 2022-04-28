import React from "react";

export interface Props {
    id: string;
    source: string;
    altText: string;
}

const Image = (props: Props) => {
    return <img id={props.id} src={props.source} alt={props.altText} data-testid="image" /> ;
};

export default Image;