import { addLearnedLesson } from "../actions/learnedLessonsActions";
import { IAddLearnedLessonData, ILearnedLesson } from "../types/LearnedLesson";
import { ILesson } from "../types/Lesson";

const onFinsishLesson = (
  profile: any, // Replace with the appropriate type
  currentLesson: any, // Replace with the appropriate type
  dispatch: any, // Replace with the appropriate type
  learnedLesson: any, // Replace with the appropriate type
  updateProfile: any, // Replace with the appropriate type
  setShowModal: React.Dispatch<React.SetStateAction<boolean>> // Replace with the appropriate type
) => {
  const currentLessonStrike = profile.learnedLessons?.find((l: ILearnedLesson) => l.lessonId === currentLesson._id)?.correctStrike;

  let updatedLessons = profile.learnedLessons;

  if (
    !currentLessonStrike &&
    profile.learnedLessons &&
    currentLesson._id &&
    !profile.learnedLessons.filter((lesson: ILearnedLesson) => lesson.lessonId === currentLesson._id).length
  ) {
    updatedLessons = [...profile.learnedLessons, learnedLesson];

    const newLearnedLesson: IAddLearnedLessonData = {
      lessonId: currentLesson._id,
      userId: profile._id || "",
    };
    dispatch(addLearnedLesson(newLearnedLesson));
  } else {
    updatedLessons = profile.learnedLessons?.map((lesson: ILearnedLesson) => {
      if (lesson.lessonId === currentLesson._id) {
        return {
          ...lesson,
          correctStrike: lesson.correctStrike + 1,
        };
      }
      return lesson;
    });

    let profileData = {
      id: profile._id,
      lesson: updatedLessons,
    };
    updateProfile(profileData);
  }

  setShowModal(true);
};

export default onFinsishLesson;
