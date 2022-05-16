/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import DashboardHeader, { DashboardHeaderProps } from './DashboardHeader';

//mock
//SearchInputContainer
jest.mock('../SearchInput/SearchInputContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>SearchInputContainer</div>;
    },
  };
});

//HeaderUploadContainer
jest.mock('./HeaderUpload/HeaderUploadContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>HeaderUploadContainer</div>;
    },
  };
});

//HamburgerButtonContainer
jest.mock('./HamburgerButton/HamburgerButtonContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>HamburgerButtonContainer</div>;
    },
  };
});

//HeaderUploadContainer
jest.mock('./HeaderUpload/HeaderUploadContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>HeaderUploadContainer</div>;
    },
  };
});

//UserIconContainer
jest.mock('./UserIcon/UserIconContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>UserIconContainer</div>;
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
    const props: DashboardHeaderProps = {};
    WithChakraProvider(<DashboardHeader {...props} />);
    expect(screen.getByTestId('youtubeLogo')).toBeInTheDocument();
    expect(screen.getByTestId('youtubeLogo')).toHaveAttribute('href', '/');
  });
});
