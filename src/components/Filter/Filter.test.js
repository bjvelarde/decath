import { render, screen } from '../../test-utils/testing-library-utils';
import Filter from '.';

test('renders with the options', () => {
  render(<Filter />);
  const comboBox = screen.getByRole('combobox', { name: /filter by/i });
  expect(comboBox).toBeInTheDocument();

  const optionAll = screen.getByRole('option', { name: /all/i });
  expect(optionAll).toBeInTheDocument();

  const optionPublic = screen.getByRole('option', { name: /public/i });
  expect(optionPublic).toBeInTheDocument();

  const optionPrivate = screen.getByRole('option', { name: /private/i });
  expect(optionPrivate).toBeInTheDocument();

  const optionForks = screen.getByRole('option', { name: /forks/i });
  expect(optionForks).toBeInTheDocument();

  const optionSources = screen.getByRole('option', { name: /sources/i });
  expect(optionSources).toBeInTheDocument();

  const optionMember = screen.getByRole('option', { name: /member/i });
  expect(optionMember).toBeInTheDocument();

  const optionInternal = screen.getByRole('option', { name: /internal/i });
  expect(optionInternal).toBeInTheDocument();
});