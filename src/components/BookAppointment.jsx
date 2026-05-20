import { NavLink } from 'react-router-dom'

function BookAppointment() {
  return (
    <NavLink to="/contact" className="text-sm text-white bg-primary px-5 py-2 rounded-lg font-semibold hover:scale-106 transition duration-300">Book Appointment</NavLink>
  )
}

export default BookAppointment