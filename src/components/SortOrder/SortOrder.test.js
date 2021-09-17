import { render, screen } from '../../test-utils/testing-library-utils';
import SortOrder from '.';

test('renders', () => {
  render(<SortOrder />);
  const button = screen.getByRole('button', { name: /asc/i });
  expect(button).toBeInTheDocument();
});