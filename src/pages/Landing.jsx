import { Link } from 'react-router-dom';
import unsplashMoon from '/assets/images/undraw_moonlight_-5-ksn.svg';
import unsplashAdventure from '/assets/images/undraw_adventure_map_hnin.svg';
const LandingPage = () => {
  return (
    <>
      {/* Header Splash */}
      <section className='bg-dark w-100 d-flex position-relative'>
        <img
          src={unsplashMoon}
          alt='drawing of night sky with moonlight and person at campfire'
          className='img-fluid mx-auto no-interact'
        />
        <div className='text-white position-absolute top-50 start-50 translate-middle'>
          <h1 className='display-4 slight-text-shadow'>
            Take a Rest - Short or Long
          </h1>
          <p className='d-none d-sm-block slight-text-shadow'>
            You've journeyed long and far. Traversed mountains, fought monsters,
            and remained victorious.
          </p>
          <p className='text-muted d-none d-sm-block slight-text-shadow'>
            Let us keep track of it all for you.
          </p>
        </div>
      </section>
      {/* Cards */}
      <section className='p-5 container'>
        <h2 className='text-center text-capitalize display-5 mb-4'>
          Let us handle the work for you
        </h2>
        <div className='d-lg-flex align-items-center justify-content-between '>
          <div className='card w-100 h-100  w-sm-50 m-2 border-secondary shadow-sm card-background'>
            <div className='card-body'>
              <div className='icon-size mb-3 text-secondary text-center'>
                <i className='bi bi-file-person'></i>
              </div>
              <div className='card-title lead fs-3 text-primary'>
                Plan Ahead
              </div>
              <div className='card-subtitle text-muted mb-3'>
                Stay Organized
              </div>
              <p className='card-text'>
                Your love of camping shouldn't be impeded by the work needed to
                organize a successful trip. Let us help you keep it organized.
              </p>
              <div className='d-flex align-items-center justify-content-around'>
                <Link to='/learn-more/organization'>
                  <button className='btn btn-secondary text-light'>
                    Learn More
                  </button>
                </Link>
                <Link to='/user/character/create'>
                  <button className='btn btn-outline-secondary'>
                    Create Trip
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='card w-100 h-100 w-sm-50 m-2 border-secondary shadow-sm card-background'>
            <div className='card-body'>
              <div className='icon-size mb-3 text-secondary text-center'>
                <i className='bi bi-door-open'></i>
              </div>
              <div className='card-title lead fs-3 text-primary'>Explore</div>
              <div className='card-subtitle text-muted mb-3'>Adventure On</div>
              <p className='card-text'>
                While we've been helping you organize, we've also taken the
                opportunity to research some camp grounds for you. Take a look!
              </p>
              <div className='d-flex align-items-center justify-content-around'>
                <Link to='/learn-more/campaigns'>
                  {/*className='my-2'*/}
                  <button className='btn btn-secondary text-light'>
                    Learn More
                  </button>
                </Link>
                <Link to='/user/campaign/create'>
                  <button className='btn btn-outline-secondary'>
                    View Locations
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Now */}
      <section className='p-5 bg-dark text-light'>
        <div className='d-md-flex align-items-center justify-content-around'>
          <div>
            <h2 className=' text-capitalize display-5 mb-4'>
              Create Today, Explore Tomorrow
            </h2>
            <p>
              Build your own camping experience. Take the command, organize your
              needs and goals and set out for an amazing experience.
            </p>
            <div className='d-md-flex align-items-center justify-content-around'>
              <button className='btn btn-md-lg btn-outline-light m-1'>
                Create Trip
              </button>
              <button className='btn btn-md-lg btn-outline-light m-1'>
                View Locations
              </button>
            </div>
          </div>
          <div>
            <img
              src={unsplashAdventure}
              alt='person on adventure drawing'
              className='img-fluid'
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default LandingPage;
