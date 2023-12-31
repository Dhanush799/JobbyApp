import {Link} from 'react-router-dom'
import Header from '../Header/index'

import './index.css'

const Home = props => {
  console.log(props)

  return (
    <div className="home-page-container">
      <Header />
      <div className="home-content">
        <h1 className="heading">Find The Job That Fits Your Life</h1>
        <p className="paragraph">
          Millions of people are searching for jobs, salary, information,
          company reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button className="find-jobs-button" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
