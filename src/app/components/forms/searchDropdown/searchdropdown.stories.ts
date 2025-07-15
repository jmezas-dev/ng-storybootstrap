import type {Meta, StoryObj} from '@storybook/angular';
import {SearchDropdownComponent} from './searchdropdown.component';

const meta: Meta<SearchDropdownComponent> = {
  title: 'Components/SearchDropdown',
  component: SearchDropdownComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

type Story = StoryObj<SearchDropdownComponent>;

export const Default = {
  args:{
    searchText:""
  }
}

export default meta;
