import { render, screen } from '../../test-utils/testing-library-utils';
import RepoItem from '.';
import ItemWithLanguage from '../../mocks/withlang.json';
import ItemWithNoLanguage from '../../mocks/nolang.json';

test('renders with language', () => {
  render(<RepoItem item={ItemWithLanguage} />);
  const titleLink = screen.getByRole('link', { name: /newman-reporter-pullrequest-decorator/i });
  expect(titleLink).toBeInTheDocument();

  const languageLabel = screen.getByText(/language/i);
  expect(languageLabel).toBeInTheDocument();
});

test('renders without language', () => {
  render(<RepoItem item={ItemWithNoLanguage} />);
  const titleLink = screen.getByRole('link', { name: /sportplaces-docs/i });
  expect(titleLink).toBeInTheDocument();

  const languageLabel = screen.queryByText(/language/i);
  expect(languageLabel).not.toBeInTheDocument();
});