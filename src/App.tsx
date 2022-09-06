import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';

// author: { avatar_url: '', name: '', role: '' }
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedrOAlquimim.png',
      name: 'Pedro Alquimim',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Hey guys! 👋'},
      {type: 'paragraph', content: "I have just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The name of the project is DoctorCare 🚀"},
      {type: 'link', content: 'pedro.design/doctorcare'}
    ],
    publishedAt: new Date('2022-08-01 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/BrunoEnriqueB.png',
      name: 'Bruno Enrique',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Hey guys! 👋'},
      {type: 'paragraph', content: "I have just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The name of the project is DoctorCare 🚀"},
      {type: 'link', content: 'pedro.design/doctorcare'}
    ],
    publishedAt: new Date('2022-08-02 20:00:00')
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(posts => {
            return (
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App