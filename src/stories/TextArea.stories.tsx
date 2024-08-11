import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from 'text-analyzer-ui-kit';

const meta = {
    component: TextArea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'value',
        onChange: () => {},
    },
};
