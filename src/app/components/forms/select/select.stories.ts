import type {Meta,StoryObj} from '@storybook/angular';
import {Select} from './select';

const meta:Meta<Select> = {
  title: 'Components/Select',
  component: Select,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
}

type Story = StoryObj<Select>;

export const Default = {
  args:{
    options:[],
    selectedOption:""
  }
}

export default meta;
