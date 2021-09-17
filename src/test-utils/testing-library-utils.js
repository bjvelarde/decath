import { render } from '@testing-library/react';
import { Provider } from '../context';

const renderWithContext = (ui, options) => render(ui, { wrapper: Provider, ...options });

export * from '@testing-library/react';

export { renderWithContext as render };
