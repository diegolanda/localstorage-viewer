import React from 'react';

import { LocalStorageViewer } from '../components/LocalStorageViewer';

export default {
  title: 'Example/LocalStorageViewer',
  component: LocalStorageViewer,
};

const Template = (args) => <LocalStorageViewer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  indexed: false,
};

