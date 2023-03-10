export default function LearnMoreCampGrounds() {
  return (
    <section className='container mb-3'>
      <h2 className='display-5'>Camp Grounds</h2>
      <p>Choosing where you plan to camp is pivitol for the experience.</p>
      <p>
        Learn about the different types of campgrounds, their pros and cons, and
        which kinds may suit you best.
      </p>
      <div className='accordion' id='campaignAccordion'>
        {/* Question 1 */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='q1'>
            <button
              className='accordion-button collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#collapse-q1'
            >
              Different types of campgrounds, how so?
            </button>
          </h2>
          <div
            id='collapse-q1'
            className='accordion-collapse collapse '
            data-bs-parent='#campaignAccordion'
          >
            <div className='accordion-body'>
              You'll find two major types of campgrounds: public and private.
              Public campgrounds are the most common with many options to chose
              from. These campgrounds often contain the fewest additional
              ameneties but if you're looking to spend time in the great
              outdoors, this likely won't be a problem. <br />
              <br />
              Private campgrounds on the other hand tend to be more ameneties
              based than anything else. You may often find more child-friendly
              activities, games and more pre-planned and fully staffed. You may
              also find things like hot showers, WiFi and more.
            </div>
          </div>
        </div>
        {/* Question 2 */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='q2'>
            <button
              className='accordion-button collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#collapse-q2'
            >
              What do you really need?
            </button>
          </h2>
          <div
            id='collapse-q2'
            className='accordion-collapse collapse '
            data-bs-parent='#campaignAccordion'
          >
            <div className='accordion-body'>
              For a great camping trip you'll want to bring a few essentials
              with you:
              <ul class='list-group list-group-flush'>
                <li class='list-group-item'>A tent</li>
                <li class='list-group-item'>Sleeping bags/pillows</li>
                <li class='list-group-item'>Flashlight and/or a lantern</li>
                <li class='list-group-item'>Food!</li>
              </ul>
            </div>
          </div>
        </div>
        {/*Question 3  */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='q3'>
            <button
              className='accordion-button collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#collapse-q3'
            >
              What can I do at a campground?
            </button>
          </h2>
          <div
            id='collapse-q3'
            className='accordion-collapse collapse '
            data-bs-parent='#campaignAccordion'
          >
            <div className='accordion-body'>
              Well, basically anything!
              <br />
              <br />
              You can do anything from hiking to fishing to canoeing to cloud
              wathing and anything and everything in between (provided the
              campground has things like a river to swim in, etc.).
              <br />
              <br />
              Some campgrounds may not allow all activities, so make sure to
              check the rules for your chosen campsite ahead of planning your
              activities.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
