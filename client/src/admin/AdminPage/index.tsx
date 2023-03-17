import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import AdminNav from '../AdminNav'
import { RootState } from '../../reducers';
import { IAdminPage } from './types';
import { fetchLessons } from '../../actions/lessonsActions';

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
              <a href={`/admin/add-lesson/${lesson._id}`}>{lesson.lessonName}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminPage;