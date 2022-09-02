import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('CarForm testing library', () => {
  let car;
  let textInputKeys = ['make', 'model', 'color'];
  let numberInputKeys = ['year', 'price'];
  let mockForm;
  let submitCarSpy;
  let mockChangeSpy;
  let mockResetFormSpy;
  let mockUseFormSpy;
  let CarForm;

  beforeEach(() => {

    car = {
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2020,
      color: 'red',
      price: 45000,
    };

    mockForm = car;

    submitCarSpy = jest.fn();
    mockChangeSpy = jest.fn();
    mockResetFormSpy = jest.fn();
    mockUseFormSpy = jest
      .fn(() => {
        return ([ mockForm, mockChangeSpy, mockResetFormSpy ])
      });

    jest.doMock('../hooks/useForm', () => {
      return {
        __esModule: true,
        default: undefined,
        useForm: mockUseFormSpy,
      };    
    });

    CarForm = require('./CarForm').CarForm;
  });

  const renderComponent = () => {
    render(
      <CarForm buttonText="Add Car" onSubmitCar={submitCarSpy} />,
    );
  };

  test('collect data with CarForm component', () => {

    renderComponent();

    expect(mockUseFormSpy).toHaveBeenCalledWith({
      make: '', model: '', year: 1900, color: '', price: 0,
    });

    const textboxInputs = screen.getAllByRole('textbox');
    expect(textboxInputs.length).toBe(3);
    textboxInputs.forEach((input, index) => {
      userEvent.type(input, car[textInputKeys[index]])
      expect(mockChangeSpy).toHaveBeenCalled();
      mockChangeSpy.mockClear();
    });

    const spinbuttonInputs = screen.getAllByRole('spinbutton');
    expect(spinbuttonInputs.length).toBe(2);
    spinbuttonInputs.forEach((input, index) => {
      userEvent.type(input, String(car[numberInputKeys[index]]));
      expect(mockChangeSpy).toHaveBeenCalled();
      mockChangeSpy.mockClear();
    });

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(submitCarSpy).toHaveBeenCalledWith(car);
    expect(mockResetFormSpy).toHaveBeenCalled();

  });
});
