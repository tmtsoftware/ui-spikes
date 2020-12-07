import * as React from 'react';
import {TextField} from 'office-ui-fabric-react/lib/TextField';

interface ITextFieldBasicProps {
    defaultValue?: string;
}

const textFieldStyles = {
    root: {
        left: '42%',
        width: 300
    }
};

export const TextFieldBasic: React.FunctionComponent<ITextFieldBasicProps> = () => {
    return (
        <TextField label="Text" styles={textFieldStyles}/>
    );
};
