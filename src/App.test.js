import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Per-Page spin button should change number', async () => {
  render(<App />);
  const headerTitle = screen.getByText(/decathlon repositories/i);
  expect(headerTitle).toBeInTheDocument();

  const perPageSpinButton = screen.getByRole('spinbutton', { name: /per page/i });

  const initialItems = await screen.findAllByTestId(/list-item/i);
  expect(initialItems).toHaveLength(5);

  userEvent.clear(perPageSpinButton);
  userEvent.type(perPageSpinButton, '10');

  await waitFor(async () => {
		const tenItems = await screen.findAllByTestId(/list-item/i);

		expect(tenItems).toHaveLength(10);
	});

  userEvent.type(perPageSpinButton, '15');

  await waitFor(async () => {
		const fifteenItems = await screen.findAllByTestId(/list-item/i);

		expect(fifteenItems).toHaveLength(10);
	});

});
