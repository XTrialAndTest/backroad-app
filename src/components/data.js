import tour1 from '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';
import tour5 from '../images/tour-5.jpeg';
import tour6 from '../images/tour-6.jpeg';
const links = [
  {
    id: 5,
    href: '#home',
    name: 'home',
  },
  {
    id: 1,
    href: '#about',
    name: 'about',
  },
  { id: 2, href: '#services', name: 'services' },
  { id: 3, href: '#tours', name: 'tours' },
  { id: 4, href: '#footer', name: 'footer' },
];
export const PageLinks = ({ parent }) => {
  return (
    <>
      {links.map(({ id, href, name }) => {
        return (
          <li key={id}>
            <a href={href} className={parent}>
              {' '}
              {name}{' '}
            </a>
          </li>
        );
      })}
    </>
  );
};
const socials = [
  { id: 1, href: 'https://www.twitter.com', fav: 'fab fa-twitter' },
  { id: 2, href: 'https://www.facebook.com', fav: 'fab fa-facebook' },
  { id: 3, href: 'https://www.squarespace.com', fav: 'fab fa-squarespace' },
];
export const SocialLinks = () => {
  return (
    <>
      {socials.map(({ id, href, fav }) => {
        return (
          <li key={id}>
            <a
              href={href}
              target='_blank'
              rel='noreferrer'
              className='nav-icon'
            >
              <i className={fav}></i>
            </a>
          </li>
        );
      })}
    </>
  );
};
const serices = [
  {
    id: 1,
    fav: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 2,
    fav: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 3,
    fav: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
];
export const Service = () => {
  return (
    <>
      {serices.map(({ id, fav, title, text }) => {
        return (
          <article className='service' key={id}>
            <span className='service-icon'>
              <i className={fav}></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>{title}</h4>
              <p className='service-text'>{text}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

const tour = [
  {
    id: 1,
    date: 'august 26th, 2020',
    img: tour1,
    title: 'Tibet Adventure',

    destination: 'china',
    days: '6',
    price: '2100',
  },
  {
    id: 2,
    date: 'october 1th, 2020',
    img: tour2,
    title: 'best of java',

    destination: 'indonesia',
    days: '11',
    price: '1400',
  },
  {
    id: 3,
    date: 'september 15th, 2020',
    img: tour3,
    title: 'explore hong kong',

    destination: 'hong kong',
    days: '8',
    price: '5000',
  },
  {
    id: 4,
    date: 'january 5th, 2021',
    img: tour6,
    title: 'Maldives white beaches',

    destination: 'maldives',
    days: '45',
    price: '7800',
  },
  {
    id: 4,
    date: 'december 5th, 2019',
    img: tour5,
    title: 'cold deserts of Namibia',

    destination: 'Namibia',
    days: '10',
    price: '1300',
  },
  {
    id: 4,
    date: 'december 5th, 2019',
    img: tour4,
    title: 'kenya highlights',

    destination: 'kenya',
    days: '20',
    price: '3300',
  },
];
export const ToursCard = () => {
  return (
    <>
      {tour.map(({ id, date, img, title, destination, days, price }) => {
        return (
          <article className='tour-card' key={id}>
            <div className='tour-img-container'>
              <img src={img} className='tour-img' alt='' />
              <p className='tour-date'>{date}</p>
            </div>
            <div className='tour-info'>
              <h4>{title}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>{' '}
                  {destination}
                </p>
                <p>{days} days</p>
                <p>from ${price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};
