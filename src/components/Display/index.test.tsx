/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import WithChakraProvider from '../../__test__/util/withChakraProvider';
import DisplayPresenter, { Props } from './presenter';

//mock
jest.mock('../Item', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="item">ItemContainer</div>;
    },
  };
});

//BasicPagination
jest.mock('../BasicPagination', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>BasicPagination</div>;
    },
  };
});

describe('DisplayPresenterテスト', () => {
  it('loading:true→spinner表示', () => {
    const props: Props = { loading: true };
    WithChakraProvider(<DisplayPresenter {...props} />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('検索したが該当のビデオがない場合、serchQuery && videos.length == 0 → ${serchQuery}」を含む動画はありません', () => {
    const props: Props = {
      serchQuery: 'serchQuery',
      videos: [],
    };
    WithChakraProvider(<DisplayPresenter {...props} />);
    expect(
      screen.getByText('「 serchQuery」を含む動画はありません'),
    ).toBeInTheDocument();
  });

  it('currentVideosが２つ → Itemコンポーネントが２つ表示', () => {
    const props: Props = {
      currentVideos: [
        { id: 'id1', title: 'title1', created_at: 'created_at1' },
        { id: 'id2', title: 'title2', created_at: 'created_at2' },
      ],
    };
    WithChakraProvider(<DisplayPresenter {...props} />);
    expect(screen.getAllByTestId('item')).toHaveLength(2);
  });
});
