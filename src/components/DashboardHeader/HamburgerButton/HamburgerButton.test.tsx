/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WithChakraProvider from '../../../__test__/util/withChakraProvider';
import HamburgerButton from './HamburgerButton';

describe('DashboardHeaderテスト', () => {
  afterEach(() => {
    cleanup();
  });

  it('ハンバーガーメニュー表示', () => {
    WithChakraProvider(<HamburgerButton />);
    expect(screen.getByTestId('humburgerbutton')).toBeInTheDocument();
  });
  it('メニュークリック→onOpenDrawerがcall', () => {
    const expectedOnOpenDrawer = jest.fn();
    const props = { onOpenDrawer: expectedOnOpenDrawer };
    //render
    WithChakraProvider(<HamburgerButton {...props} />);
    userEvent.click(screen.getByTestId('humburgerbutton'));

    expect(expectedOnOpenDrawer).toBeCalledTimes(1);
  });
});
