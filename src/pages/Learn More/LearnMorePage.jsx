import { useEffect } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import undrawEducation from '/assets/images/undraw_education_f8ru.svg';
export default function LearnMorePage() {
  const navigate = useNavigate(),
    location = useLocation();
  useEffect(() => {
    if (location.pathname === '/learn-more') {
      navigate('/learn-more/campgrounds', { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <section className='bg-dark text-light text-center p-5'>
        <div className='d-md-flex align-items-center justify-content-around'>
          <div>
            <h1 className='display-4'>Learn More</h1>
            <p>
              We offer you the organizer, the camper, and the in-between the
              ability to create and plan an amazing experience with as much ease
              as is possible. Find out how we can help you.
            </p>
          </div>
          <div>
            <img
              src={undrawEducation}
              alt='drawing of person learning'
              className='img-fluid'
            />
          </div>
        </div>
        <div className='mt-5 pt-4'>
          <h2 className='mb-3'>
            We offer services to help make planning your next camping trip easy
            and fun.
          </h2>
          <p>
            Learn about campgrounds, tools and other essentials you need for a
            successful trip. Also, we'll keep it organized for you.
          </p>
        </div>
      </section>
      <section className='p-5'>
        <h3 className='text-center text-capitalize h2'>Learn About:</h3>
        <nav>
          <ul className='nav nav-tabs d-flex justify-content-center'>
            <li className='nav-item mx-1'>
              <NavLink to='/learn-more/campgrounds' className='nav-link'>
                Camp Grounds
              </NavLink>
            </li>
            <li className='nav-item mx-1'>
              <NavLink to='/learn-more/campaigns' className='nav-link'>
                Gear
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      {location.pathname === '/learn-more' && (
        <div className='space-maker'></div>
      )}
      <Outlet />
    </>
  );
}
