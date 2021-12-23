import { graphql } from 'msw';
export const handlers = [
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            created_at: '2021-10-22T13:09:55.389522+00:00',
            email: 'test2@mail.com',
            id: 'id2',
            name: 'testName2',
            updated_at: '2021-10-23T09:29expectedRouterPush:04.429803+00:00',
            profile_photo_url: null,
          },
          {
            created_at: '2021-11-01T12:55:33.268119+00:00',
            email: 'test4@g.com',
            id: 'WVSNEJiLkUQ6ZJ80gQ52ySqJ0hG3',
            name: 'test001',
            updated_at: '2021-11-01T12:55:33.268119+00:00',
            profile_photo_url: null,
          },
        ],
      }),
    );
  }),

  graphql.query('GetUserById', (req, res, ctx) => {
    const { id } = req.variables;
    if (id === 'id2') {
      return res(
        ctx.data({
          users_by_pk: {
            created_at: '2021-10-22T13:09:55.389522+00:00',
            email: 'test2@mail.com',
            id: 'id2',
            name: 'testName2',
            profile_photo_url: null,
          },
        }),
      );
    }
  }),

  graphql.query('GetVideos', (req, res, ctx) => {
    return res(
      ctx.data({
        videos: [
          {
            id: 'd1e11291-636c-4e8e-a1a6-94d53e5dfc69',
            title: '市街地ドローン映像',
            description: '高速道路',
            created_at: '2021-11-15T11:42:06.582644+00:00',
            thumbnail_url:
              'thumbnails/9d4fe417-cb50-4c77-b59d-6de6acd6b15c.jpeg',
            video_url: 'videos/d1e11291-636c-4e8e-a1a6-94d53e5dfc69.mp4',
            views: 875,
            user: {
              name: 'Ringo',
              profile_photo_url: 'avatar/ringo.jpg',
            },
          },
          {
            id: 'd668c189-ef25-464e-b1ca-ed5e0e6b97a3',
            title: 'ソウルの夜景',
            description: '都会の夜景',
            created_at: '2021-11-10T12:16:18.010844+00:00',
            thumbnail_url:
              'thumbnails/15c58c5a-61da-4c8d-9d20-4f38d0d942ad.jpeg',
            video_url: 'videos/d668c189-ef25-464e-b1ca-ed5e0e6b97a3.mp4',
            views: 541,
            user: {
              name: 'Paul',
              profile_photo_url: 'avatar/paul.jpg',
            },
          },
        ],
      }),
    );
  }),

  graphql.query('GetVideoById', (req, res, ctx) => {
    const { id } = req.variables;
    if (id === '4c5e5436-4239-4454-b384-6a2a04a3a91c') {
      return res(
        ctx.data({
          videos_by_pk: {
            created_at: '2021-11-10T12:14:11.846872+00:00',
            description: '温かみがある音',
            id: '4c5e5436-4239-4454-b384-6a2a04a3a91c',
            thumbnail_url:
              'thumbnails/847185e3-0bb7-4829-b536-85191453bda9.jpeg',
            title: 'アナログレコード',
            video_url: 'videos/4c5e5436-4239-4454-b384-6a2a04a3a91c.mp4',
            views: 548,
            user: {
              name: 'John',
              number_of_subscribers: 66984,
              profile_photo_url: 'avatar/john.jpg',
            },
          },
        }),
      );
    }
  }),
];
