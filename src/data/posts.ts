export type Post = {
  id: number
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'How I Manage My University Time',
    date: 'October 5, 2026',
    excerpt: 'My experience with balancing university tasks and personal time.',
    content:
      'University life can be busy, especially when several assignments have the same deadline. I try to organize my tasks by priority and divide large assignments into smaller steps. This helps me understand what I need to do first and makes my workload feel more manageable.',
    tags: ['University', 'Time Management'],
  },
  {
    id: 2,
    title: 'My Journey in Web Development',
    date: 'October 9, 2026',
    excerpt: 'What I have learned while studying web development.',
    content:
      'Learning web development has introduced me to HTML, CSS, JavaScript, React, and TypeScript. At first, some concepts were difficult to understand, but practice helped me become more confident. I especially enjoy seeing how separate pieces of code become a working website.',
    tags: ['Web Development', 'Learning'],
  },
  {
    id: 3,
    title: 'Learning React Step by Step',
    date: 'October 13, 2026',
    excerpt: 'My first experience with components, state, and React applications.',
    content:
      'React helped me understand how a website can be divided into reusable components. I learned how components work together and how state can make a page interactive. I am still learning React, but building small projects makes the concepts much easier to understand.',
    tags: ['React', 'Programming'],
  },
  {
    id: 4,
    title: 'How I Stay Productive',
    date: 'October 17, 2026',
    excerpt: 'Simple habits that help me complete my tasks.',
    content:
      'For me, productivity is not about working all day. I work better when I know exactly what I need to complete. I usually make a short list of important tasks and focus on them one by one. Taking breaks also helps me return to my work with more concentration.',
    tags: ['Productivity', 'Student Life'],
  },
  {
    id: 5,
    title: 'Balancing Study and Personal Life',
    date: 'October 21, 2026',
    excerpt: 'Why having time outside university is important to me.',
    content:
      'Studying is important, but I also think personal time is necessary. When I spend all my time thinking about assignments, I become tired and less productive. I try to leave some time for rest, hobbies, friends, and other activities that help me recharge.',
    tags: ['Lifestyle', 'University'],
  },
]