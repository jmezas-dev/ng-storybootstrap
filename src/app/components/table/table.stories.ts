import type {Meta, StoryObj} from '@storybook/angular';

import TableComponent from './table.component';

const meta: Meta<TableComponent> = {
  title: 'Components/Table',
  component: TableComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

type Story = StoryObj<TableComponent>;

export const Default: { args: { table: { data: any[] } } } = {
  args:{
    table:{
      data:[
        {
          ticketId:1,
          vacantName:"name",
          descriptionLink:"description",
          recruiter:"recruiter",
          status:"status",
          recruiterStatus:"recruiterStatus",
          comments:"comments"
        }
      ]
    }
  }
};

export default meta;
