const btnList = document.querySelector('.tours__buttons-list');
const toursGalleryList = document.querySelector('.tours__gallery');

btnList.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  if (
    !event.target.classList.contains('active') &&
    event.target.nodeName === 'BUTTON'
  ) {
    const currentActiveClass = document.querySelector('.active');
    currentActiveClass.classList.remove('active');
    event.target.classList.add('active');

    switch (event.target.textContent) {
      case 'Europe':
        toursGalleryList.innerHTML = europeTourMarkup();
        break;
      case 'America':
        toursGalleryList.innerHTML = americanTourMarkup();
        break;
      case 'Africa':
        toursGalleryList.innerHTML = africaToursMarkup();
        break;
      case 'Asia':
        toursGalleryList.innerHTML = asiaToursMarkup();
        break;
      case 'Australia':
        toursGalleryList.innerHTML = australiaToursMarkup();
        break;
    }
  }

  function europeTourMarkup() {
    return `<li class="tours__gallery-item">
        <div class="tours__gallery-img-container">
          <img
            src="./images/fabulous-rome.jpg"
            alt="Couple in Rome"
            width="353"
            height="402"
            class="tours__gallery-img"
          />
        </div>
        <h3 class="tours__gallery-title">Fabulous Rome</h3>
        <p class="tours__gallery-price">
          from <span class="tours__gallery-amount">$320</span>
        </p>
        <p class="tours__gallery-description">
          Colosseum, Pantheon, and Vatican are waiting for you! We will see the
          most beautiful places in Rome, admire sunsets from the viewing
          platforms, etc.
        </p>
        <ul class="tours__gallery-info-list">
          <li class="tours__gallery-info-item">
            <svg class="tours__gallery-info-icon" width="20" height="20">
              <use href="./images/icons.svg#icon-instagram-tour"></use>
            </svg>
            <p class="tours__gallery-info-text">
              <span class="tours__galleru-info-accent">Photographer:</span>
              Alexandro Rossa
            </p>
          </li>
          <li class="tours__gallery-info-item">
            <svg class="tours__gallery-info-icon" width="20" height="20">
              <use href="./images/icons.svg#icon-clocks-tour"></use>
            </svg>
            <p class="tours__gallery-info-text">
              <span class="tours__galleru-info-accent">Duration:</span>
              5 days
            </p>
          </li>
          <li class="tours__gallery-info-item">
            <svg class="tours__gallery-info-icon" width="20" height="20">
              <use href="./images/icons.svg#icon-star-tour"></use>
            </svg>
            <p class="tours__gallery-info-text">
              <span class="tours__galleru-info-accent">Type:</span> City tours,
              History, Gastro
            </p>
          </li>
        </ul>
        <p class="tours__gallery-date">
          <span class="tours__gallery-date-accent">Date:</span> 10.11.2021
        </p>
      </li>
      <li class="tours__gallery-item">
        <div class="tours__gallery-img-container">
          <img
            src="./images/discover-ukraine.jpg"
            alt="Couple in Rome"
            width="353"
            height="402"
            class="tours__gallery-img"
          />
        </div>
        <h3 class="tours__gallery-title">Discover Ukraine</h3>
        <p class="tours__gallery-price">
          from <span class="tours__gallery-amount">$220</span>
        </p>
        <p class="tours__gallery-description">
          We will see the most beautiful cities of Ukraine, national parks, and
          spend wonderful 10 days among very friendly people.
        </p>
        <ul class="tours__gallery-info-list">
          <li class="tours__gallery-info-item">
            <svg class="tours__gallery-info-icon" width="20" height="20">
              <use href="./images/icons.svg#icon-instagram-tour"></use>
            </svg>
            <p class="tours__gallery-info-text">
              <span class="tours__galleru-info-accent">Photographer:</span>
              Alicia Keish
            </p>
          </li>
          <li class="tours__gallery-info-item">
            <svg class="tours__gallery-info-icon" width="20" height="20">
              <use href="./images/icons.svg#icon-clocks-tour"></use>
            </svg>
            <p class="tours__gallery-info-text">
              <span class="tours__galleru-info-accent">Duration:</span>
              10 days
            </p>
          </li>
          <li class="tours__gallery-info-item">
            <svg class="tours__gallery-info-icon" width="20" height="20">
              <use href="./images/icons.svg#icon-star-tour"></use>
            </svg>
            <p class="tours__gallery-info-text">
              <span class="tours__galleru-info-accent">Type:</span>
              Nature & adventure, City tours, History
            </p>
          </li>
        </ul>
        <p class="tours__gallery-date">
          <span class="tours__gallery-date-accent">Date:</span> 12.12.2021
        </p>
      </li>
      <li class="tours__gallery-item">
        <div class="tours__gallery-img-container">
          <img
            src="./images/venice-and-florence.jpg"
            alt="Couple in Rome"
            width="353"
            height="402"
            class="tours__gallery-img"
          />
        </div>
        <h3 class="tours__gallery-title">Venice and Florence</h3>
        <p class="tours__gallery-price">
          from <span class="tours__gallery-amount">$175</span>
        </p>
        <p class="tours__gallery-description">
          On this trip, we will see two incredibly beautiful cities in Italy -
          Venice and Florence. We will have a gondola ride, a walk along the
          Golden Bridge, etc.
        </p>
        <ul class="tours__gallery-info-list">
          <li class="tours__gallery-info-item">
            <svg class="tours__gallery-info-icon" width="20" height="20">
              <use href="./images/icons.svg#icon-instagram-tour"></use>
            </svg>
            <p class="tours__gallery-info-text">
              <span class="tours__galleru-info-accent">Photographer:</span>
              Alexandro Rossa
            </p>
          </li>
          <li class="tours__gallery-info-item">
            <svg class="tours__gallery-info-icon" width="20" height="20">
              <use href="./images/icons.svg#icon-clocks-tour"></use>
            </svg>
            <p class="tours__gallery-info-text">
              <span class="tours__galleru-info-accent">Duration:</span>
              5 days
            </p>
          </li>
          <li class="tours__gallery-info-item">
            <svg class="tours__gallery-info-icon" width="20" height="20">
              <use href="./images/icons.svg#icon-star-tour"></use>
            </svg>
            <p class="tours__gallery-info-text">
              <span class="tours__galleru-info-accent">Type:</span> Boat tours,
              City tours, History
            </p>
          </li>
        </ul>
        <p class="tours__gallery-date">
          <span class="tours__gallery-date-accent">Date:</span> 02.01.2022
        </p>
      </li>`;
  }

  function americanTourMarkup() {
    return `<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/skyscrapers.jpg"
      alt="Skyscrapers"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">The Great American Trip</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$460</span>
  </p>
  <p class="tours__gallery-description">
    Our tour is ideal for those who are in America for the first time or just
    want to embrace the best places in our wonderful country in one trip.
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Alexandro Rossa
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        10 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span> City tours,
        History
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 10.11.2022
  </p>
</li>
<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/statue-of-liberty.jpg"
      alt="Couple in Rome"
      width="353"
      height="402"
      class="Statue of liberty"
    />
  </div>
  <h3 class="tours__gallery-title">New York</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$275</span>
  </p>
  <p class="tours__gallery-description">
    Who wants to wake up in a city that never sleeps? We'll visit all the best
    places in NY, and enjoy fine dishes in the most instagrammable restaurants.
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Alicia Keish
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        5 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span>
        City tours, Gastro
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 11.11.2022
  </p>
</li>
<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/lighthouse.jpg"
      alt="Lighthouse"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">Beauty of American Nature</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$320</span>
  </p>
  <p class="tours__gallery-description">
    America is not only a land of skyscrapers and modern technology. We will
    visit natural parks, see waterfalls, lakes, and so many other places!
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Melissa Sol
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        7 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span> Nature & adventure
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 12.12.2022
  </p>
</li>`;
  }

  function africaToursMarkup() {
    return `<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/city-in-desert.jpg"
      alt="City in the desert"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">Red Cities and Deserts</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$575</span>
  </p>
  <p class="tours__gallery-description">
    Africa has many deserts: Sahara, Kalahari, Namib, Nubian, Libyan, Western
    Sahara, Algeria, and the Atlas Mountains. We will see them all!
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Alexandro Rossa
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        10 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span> Nature & adventure
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 09.11.2021
  </p>
</li>
<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/mosque.jpg"
      alt="Mosque"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">Different Africa</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$350</span>
  </p>
  <p class="tours__gallery-description">
    Africa is not only about nature, it also has very beautiful cities. We will
    see a completely different Africa and visit the most beautiful places.
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Melissa Sol
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        7 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span>
        Nature & adventure, City tours
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 11.11.2021
  </p>
</li>
<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/elephants.jpg"
      alt="Elephants"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">Tanzanian Safari</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$475</span>
  </p>
  <p class="tours__gallery-description">
    Have you always wanted to live with animals? Now is your chance! Join us for
    a unique safari in Tanzania and go wild!
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Alexandro Rossa
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        10 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span> Nature &
        adventure, Safari
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 02.02.2022
  </p>
</li>`;
  }

  function asiaToursMarkup() {
    return `<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/taj-mahal.jpg"
      alt="Taj Mahal"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">Peerless Taj Mahal</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$250</span>
  </p>
  <p class="tours__gallery-description">
    We will see the pearl of India, the Taj Mahal in all its glory. We will also
    visit many other beautiful places in India and take stunning photos.
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Alexandro Rossa
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        5 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span> City tours,
        History
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 08.11.2021
  </p>
</li>
<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/chinese-gate.jpg"
      alt="Chinese gate"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">Chinese Essentials</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$350</span>
  </p>
  <p class="tours__gallery-description">
    On this tour, we have collected all the iconic places in China that every
    tourist should see, from Shanghai to the Chinese Wall.
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Melissa Sol
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        7 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span>
        City tours, History
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 11.12.2021
  </p>
</li>
<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/buddha.jpg"
      alt="Elephants"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">Spiritual Thailand</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$625</span>
  </p>
  <p class="tours__gallery-description">
    Thailand means not only a beach holiday, although we will have it too. But
    apart from the beaches, we will also see stunning temples.
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Alicia Keish
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        15 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span> Nature &
        adventure, Resorts
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 05.01.2022
  </p>
</li>`;
  }

  function australiaToursMarkup() {
    return `<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/surfers.jpg"
      alt="Surfers"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">Australian Surfing</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$550</span>
  </p>
  <p class="tours__gallery-description">
    Australian beaches are considered to be one of the best surfing
    spots.Stunning sunsets and staying in exquisite lodges await you. Join our
    adventure!
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Alicia Keish
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        5 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span> Nature &
        adventure, Surfing
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 10.11.2021
  </p>
</li>
<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/sydney.jpg"
      alt="Chinese gate"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">Sydney + Canberra</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$450</span>
  </p>
  <p class="tours__gallery-description">
    We will see two of Australia's most beautiful cities. And, of course, we
    will visit the opera in Sydney, which you can see on any postcard.
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Alexandro Rossa
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        7 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span>
        City tours, History
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 11.12.2021
  </p>
</li>
<li class="tours__gallery-item">
  <div class="tours__gallery-img-container">
    <img
      src="./images/divers.jpg"
      alt="Elephants"
      width="353"
      height="402"
      class="tours__gallery-img"
    />
  </div>
  <h3 class="tours__gallery-title">PRO Diving Tour</h3>
  <p class="tours__gallery-price">
    from <span class="tours__gallery-amount">$875</span>
  </p>
  <p class="tours__gallery-description">
    We offer a diving tour to Australia. Underwater shooting and uncharted
    depths await us. PADI/CMAS certificate is required.
  </p>
  <ul class="tours__gallery-info-list">
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-instagram-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Photographer:</span>
        Alicia Keish
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-clocks-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Duration:</span>
        10 days
      </p>
    </li>
    <li class="tours__gallery-info-item">
      <svg class="tours__gallery-info-icon" width="20" height="20">
        <use href="./images/icons.svg#icon-star-tour"></use>
      </svg>
      <p class="tours__gallery-info-text">
        <span class="tours__galleru-info-accent">Type:</span> Nature &
        adventure, Diving
      </p>
    </li>
  </ul>
  <p class="tours__gallery-date">
    <span class="tours__gallery-date-accent">Date:</span> 01.01.2022
  </p>
</li>`;
  }
}
