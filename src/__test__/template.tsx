/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WithChakraProvider from './util/withChakraProvider';

import HamburgerButton from '../components/DashboardHeader/HamburgerButton';

//mock_spyon
import * as chakraui from '@chakra-ui/react';
import { MockedProvider } from '@apollo/client/testing';
import useUserIcon from '../hooks/useUserIcon/useUserIcon';
import { renderHook } from '@testing-library/react-hooks';
import useDashboardHeader from '../hooks/useDashboardHeader/useDashboardHeader';
import useSignUp from '../hooks/useSignUp/useSignUp';
import { useRef } from 'react';

//mock
window.alert = jest.fn();

//useUserIcon
jest.mock('../../hooks/useUserIcon/useUserIcon');
const mockedUseUserIcon = useUserIcon as jest.MockedFunction<
  typeof useUserIcon
>;

//VideoSelect_子コンポーネント
jest.mock('./VideoSelect', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>VideoSelect</div>;
    },
  };
});

describe('test_template', () => {
  afterEach(() => {
    cleanup();
  });
  it('', async () => {
    //mock_spyon
    const expectedOnOpenDrawer = jest.fn();

    const useDisclosureSpy = jest.spyOn(chakraui, 'useDisclosure');
    (useDisclosureSpy as jest.MockedFunction<any>).mockReturnValue({
      isOpen: false,
      onOpen: expectedOnOpenDrawer,
      onClose: jest.fn(),
    });

    //mock
    //useUserIcon
    mockedUseUserIcon.mockReturnValue({ fetchedAvatarlUrl: '' });

    // render
    WithChakraProvider(<HamburgerButton />);

    //render_aplloMock
    WithChakraProvider(
      <MockedProvider mocks={[]}>
        <HamburgerButton />
      </MockedProvider>,
    );

    //render_hooks
    const { result } = renderHook(() => useDashboardHeader());
    const { loginUserId, data } = result.current;

    //render_hooks_aplloMock
    const wrapper = ({ children }) => (
      <MockedProvider mocks={[]}>{children}</MockedProvider>
    );
    const { result: result2 } = renderHook(() => useSignUp(), { wrapper });
    const { submitLoading } = result2.current;

    //userevent
    userEvent.click(screen.getByTestId('humburgerbutton'));
    userEvent.click(screen.getByRole('button', { name: '再発行メールを送信' }));
    await act(async () => {
      userEvent.type(screen.getByTestId('nameInput'), 'type');
      userEvent.click(screen.getByRole('button', { name: '新規登録' }));
    });

    //act
    act(() => {
      userEvent.click(screen.getByRole('button', { name: 'キャンセル' }));
    });

    //useRef変更
    const titleRef = useRef<any>();
    titleRef.current = { ...titleRef.current, ...{ value: '' } };

    //expect
    expect(expectedOnOpenDrawer).toBeCalledTimes(1);
    expect(expectedOnOpenDrawer).toBeCalledWith('props');
    expect(screen.getByText('パスワードの再発行')).toBeInTheDocument();
    expect(screen.getByTestId('humburgerbutton')).toBeInTheDocument();
    expect(screen.queryByTestId('humburgerbutton')).toBeNull();
  });
  expect(screen.getByTestId('fromForgetToLogin')).toHaveAttribute(
    'href',
    '/login',
  );
});

export {};
