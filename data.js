export const user = {
  name: 'Sid',
  username: 'siddharthkp',
  avatar:
    'https://pbs.twimg.com/profile_images/1298933888169971712/fj0dQ0M9_400x400.jpg',
};

export const posts = [
  {
    id: 'ioewj3',
    author: {
      name: 'Megha',
      username: 'Megha_Pathak_',
      avatar:
        'https://pbs.twimg.com/profile_images/1355515222455447554/vh5ohEKK_400x400.jpg',
    },
    timestamp: 'Mar 19, 2021 10:07 AM',
    body: `
I turned 21 today! 🥳🎂

The ONLY thing that kept me excited for today this year was seeing Twitter making balloons float on my profile. 🤣🤣
`,
    replies: [],
  },
  {
    id: 'asui3',
    author: {
      name: 'Pavithra',
      username: 'PKodmad',
      avatar:
        'https://pbs.twimg.com/profile_images/1007052431295856640/9D9qHTV6_400x400.jpg',
    },
    timestamp: 'Mar 19, 2021 10:07 AM',
    style: { whiteSpace: 'pre' },
    body: `
          guys on twitter with great                highly experienced 
                career prospects                            women devs
                                                            🤝

                                                #juniordevforlife

`,
    replies: [
      {
        author: {
          name: 'Sid',
          username: 'siddharthkp',
          avatar:
            'https://pbs.twimg.com/profile_images/1298933888169971712/fj0dQ0M9_400x400.jpg',
        },
        body: `🥵`,
        timestamp: 'Mar 19, 2021 10:07 AM',
      },
      {
        author: {
          name: 'Varsha',
          username: 'saha_varsha',
          avatar:
            'https://pbs.twimg.com/profile_images/1366050993964605441/4lJJUpr7_400x400.jpg',
        },
        body: `ouch!`,
        timestamp: 'Mar 19, 2021 10:07 AM',
      },
    ],
  },
  {
    id: 'po3po',
    author: {
      name: 'Neha',
      username: 'hellonehha',
      avatar:
        'https://pbs.twimg.com/profile_images/1279389930620215296/QFbB4JhB_400x400.jpg',
    },
    timestamp: 'Mar 19, 2021 10:07 AM',
    body: `Amazing things will happen 💖
    
    Art + calligraphy`,
    embed: {
      type: 'image',
      image:
        'https://pbs.twimg.com/media/EwlCOMBVkAEUK1L?format=jpg&name=medium',
    },
    replies: [],
  },
  {
    id: 'aa3i3',
    author: {
      name: 'Prateek',
      username: '_prateekbh',
      avatar: 'https://github.com/prateekbh.png',
    },
    timestamp: 'Mar 19, 2021 10:07 AM',
    body: `Opening my Github profile repo for AMA:`,
    embed: {
      type: 'github',
      title: 'prateekbh/prateekbh',
      image: 'https://image.flaticon.com/icons/png/512/25/25231.png',
      link: {
        title: 'github.com',
        href: 'https://github.com/prateekbh/prateekbh/issues',
      },
    },
    replies: [],
  },
];

export const newPosts = [
  {
    id: 'pe3oc',
    author: {
      name: 'Sanket Sahu',
      username: 'sanketsahu',
      avatar:
        'https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg',
    },
    body: `People outside elevators queue but inside they stack.`,
    timestamp: new Date(),
    replies: [],
  },
  {
    id: 'srbh2',
    author: {
      name: 'Saurabh',
      username: 'saurabhcodes',
      avatar:
        'https://pbs.twimg.com/profile_images/1342537950651764737/vRpqLxVF_400x400.jpg',
    },
    body: `We randomly decided to walk 12km as an evening walk 🤭`,
    timestamp: new Date(),
    replies: [],
  },
];
