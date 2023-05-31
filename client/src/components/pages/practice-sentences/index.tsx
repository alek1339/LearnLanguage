import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom";
import { Row } from "react-bootstrap"
import { IPracticeSentencesPage } from "./types"
import './styles.scss';
import { useSelector } from "react-redux";
import { fetchSentences } from "../../../actions/sentencesActions";
import { RootState } from "../../../reducers";
import CustomProgressBar from "../../shared/ProgressBar";
import { setCurrentLesson } from "../../../actions/practice/practiceLessonsActions";
import { useParams } from "react-router-dom";
import { ISentence } from "../../../types/Sentence";
import { useNavigate } from 'react-router-dom';
import { setCurrentSentence } from "../../../actions/practice/practiceSentencesActions";
import { sentenceTraslationCheck } from "../../../utils/stenceTranslationCheck";
import Audio from '../../Audio/Audio';
import { addLearnedLesson } from "../../../actions/learnedLessonsActions";
import { LessonsProgress } from "../../../enums/lessonsProgress";
import onContinue from "../../../utils/onContinue";
import updateProgress from "../../../utils/updateProgress";
import { IAddLearnedLessonData } from "../../../types/LearnedLesson";
import { useAppDispatch } from "../../../store";
import Modal from "../../Modal";

import { updateProfile } from "../../../actions/profileActions";
import Answer from "../../Answer";

import x from '../../../images/icons/x.png';
import LevelSwitcher from "../../LevelsSwitcher";

import onFinsishLesson from "../../../utils/onFinishLesson";
import { allSentencesHasAudioCheck } from "../../../utils/allSentencesHasAudioCheck";

const PracticeSentencesPage: IPracticeSentencesPage = () => {
  const dispatch = useAppDispatch();
  const currentSentence: ISentence = useSelector((state: RootState) => state.practiceSentence);
  const currentLesson = useSelector((state: RootState) => state.practiceLesson);
  const [progress, setProgress] = useState<number>(0);
  const [correctSentences, setCorrectSentences] = useState<Array<ISentence>>([]);
  const [percentageProgress, setPercentageProgress] = useState(0);
  const { _id } = useParams();
  const [translation, setTranslation] = useState('');
  const [forTranslation, setForTranslation] = useState<Array<ISentence>>([]);
  const [indexForTranslation, setIndexForTranslation] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const profile = useSelector((state: RootState) => state.profile);
  const learnedLesson = useSelector((state: RootState) => state.learnedLesson);
  const [correctStrike, setCorrectStrike] = useState(0);
  const [showEnglishTranslation, setShowEnglishTranslation] = useState(true);
  const practiceTranslation = useSelector((state: RootState) => state.practiceTranslation);
  const progressStep = 100 / currentLesson.sentences.length;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [playAudio, setPlayAudio] = useState(false);
  const [audioSrc, setAudioSrc] = useState('./audio1.mp3');
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const [allSentencesHaveAudio, setAllSentencesHaveAudio] = useState(false);

  useEffect(() => {
    setAllSentencesHaveAudio(allSentencesHasAudioCheck(currentLesson))
  }, [currentLesson]);

  useEffect(() => {
    dispatch(setCurrentLesson(_id || ''));
    dispatch(fetchSentences());
  }, []);

  useEffect(() => {
    const currentLessonStrike = profile.learnedLessons?.find(l => l.lessonId === currentLesson._id)?.correctStrike;
    if (currentLessonStrike) {
      setCorrectStrike(currentLessonStrike);

      if (currentLessonStrike === LessonsProgress.firstLevel || LessonsProgress.thirdLevel === correctStrike) {
        setShowEnglishTranslation(false);
      } else {
        setShowEnglishTranslation(true);
      }
    }

  }, [currentLesson]);

  const onSubmit = () => {
    if (practiceTranslation !== '' && sentenceTraslationCheck(currentSentence, practiceTranslation, correctStrike)) {
      const updatedCorrectSentences = updateProgress({
        progress,
        setCorrectSentences,
        correctSentences,
        currentSentence,
        currentLesson,
        setProgress,
        setPercentageProgress,
      });

      var notTranslated = currentLesson.sentences.filter((obj) => {
        return !updatedCorrectSentences.some(function (obj2) {
          return obj.english == obj2.english;
        });
      });

      const nextIndex = indexForTranslation >= notTranslated.length ? 0 : indexForTranslation + 1;
      setIndexForTranslation(nextIndex)

      setForTranslation(notTranslated);

      if (notTranslated && notTranslated.length > 0) {
        setAudioSrc('./audio-files/success1.mp3');
        setPlayAudio(true);

        setTimeout(() => {
          const idx = notTranslated.length > nextIndex ? nextIndex : 0;
          dispatch(setCurrentSentence(notTranslated[idx]));
          setPlayAudio(false);
        }, 1000);

      } else {
        setAudioSrc('./audio-files/success2.mp3');
        setPlayAudio(true);
        onFinsishLesson()
      }

    } else {
      setAudioSrc('./audio-files/error1.wav');
      setPlayAudio(true);

      setTimeout(() => {
        setTranslation(currentSentence.german);
        setShowContinue(true);
        setPlayAudio(false);
      }, 500);
    }
  }

  const onCloseLesson = () => {
    navigate("/");
  }

  const handleOnContinue = () => {
    onContinue(
      {
        forTranslation,
        setIndexForTranslation,
        indexForTranslation,
        currentLesson,
        dispatch,
        setTranslation,
        setShowContinue,
        setCurrentSentence,
      }
    );
  }

  const onFinsishLesson = () => {
    const currentLessonStrike = profile.learnedLessons?.find(l => l.lessonId === currentLesson._id)?.correctStrike;

    let updatedLessons = profile.learnedLessons;

    if (!currentLessonStrike && profile.learnedLessons && currentLesson._id && !profile.learnedLessons.filter((lesson) => lesson.lessonId === currentLesson._id).length) {
      updatedLessons = [...profile.learnedLessons, learnedLesson];

      const newLearnedLesson: IAddLearnedLessonData = {
        lessonId: currentLesson._id,
        userId: profile._id || '',
      }
      dispatch(addLearnedLesson(newLearnedLesson));
    } else {
      updatedLessons = profile.learnedLessons?.map((lesson) => {
        if (lesson.lessonId === currentLesson._id) {
          return {
            ...lesson,
            correctStrike: lesson.correctStrike + 1,
          };
        }
        return lesson;
      })
      let profileData = {
        id: profile._id,
        lesson: updatedLessons
      };
      updateProfile(profileData)
    }

    setShowModal(true);
  }

  const onModalClose = () => {
    setPlayAudio(false);
    setShowModal(false);
    setPlayAudio(false);
    navigate("/");
  }

  return (
    <div className="page-container">
      <Audio src={audioSrc} play={playAudio} />
      <div className="page-container__progress_container">
        <div></div>
        <div>
          <CustomProgressBar progress={percentageProgress} progressStep={progressStep} />
        </div>
        <div className="d-flex justify-content-center" >
          <img src={x} className="x-icon" onClick={onCloseLesson} />
        </div>
      </div>

      {
        showEnglishTranslation ?
          <Row className="d-flex justify-content-center">
            <div className="sentence-container">
              <span className="sentence w-auto">{currentSentence.english}</span>
            </div>
          </Row> : <></>
      }

      {translation !== '' ?
        <Answer answer={translation} isCorrect={translation === ''} /> : ''
      }

      <LevelSwitcher
        correctStrike={correctStrike}
        translation={translation}
        audioSrc={audioSrc}
        onSubmit={onSubmit}
        onContinue={handleOnContinue}
        showContinue={showContinue}
        submitButtonRef={submitButtonRef}
        continueButtonRef={continueButtonRef}
        allSentencesHaveAudio={allSentencesHaveAudio}
      />

      {showModal && createPortal(
        <Modal onClose={onModalClose}>
          <h1>Nice Job</h1>
          <p>Continue with the hard work...</p>
        </Modal>,
        document.getElementById('modal-root') as HTMLElement
      )}

    </div>
  )
}

export default PracticeSentencesPage;