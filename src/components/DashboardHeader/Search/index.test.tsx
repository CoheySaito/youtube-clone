/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WithChakraProvider from '../../../__test__/util/withChakraProvider';
import SearchPresenter, { Props } from './presenter';

//mock
jest.mock('../../SearchInput', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>SearchPresenterInput</div>;
    },
  };
});
describe('Serchテスト', () => {
  it('{ isMobile: true }→IconButtonボタン表示', () => {
    const props: Props = { isMobile: true };

    WithChakraProvider(<SearchPresenter {...props} />);
    expect(screen.getByTestId('iconButton')).toBeInTheDocument();
  });

  it('onClick呼び出し', () => {
    const expectedOnToggle = jest.fn();
    const props: Props = { onToggle: expectedOnToggle, isMobile: true };
    WithChakraProvider(<SearchPresenter {...props} />);
    userEvent.click(screen.getByTestId('iconButton'));
    expect(expectedOnToggle).toBeCalledTimes(1);
  });

  it('{ isMobile: false }→SearchPresenterInputContainer表示', () => {
    const props: Props = { isMobile: false };

    WithChakraProvider(<SearchPresenter {...props} />);
    expect(screen.getByText('SearchPresenterInput')).toBeInTheDocument();
  });
});
