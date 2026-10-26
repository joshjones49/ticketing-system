import './Notif.css'

import { FaTag, FaUserPlus, FaCalendarDays, FaTrophy } from 'react-icons/fa6'

const notifications = [
  {
    id: 'deal',
    type: 'Deal',
    icon: <FaTag />,
    title: 'Fall Tech Savings',
    message: 'Save up to 20% on select laptops, monitors, and accessories through October 31.',
  },
  {
    id: 'hiring',
    type: 'Hiring',
    icon: <FaUserPlus />,
    title: "We're hiring repair technicians",
    message: 'Full-time and part-time roles are open at all Capital Tech locations. Apply on our Careers page.',
  },
  {
    id: 'holiday',
    type: 'Holiday',
    icon: <FaCalendarDays />,
    title: 'Thanksgiving hours',
    message: 'All stores and repair desks are closed Thursday, November 26. Normal hours resume Friday.',
  },
  {
    id: 'eotw',
    type: 'Employee of the Week',
    icon: <FaTrophy />,
    title: 'Congratulations, Jordan M.',
    message: 'Recognized for resolving 18 repair tickets with 100% customer satisfaction this week.',
  },
]

const Notif = () => {
  return (
    <aside className='notif' aria-label='Notifications'>
      <div className='notif-ctn'>
        <header className='notif-header'>
          <h2>Announcements</h2>
          <span className='notif-badge'>{notifications.length}</span>
        </header>

        <ul className='notif-list'>
          {notifications.map((item) => (
            <li className={`notif-item notif-${item.id}`} key={item.id}>
              <span className='notif-icon'>{item.icon}</span>
              <div className='notif-body'>
                <span className='notif-type'>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.message}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Notif
