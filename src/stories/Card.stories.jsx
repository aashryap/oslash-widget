import React from 'react';

import Card from "../common/Card";

export default {
  title: 'Common/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const CardWithFooter = Template.bind({});

export const CardWithHeader = Template.bind({});

export const CardWithHeaderAndFooter = Template.bind({});

function Header() {
    return <div>HEADER</div>
}

function Footer() {
    return <div>FOOTER</div>
}

function MainContent() {
    return <div style={{height: '100px'}}>
        Main Content
    </div>
}

CardWithFooter.args = {
    style: {
        // width: '512px',
        marginTop: '10px'
    },
    footer: {
        component: <Footer />,
    },
    children: <MainContent />
};


CardWithHeader.args = {
    style: {
        // width: '512px',
        marginTop: '10px'
    },
    header: {
        component: <Header />,
    },
    children: <MainContent />
};

CardWithHeaderAndFooter.args = {
    style: {
        // width: '512px',
        marginTop: '10px'
    },
    header: {
        component: <Header />,
    },
    footer: {
        component: <Footer />,
    },
    children: <MainContent />
};