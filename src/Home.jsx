
import { Achievement, CTA, Categories, Companies, Courses, Feedback, Footers, Hero} from './Components';

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Companies/>
      <Courses/>
      <Achievement/>
      <Categories/>
      <Feedback/>
      <CTA/>
      <Footers/>
    </div>
  )
}

export default Home;