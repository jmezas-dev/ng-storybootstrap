import type {Meta, StoryObj} from '@storybook/angular';
import {Dropdown} from './dropdown';

const meta: Meta<Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

type Story = StoryObj<Dropdown>;

export const Default = {
  args:{
    searchText:""
  }
}

export default meta;
