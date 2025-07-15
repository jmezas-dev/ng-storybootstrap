import type {Meta, StoryObj} from '@storybook/angular';
import SearchBoxComponent from './searchbox.component';

const meta: Meta<SearchBoxComponent> = {
  title: 'Components/SearchBox',
  component: SearchBoxComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

type Story = StoryObj<SearchBoxComponent>;

export const Default = {
  args:{
    searchText:""
  }
}

export default meta;
