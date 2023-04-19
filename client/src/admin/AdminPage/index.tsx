import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import AdminNav from '../AdminNav'
import { RootState } from '../../reducers';
import { IAdminPage } from './types';
import { fetchLessons } from '../../actions/lessonsActions';
import { Link } from 'react-router-dom';

const AdminPage: IAdminPage = () => {
  const dispatch = useAppDispatch();
  const lessons = useSelector((state: RootState) => state.lessons);

  useEffect(() => {
    dispatch(fetchLessons());
  }, []);

  return (
    <div>
      <AdminNav />
      <div className="admin-page">
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson._id}>
              <Link to={`/admin/edit-lesson/${lesson._id}`}>{lesson.lessonName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminPage;