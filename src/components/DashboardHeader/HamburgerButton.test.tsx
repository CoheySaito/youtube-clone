/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import HamburgerButton from './HamburgerButton';
import * as chakraui from '@chakra-ui/react';

describe('DashboardHeaderテスト', () => {
  afterEach(() => {
    cleanup();
  });

  it('ハンバーガーメニュー表示', () => {
    WithChakraProvider(<HamburgerButton />);
    expect(screen.getByTestId('humburgerbutton')).toBeInTheDocument();
  });
  it('メニュークリック→onOpenDrawerがcall', () => {
    //mock
    const expectedOnOpenDrawer = jest.fn();

    const useDisclosureSpy = jest.spyOn(chakraui, 'useDisclosure');
    (useDisclosureSpy as jest.MockedFunction<any>).mockReturnValue({
      isOpen: false,
      onOpen: expectedOnOpenDrawer,
      onClose: jest.fn(),
    });

    //render
    WithChakraProvider(<HamburgerButton />);
    userEvent.click(screen.getByTestId('humburgerbutton'));

    expect(expectedOnOpenDrawer).toBeCalledTimes(1);
  });
});
