import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useUser } from '../context/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import './Attendance.css';

const Attendance = () => {
  const { checkInTime, setCheckInTime, checkedOutTime, setCheckedOutTime } = useUser();

  const handleCheckIn = () => {
    const now = new Date().toLocaleString();
    setCheckInTime(now);
    toast.success('Checked In Successfully!');
  };

  const handleCheckOut = () => {
    const now = new Date().toLocaleString();
    setCheckedOutTime(now);
    toast.info('Checked Out Successfully!');
  };

  return (
    <div className='animated-button' style={{ textAlign: 'center', marginTop: '100px' }}>
      <button
        className='checkin'
        onClick={handleCheckIn}
        disabled={!!checkInTime}
        style={{ padding: '10px 20px', margin: '10px' }}
      >
        Check In
      </button>
      <button
        className='checkout'
        onClick={handleCheckOut}
        disabled={!checkInTime || !!checkedOutTime}
        style={{ padding: '10px 20px', margin: '10px' }}
      >
        Check Out
      </button>

      {/* Time Display */}
      <div style={{ marginTop: '20px' }}>
        {checkInTime && <p>Checked In At: {checkInTime}</p>}
        {checkedOutTime && <p> Checked Out At: {checkedOutTime}</p>}
      </div>

      <ToastContainer position='top-center' autoClose={2000} />
    </div>
  );
};

export default Attendance;
