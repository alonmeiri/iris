import React from 'react';
import { Avatar as A } from '../';
import { storiesOf } from '@storybook/react';
import { Story } from '../../.storybook/ui/Story';
import styled from 'styled-components';

const Avatar = styled(A)`
  margin: 0 0.5rem;
`;

storiesOf(`components|Avatar`, module).add('Avatar', () => (
  <Story title="Avatar">
    <Avatar
      alt="Extra Small Avatar Example"
      src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
      size="xs"
    />
    <Avatar
      alt="Small Avatar Example"
      src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
      size="sm"
    />
    <Avatar
      alt="Medium Avatar Example"
      src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
      size="md"
    />
    <Avatar
      alt="Large Avatar Example"
      src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
      size="lg"
    />
    <Avatar
      alt="Extra Large Avatar Example"
      src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
      size="xl"
    />
  </Story>
));
