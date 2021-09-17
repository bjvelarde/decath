import { render, screen } from '../../test-utils/testing-library-utils';
import RepoList from '.';

test('renders with other needed elements/components', () => {
  render(<RepoList />);

  const filterBy = screen.getByRole('combobox', { name: /filter by/i });
  expect(filterBy).toBeInTheDocument();

  const pagination = screen.getAllByRole('list', { name: /pagination/i });
  expect(pagination).toHaveLength(2);

  const perPageSpinButton = screen.getByRole('spinbutton', { name: /per page/i });
  expect(perPageSpinButton).toBeInTheDocument();

  const sortBy = screen.getByRole('combobox', { name: /sort by/i });
  expect(sortBy).toBeInTheDocument();

  const sortOrder = screen.getByRole('button', { name: /asc/i });
  expect(sortOrder).toBeInTheDocument();
});