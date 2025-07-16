import type {Meta, StoryObj} from '@storybook/angular';
import SearchBox from './searchbox.component';

const meta: Meta<SearchBox> = {
  title: 'Components/SearchBox',
  component: SearchBox,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

type Story = StoryObj<SearchBox>;

export const Default = {
  args:{
    searchText:""
  }
}

export default meta;
