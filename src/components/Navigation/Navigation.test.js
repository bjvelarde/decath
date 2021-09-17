import { render, screen } from '../../test-utils/testing-library-utils';
import Navigation from '.';

test('renders the list', () => {
  render(<Navigation />);
  const pagination = screen.getByRole('list', { name: /pagination/i });
  expect(pagination).toBeInTheDocument();
});