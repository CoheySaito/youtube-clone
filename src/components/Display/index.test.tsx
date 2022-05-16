/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import Display, { DisplayType } from './Display';

//mock
//ItemContainer
jest.mock('../Item/ItemContainer', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="item">ItemContainer</div>;
    },
  };
});

//BasicPagination
jest.mock('../BasicPagination/BasicPagination', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>BasicPagination</div>;
    },
  };
});

describe('Displayテスト', () => {
  it('loading:true→spinner表示', () => {
    const props: DisplayType = { loading: true };
    WithChakraProvider(<Display {...props} />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('検索したが該当のビデオがない場合、serchQuery && videos.length == 0 → ${serchQuery}」を含む動画はありません', () => {
    const props: DisplayType = {
      serchQuery: 'serchQuery',
      videos: [],
    };
    WithChakraProvider(<Display {...props} />);
    expect(
      screen.getByText('「 serchQuery」を含む動画はありません'),
    ).toBeInTheDocument();
  });

  it('currentVideosが２つ → Itemコンポーネントが２つ表示', () => {
    const props: DisplayType = {
      currentVideos: [
        { id: 'id1', title: 'title1', created_at: 'created_at1' },
        { id: 'id2', title: 'title2', created_at: 'created_at2' },
      ],
    };
    WithChakraProvider(<Display {...props} />);
    expect(screen.getAllByTestId('item')).toHaveLength(2);
  });
});
