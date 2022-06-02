/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import RelatedVideoPresenter, { Props } from './presenter';

//mock
//RelatedVideoItem
jest.mock('./RelatedVideoItem', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="RelatedVideoItem">RelatedVideoItem</div>;
    },
  };
});
describe('RelatedVideoPresenterテスト', () => {
  it('loading:true → spinner表示', () => {
    const props: Props = { loading: true };
    WithChakraProvider(<RelatedVideoPresenter {...props} />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('{data.videos2データ → filter1データ → 表示1データ', () => {
    const props: Props = {
      data: {
        videos: [
          { id: 'id1', title: 'title1', created_at: 'created_at1' },
          { id: 'id2', title: 'title2', created_at: 'created_at2' },
        ],
      },
      id: 'id1',
    };
    WithChakraProvider(<RelatedVideoPresenter {...props} />);
    expect(screen.getAllByTestId('RelatedVideoItem')).toHaveLength(1);
  });
});
