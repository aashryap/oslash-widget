import React from 'react';

import Card from "../common/Card";
import Dropdown from '../common/Dropdown';
import "./dropdown.css";

export default {
  title: 'Common/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const SimpleDropdown = Template.bind({});

export const SearchableDropdown = Template.bind({});

export const SearchableMultiDropdown = Template.bind({});


const options = [{
    label: 'Full Access',
    value: 'full_access'
}, {
    label: 'Can Edit',
    value: 'can_edit'
}, {
    label: 'Can View',
    value: 'can_view'
}, {
    label: 'No Access',
    value: 'no_access'
}]

SimpleDropdown.args = {
    options,
    placeHolder: 'Search Access',
    showCaretIcon: false,
    classes: {
        dropdownContainer: 'dropdown-container-override'
    }
};

SearchableDropdown.args = {
    options,
    placeHolder: 'Search Access',
    showCaretIcon: false,
    isSearchable: true,
    classes: {
        dropdownContainer: 'dropdown-container-override'
    }
};

SearchableMultiDropdown.args = {
    isMulti: true,
    options,
    placeHolder: 'Search Access',
    showCaretIcon: false,
    isSearchable: true,
    classes: {
        dropdownContainer: 'dropdown-container-override'
    }
};
