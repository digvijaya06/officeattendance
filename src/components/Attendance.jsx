import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useUser } from '../context/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import './Attendance.css';

const Attendance = () => {
  const { user, abc, checkInTime, setCheckInTime, checkedOutTime, setCheckedOutTime } = useUser();

  const saveAttendanceRecord = (record) => {
    const records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    const existingIndex = records.findIndex(r => r.userEmail === record.userEmail);

    if (existingIndex !== -1) {
      records[existingIndex] = { ...records[existingIndex], ...record };
    } else {
      records.push(record);
    }

    localStorage.setItem('attendanceRecords', JSON.stringify(records));
  };

  const handleCheckIn = () => {
    const now = new Date().toLocaleString();
    setCheckInTime(now);
    if (user) saveAttendanceRecord({ userName: user.name, userEmail: user.email, checkInTime: now, checkedOutTime: null });
    if (abc) saveAttendanceRecord({ userName: abc.name, userEmail: abc.email, checkInTime: now, checkedOutTime: null });
    toast.success('Checked In Successfully!');
  };

  const handleCheckOut = () => {
    const now = new Date().toLocaleString();
    setCheckedOutTime(now);
    if (user) saveAttendanceRecord({ userName: user.name, userEmail: user.email, checkedOutTime: now });
    if (abc) saveAttendanceRecord({ userName: abc.name, userEmail: abc.email, checkedOutTime: now });
    toast.info('Checked Out Successfully!');
  };

  return (
    <div className="container attendance-wrapper">
      <div className="card attendance-card">
        <h2>Attendance Tracker</h2>
        <div className="button-group">
          <button
            className="btn btn-success animated-button me-2"
            onClick={handleCheckIn}
            disabled={!!checkInTime}
          >
            Check In
          </button>
          <button
            className="btn btn-danger animated-button"
            onClick={handleCheckOut}
            disabled={!checkInTime || !!checkedOutTime}
          >
            Check Out
          </button>
        </div>

        <div className="mt-4">
          {checkInTime && <p><strong>Checked In At:</strong> {checkInTime}</p>}
          {checkedOutTime && <p><strong>Checked Out At:</strong> {checkedOutTime}</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Attendance;
