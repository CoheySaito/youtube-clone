/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WithChakraProvider from '../../../__test__/util/withChakraProvider';
import HamburgerButtonPresenter from './presenter';

describe('DashboardHeaderテスト', () => {
  afterEach(() => {
    cleanup();
  });

  it('ハンバーガーメニュー表示', () => {
    WithChakraProvider(<HamburgerButtonPresenter />);
    expect(screen.getByTestId('humburgerbutton')).toBeInTheDocument();
  });
  it('メニュークリック→onOpenDrawerがcall', () => {
    const expectedOnOpenDrawer = jest.fn();
    const props = { onOpenDrawer: expectedOnOpenDrawer };
    //render
    WithChakraProvider(<HamburgerButtonPresenter {...props} />);
    userEvent.click(screen.getByTestId('humburgerbutton'));

    expect(expectedOnOpenDrawer).toBeCalledTimes(1);
  });
});
