import React from 'react';
import { render, screen } from '@testing-library/react';
import sinon from 'sinon';
import Card from '../components/ReusableComponents/Card'; // Adjust the import path as needed

describe('Card component', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  test('renders Card with given props and styles', () => {
    const props = {
      title: 'Test Card',
      description: ['Feature 1', 'Feature 2', 'Feature 3'],
      buttonText: 'Buy Now',
      price: '$49.99',
      backgroundColor: '#ff5733',
      buttonColor: '#3498db',
      transparency: 0.5,
    };

    render(<Card {...props} />);

    expect(screen.getByText('Test Card')).toBeInTheDocument();

    props.description.forEach((desc) => {
      expect(screen.getByText(desc)).toBeInTheDocument();
    });

    expect(screen.getByText('Buy Now')).toBeInTheDocument();

    expect(screen.getByText('$49.99')).toBeInTheDocument();

    const cardElement = screen.getByText('Test Card').closest('div');
    expect(cardElement).toHaveStyle(`background-color: rgb(255, 87, 51)`);

    const headerElement = screen.getByText('Test Card').parentElement;
    expect(headerElement).toHaveStyle(`background-color: rgba(255, 87, 51, 1)`);

    const buttonElement = screen.getByText('Buy Now');
    expect(buttonElement).toHaveStyle(`background-color: #3498db`);
  });

  test('renders Card without price', () => {
    const props = {
      title: 'Test Card',
      description: ['Feature 1', 'Feature 2', 'Feature 3'],
      buttonText: 'Buy Now',
      backgroundColor: '#ff5733',
      buttonColor: '#3498db',
      transparency: 0.5,
    };

    render(<Card {...props} />);

    expect(screen.queryByText('$49.99')).not.toBeInTheDocument();
  });
});
