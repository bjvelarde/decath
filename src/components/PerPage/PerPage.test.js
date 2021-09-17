import { render, screen } from '../../test-utils/testing-library-utils';
import PerPage from '.';

test('renders', () => {
  render(<PerPage />);
  const spinButton = screen.getByRole('spinbutton', { name: /per page/i });
  expect(spinButton).toBeInTheDocument();
});