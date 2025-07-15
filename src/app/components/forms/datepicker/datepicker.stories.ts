import type {Meta, StoryObj} from '@storybook/angular';
import DatePickerComponent from './datepicker.component';

const meta: Meta<DatePickerComponent> = {
  title: 'Components/DatePicker',
  component: DatePickerComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

type Story = StoryObj<DatePickerComponent>;

export const Default = {
  args:{
    date:""
  }
}

export default meta;
