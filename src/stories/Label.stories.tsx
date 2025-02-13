import type { Meta, StoryObj } from '@storybook/react';

import { Label } from 'text-analyzer-ui-kit';

const meta = {
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'text',
        variant: 'default'
    },
};
