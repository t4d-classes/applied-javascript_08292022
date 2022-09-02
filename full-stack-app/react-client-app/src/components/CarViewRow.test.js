import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { CarViewRow } from '../components/CarViewRow';

test('snapshot CarViewRow component', () => {
  const car = {
    id: 1,
    make: 'Ford',
    model: 'Fusion Hybrid',
    year: 2020,
    color: 'red',
    price: 45000,
  };

  expect(
    renderer
      .create(
        <CarViewRow
          car={car}
          onEditCar={() => null}
          onDeleteCar={() => null}
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});

describe('CarViewRow testing library', () => {
  let car;
  let carKeys;
  let editCarSpy;
  let deleteCarSpy;

  beforeEach(() => {
    car = {
      id: 1,
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2020,
      color: 'red',
      formattedPrice: '45000',
      price: 45000,
    };

    carKeys = Object.keys(car);

    editCarSpy = jest.fn();
    deleteCarSpy = jest.fn();
  });

  const renderComponent = () => {
    render(
      <table>
        <tbody>
          <CarViewRow
            car={car}
            onEditCar={editCarSpy}
            onDeleteCar={deleteCarSpy}
          />
        </tbody>
      </table>,
    )    
  };

  test('render CarViewRow component', () => {

    renderComponent();
    
    // <td> elements have a role of "cell"
    const cells = screen.getAllByRole('cell');
    expect(cells.length).toBe(7);
    cells.slice(0, 6).forEach((element, index) => {
      expect(element.textContent).toBe(String(car[carKeys[index]]));
    });
  });

  test('click edit', () => {

    renderComponent();
    
    // select the button element by text
    userEvent.click(screen.getByText('Edit'));
    expect(editCarSpy).toHaveBeenCalledWith(1);
  });

  test('click delete', () => {

    renderComponent();
    
    // select the button element by text
    userEvent.click(screen.getByText('Delete'));
    expect(deleteCarSpy).toHaveBeenCalledWith(1);
  });
});
