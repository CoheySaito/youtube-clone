/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import 'setimmediate';
import WithChakraProvider from '../../__test__/util/withChakraProvider';

import useSearchInput from '../../hooks/useSearchInput/useSearchInput';
import SearchInput from './SearchInput';

//mock
jest.mock('../../hooks/useSearchInput/useSearchInput');
const mockedUseSearchInput = useSearchInput as jest.MockedFunction<
  typeof useSearchInput
>;

describe('SearchInputテスト', () => {
  it('buttonをクリック→clickHandlerがcall', () => {
    //mock
    const ecpectedClickHandler = jest.fn();
    mockedUseSearchInput.mockReturnValue({
      inputRef: null,
      clickHandler: ecpectedClickHandler,
    });
    //reder
    WithChakraProvider(<SearchInput />);

    userEvent.click(screen.getByTestId('IconButton'));
    expect(ecpectedClickHandler).toBeCalledTimes(1);
  });
});
