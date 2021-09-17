import { render, screen } from '../../test-utils/testing-library-utils';
import SortOptions from '.';

test('renders with the options', () => {
  render(<SortOptions />);
  const comboBox = screen.getByRole('combobox', { name: /sort by/i });
  expect(comboBox).toBeInTheDocument();

  const optionName= screen.getByRole('option', { name: /name/i });
  expect(optionName).toBeInTheDocument();

  const optionDateCreated = screen.getByRole('option', { name: /date created/i });
  expect(optionDateCreated).toBeInTheDocument();

  const optionDateUpdated = screen.getByRole('option', { name: /date updated/i });
  expect(optionDateUpdated).toBeInTheDocument();

  const optionDatePushed = screen.getByRole('option', { name: /date pushed/i });
  expect(optionDatePushed).toBeInTheDocument();
});