import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import useSound from "use-sound";
import './QuestionModal.css';
export const QUESTIONS = [
    {
        questionText:'לך אל הנמלה עצל ...',
        options: [
            'ראה את דרכיה ושב בצל',
             'ותחזור מלא מרץ' ,
             'ראה את דרכיה וכחם'],
        answerIndex: 2
    },
    {
        questionText:'כמה רגלים יש לנמלה',
        options: [
            'שתי רגלים השאר ידיים',
             'שמונה רגלים כמו לעכביש',
             'שישה רגלים '
        ],
        answerIndex: 2
    },
    {
        questionText:'האם נמלה מקימה קן ליד מקודות מזון',
        options: [
            'כן',
             'לא',
             'היא לא אוכלת'
        ],
        answerIndex: 0
    },
    {
        questionText:'האם המלכה היא הנמלה היחידה בקן שיכולה להתרבות',
        options: [
            'כן ',
             'לא'
        ],
        answerIndex: 0
    },
    {
      questionText:'באיזה יבשת איין נמלים',
      options: [
          'נמלים יש בכל היבשות ',
           'אין ביבשת אוסטרליה',
           'איין נמלים ביבשת אנטרטיקה'
      ],
      answerIndex: 2
    }, 
    {
      questionText:'מה אוכלות רוב הנמלים',
      options: [
        'רק גלידה וניל',
         'רוב הנמלים הן אוכלות כל',
         'רק מצות שמורות של פסח',
         'אבנים'
      ],
      answerIndex: 1
    }
];

export const QuestionsModal = ({onClose, question}: any) => {
    const [play] = useSound('./bell.mp3');
    const [answer, setSelectedAnswer] = useState<number>(-1);
    return  <Modal show={true} dir="rtl" className='question-modal' onHide={() => onClose(0)} >
        <Form dir="rtl">
    <Modal.Header closeButton>
      <Modal.Title>ענה על השאלה נכון וקבל נקודות</Modal.Title>
    </Modal.Header>
    <Modal.Body>{question.questionText}
    {question.options.map((option: string, index: number) => {
        return <Form.Check 
                type='radio'
                dir="rtl"
                name="answerOptions"
                key={index}
                onChange={() => setSelectedAnswer(index)}
                id={`default-radio`}
                label={option}/>
    })}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={()=> {
          let scoreToAdd = 0;
          if (answer === question.answerIndex) {
            play();
            scoreToAdd = 50

          }
          onClose(scoreToAdd);
      }}>
        שלח
      </Button>
    </Modal.Footer>
    </Form>
  </Modal>
}