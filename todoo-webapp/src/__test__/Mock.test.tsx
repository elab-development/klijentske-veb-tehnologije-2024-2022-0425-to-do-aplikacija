import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import ButtonComponent from '../components/ReusableComponents/ButtonComponent';

describe('ButtonComponent', () => {
  test('calls onButtonClick when button is clicked', () => {
    const mockHandleButtonClick = sinon.spy();
    render(<ButtonComponent onButtonClick={mockHandleButtonClick} />);

    const button = screen.getByText(/Click me/i);
    fireEvent.click(button);

    sinon.assert.calledOnce(mockHandleButtonClick);
  });
});
