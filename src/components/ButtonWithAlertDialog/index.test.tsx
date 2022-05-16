/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import ButtonWithAlertDialog, {
  ButtonWithAlertDialogProps,
} from './ButtonWithAlertDialog';

//mock
//LogoutAlertDialogContainer
jest.mock('../LogoutAlertDialog/LogoutAlertDialogContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>LogoutAlertDialogContainer</div>;
    },
  };
});

describe('ButtonWithAlertDialogテスト', () => {
  it('ログアウトボタン表示', () => {
    const expectedLabel = 'expectedLabel';
    const props: ButtonWithAlertDialogProps = { label: expectedLabel };
    WithChakraProvider(<ButtonWithAlertDialog {...props} />);
    expect(screen.getByTestId('logoutButton')).toBeInTheDocument();
    expect(screen.getByText(expectedLabel)).toBeInTheDocument();
  });

  it('ボタンクリック→onOpen呼び出し', () => {
    const expectedOnOpen = jest.fn();
    const expectedOnClose = jest.fn();
    const props: ButtonWithAlertDialogProps = {
      onOpen: expectedOnOpen,
      onClose: expectedOnClose,
    };
    WithChakraProvider(<ButtonWithAlertDialog {...props} />);
    expect(screen.getByTestId('logoutButton')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('logoutButton'));
    expect(expectedOnOpen).toBeCalledTimes(1);
  });
});
