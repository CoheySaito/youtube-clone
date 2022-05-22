/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import DashboardHeader, { Props } from './presenter';

//mock
//SearchInput
jest.mock('../SearchInput', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>SearchInput</div>;
    },
  };
});

//HeaderUpload
jest.mock('./HeaderUpload', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>HeaderUpload</div>;
    },
  };
});

//HamburgerButton
jest.mock('./HamburgerButton', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>HamburgerButton</div>;
    },
  };
});

//UserIcon
jest.mock('./UserIcon', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>UserIcon</div>;
    },
  };
});

describe('DashboardHeaderテスト', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  it('youtubeLogoの表示、リンク確認', () => {
    const props: Props = {};
    WithChakraProvider(<DashboardHeader {...props} />);
    expect(screen.getByTestId('youtubeLogo')).toBeInTheDocument();
    expect(screen.getByTestId('youtubeLogo')).toHaveAttribute('href', '/');
  });
});
