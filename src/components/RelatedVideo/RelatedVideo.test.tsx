/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import RelatedVideo, { RelatedVideoProps } from './RelatedVideo';

//mock
//RelatedVideoItemContainer
jest.mock('./RelatedVideoItem/RelatedVideoItemContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return (
        <div data-testid="relatedVideoItemContainer">
          RelatedVideoItemContainer
        </div>
      );
    },
  };
});
describe('RelatedVideoテスト', () => {
  it('loading:true → spinner表示', () => {
    const props: RelatedVideoProps = { loading: true };
    WithChakraProvider(<RelatedVideo {...props} />);
    screen.debug();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('{data.videos2データ → filter1データ → 表示1データ', () => {
    const props: RelatedVideoProps = {
      data: {
        videos: [
          { id: 'id1', title: 'title1', created_at: 'created_at1' },
          { id: 'id2', title: 'title2', created_at: 'created_at2' },
        ],
      },
      id: 'id1',
    };
    WithChakraProvider(<RelatedVideo {...props} />);
    screen.debug();
    expect(screen.getAllByTestId('relatedVideoItemContainer')).toHaveLength(1);
  });
});
