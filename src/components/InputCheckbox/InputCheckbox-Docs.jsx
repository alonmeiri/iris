import React from 'react';
import InputCheckbox from './InputCheckbox';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { Header3, ParagraphMd } from '../Type';

class InputCheckboxDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <InputCheckbox
                        label="Checkbox 1 (Medium)"
                        name="demoCheckbox1"
                        id="Checkbox1"
                        value="1"
                    />
                    <InputCheckbox
                        label="Checkbox 2 (Medium)"
                        name="demoCheckbox2"
                        id="Checkbox2"
                        value="2"
                    />
                     <InputCheckbox
                        label="Checkbox 3 has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
                        name="demoCheckbox3"
                        id="Checkbox3"
                        value="3"
                    />
                    <InputCheckbox
                        label="Errored Field"
                        name="demoCheckbox4"
                        format="negative"
                        id="Checkbox4"
                        value="4"
                        required
                    />
                    <InputCheckbox
                        label="DisabledField"
                        name="demoCheckboxDisabled"
                        id="CheckboxDisabled"
                        value="disabled"
                        disabled
                    />
                    <InputCheckbox
                        label="Checkbox has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
                        name="demoCheckbox5"
                        errorMsg="This field is required!"
                        format="negative"
                        id="Checkbox5"
                        value="5"
                        required
                    />
                    <Header3>Hidden Labels</Header3>
                    <ParagraphMd>The visible label can be suppressed with the <code>hideLabel</code> prop. </ParagraphMd>
                    <InputCheckbox
                        label="Hidden Label"
                        hideLabel
                        name="demoCheckbox6"
                        id="Checkbox6"
                        value="6"
                    />
                </div>

                <ExampleSource>
                    {`
  <InputCheckbox
    label="Checkbox 1 (Medium)"
    name="demoCheckbox1"
    id="Checkbox1"
    value="1"
/>
<InputCheckbox
    label="Checkbox 2 (Medium)"
    name="demoCheckbox2"
    id="Checkbox2"
    value="2"
/>
    <InputCheckbox
    label="Checkbox 3 has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
    name="demoCheckbox3"
    id="Checkbox3"
    value="3"
/>
<InputCheckbox
    label="DisabledField"
    name="demoCheckboxDisabled"
    id="CheckboxDisabled"
    value="disabled"
    disabled
/>
<InputCheckbox
    label="Errored Checkbox"
    name="demoCheckbox4"
    errorMsg="This field is required!"
    format="negative"
    id="Checkbox4"
    value="4"
    required
/>
<InputCheckbox
    label="Hidden Label"
    hideLabel
    name="demoCheckbox6"
    id="Checkbox6"
    value="6"
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default InputCheckboxDocs;
