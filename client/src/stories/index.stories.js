import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import './index.stories.css';
import MiniCard from '../components/miniCard';
import WeatherIcon from '../components/weatherIcon';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('MiniCard', module)
  .add('default', () => <MiniCard />);

storiesOf('WeatherIcon', module)
  .add('Cloudy Icon', () => <WeatherIcon name="cloudy" />)
  .add('Rain Icon', () => <WeatherIcon name="rain" />)
  .add('Snow Icon', () => <WeatherIcon name="snow" />)
  .add('Storm Icon', () => <WeatherIcon name="storm" />)
  .add('Sun Icon', () => <WeatherIcon name="sun" />);
