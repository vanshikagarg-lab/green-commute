import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import {ThemeProvider} from '@mui/material';
import theme from '../../../theme';
import Typography from '.';

it('renders a typography tag', () => {
  render(
    <ThemeProvider theme={theme}>
        <Typography variant="heading1" children='Text'/>
    </ThemeProvider>
    );
  const element = screen.getByText('Text');
  expect(element).toBeInTheDocument();

});