/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WithChakraProvider from '../../../__test__/util/withChakraProvider';
import Search, { SearchProps } from './Search';

//mock
//SearchInputContainer
jest.mock('../../SearchInput/SearchInputContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>SearchInputContainer</div>;
    },
  };
});
describe('Serchテスト', () => {
  it('{ isMobile: true }→IconButtonボタン表示', () => {
    const props: SearchProps = { isMobile: true };

    WithChakraProvider(<Search {...props} />);
    expect(screen.getByTestId('iconButton')).toBeInTheDocument();
  });

  it('onClick呼び出し', () => {
    const expectedOnToggle = jest.fn();
    const props: SearchProps = { onToggle: expectedOnToggle, isMobile: true };
    WithChakraProvider(<Search {...props} />);
    userEvent.click(screen.getByTestId('iconButton'));
    expect(expectedOnToggle).toBeCalledTimes(1);
  });

  it('{ isMobile: false }→SearchInputContainer表示', () => {
    const props: SearchProps = { isMobile: false };

    WithChakraProvider(<Search {...props} />);
    expect(screen.getByText('SearchInputContainer')).toBeInTheDocument();
  });
});
