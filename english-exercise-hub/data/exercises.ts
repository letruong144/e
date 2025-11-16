
import { ExerciseQuestion, ExerciseCategory } from '../types';

type ExerciseData = {
  [key in ExerciseCategory]: ExerciseQuestion[];
};

export const exercisesData: ExerciseData = {
  meaning: [
    { id: 1, type: 'multiple-choice', question: 'Regular physical activity can greatly reduce the risk of developing **chronic** diseases such as heart disease and diabetes.', options: ['short-term', 'lasting for a long time', 'common', 'harmless'], answer: 'lasting for a long time' },
    { id: 2, type: 'multiple-choice', question: 'The communal house (Đình) is the spiritual and cultural _______ of the village.', options: ['border', 'fence', 'heart', 'building'], answer: 'heart' },
    { id: 3, type: 'multiple-choice', question: 'The main **occupation** in the countryside is _______, with rice paddies stretching around.', options: ['fishing', 'trading', 'farming', 'mining'], answer: 'farming' },
    { id: 4, type: 'multiple-choice', question: 'The students are required to _______ for the English Speaking Contest before Friday.', options: ['explore', 'enroll', 'avoid', 'achieve'], answer: 'enroll' },
    { id: 5, type: 'multiple-choice', question: 'Air _______ is a serious problem caused by too much exhaust fume from vehicles.', options: ['development', 'conservation', 'pollution', 'organization'], answer: 'pollution' },
    { id: 6, type: 'multiple-choice', question: 'The government is trying to _______ a new law to protect the forests.', options: ['establish', 'persuade', 'suggest', 'maintain'], answer: 'establish' },
    { id: 7, type: 'multiple-choice', question: 'Although facing many challenges, the residents demonstrated a strong sense of _______.', options: ['independence', 'responsibility', 'poverty', 'community'], answer: 'community' },
    { id: 8, type: 'multiple-choice', question: 'It is _______ for students to wear uniforms when going to school.', options: ['portable', 'essential', 'reliable', 'various'], answer: 'essential' },
    { id: 9, type: 'multiple-choice', question: 'She decided to _______ her plan until the next month because of the bad weather.', options: ['look after', 'put off', 'run out of', 'look forward to'], answer: 'put off' },
    { id: 10, type: 'multiple-choice', question: '_______ is defined as activity that is planned, structured, and repetitive for body conditioning.', options: ['Innovation', 'Examination', 'Exercise', 'Communication'], answer: 'Exercise' },
    { id: 11, type: 'multiple-choice', question: 'Many species are facing _______ due to the loss of their natural habitat.', options: ['organization', 'extinction', 'achievement', 'curriculum'], answer: 'extinction' },
    { id: 12, type: 'multiple-choice', question: 'The word "________" means having strong, supportive relationships.', options: ['responsible', 'close-knit', 'fascinating', 'diverse'], answer: 'close-knit' },
    { id: 13, type: 'multiple-choice', question: 'The company needs to _______ the new safety rules right away.', options: ['carry out', 'look after', 'set up', 'turn off'], answer: 'carry out' },
    { id: 14, type: 'multiple-choice', question: 'Using public transport is more _______ than using a private car because it saves fuel.', options: ['stressful', 'economical', 'convenient', 'unique'], answer: 'economical' },
    { id: 15, type: 'multiple-choice', question: 'Students must _______ on their studies to pass the exam with high scores.', options: ['contribute', 'concentrate', 'revise', 'determine'], answer: 'concentrate' },
  ],
  pronunciation: [
    { id: 1, type: 'multiple-choice', question: 'Choose the word with the underlined part pronounced differently. (Focus on the letter \'a\')', options: ['academic', 'qualification', 'access', 'alternative'], answer: 'qualification' },
    { id: 2, type: 'multiple-choice', question: 'Choose the word with the underlined part pronounced differently. (Focus on the letter \'y\')', options: ['compulsory', 'poverty', 'easily', 'study'], answer: 'compulsory' },
    { id: 3, type: 'multiple-choice', question: 'Choose the word with the underlined part pronounced differently. (Focus on the letter \'i\' sound)', options: ['revise', 'reliable', 'require', 'responsible'], answer: 'responsible' },
    { id: 4, type: 'multiple-choice', question: 'Choose the word with the underlined part pronounced differently. (Focus on the letter \'i\' sound)', options: ['digital', 'find', 'decide', 'diverse'], answer: 'digital' },
    { id: 5, type: 'multiple-choice', question: 'Choose the word with the underlined part pronounced differently. (Focus on the letter \'o\' sound)', options: ['wonderful', 'donate', 'occupation', 'opportunity'], answer: 'wonderful' },
    { id: 6, type: 'multiple-choice', question: 'Choose the word with a different stress pattern.', options: ['pollution', 'enroll', 'community', 'concentrate'], answer: 'concentrate' },
    { id: 7, type: 'multiple-choice', question: 'Choose the word with a different stress pattern.', options: ['portable', 'tutor', 'custom', 'compete'], answer: 'compete' },
    { id: 8, type: 'multiple-choice', question: 'Choose the word with a different stress pattern.', options: ['definition', 'responsible', 'contribute', 'independent'], answer: 'definition' },
    { id: 9, type: 'multiple-choice', question: 'Choose the word with a different stress pattern.', options: ['economical', 'efficient', 'convenient', 'innovation'], answer: 'innovation' },
    { id: 10, type: 'multiple-choice', question: 'Choose the word with a different stress pattern.', options: ['exhausted', 'familiar', 'terrific', 'individual'], answer: 'individual' },
  ],
  sentenceStructure: [
    { id: 1, type: 'multiple-choice', question: 'I enjoy _______ TV shows in the evening.', options: ['watching', 'to watch', 'watch', 'watched'], answer: 'watching' },
    { id: 2, type: 'multiple-choice', question: 'It is important _______ the environment clean for the next generation.', options: ['keep', 'keeping', 'to keep', 'kept'], answer: 'to keep' },
    { id: 3, type: 'multiple-choice', question: 'My sister suggested _______ a movie together this weekend.', options: ['see', 'seeing', 'to see', 'saw'], answer: 'seeing' },
    { id: 4, type: 'multiple-choice', question: 'That’s the scientist _______ made a great contribution to the project.', options: ['whom', 'which', 'whose', 'who'], answer: 'who' },
    { id: 5, type: 'multiple-choice', question: 'If I _______ enough money, I would buy a new laptop.', options: ['have', 'had', 'will have', 'would have'], answer: 'had' },
    { id: 6, type: 'multiple-choice', question: 'The problem, _______ we need to find a solution, is getting worse.', options: ['about which', 'which', 'who', 'whose'], answer: 'about which' },
    { id: 7, type: 'multiple-choice', question: 'We were forced _______ the meeting until next week.', options: ['postpone', 'to postpone', 'postponing', 'postponed'], answer: 'to postpone' },
    { id: 8, type: 'multiple-choice', question: 'The old library _______ next year.', options: ['is rebuilt', 'will rebuild', 'is going to be rebuilt', 'will be rebuilding'], answer: 'is going to be rebuilt' },
    { id: 9, type: 'multiple-choice', question: 'Peter avoids _______ late because he needs to get up early.', options: ['stay', 'to stay', 'staying', 'stayed'], answer: 'staying' },
    { id: 10, type: 'multiple-choice', question: 'He denied _______ the car without permission.', options: ['to use', 'used', 'using', 'use'], answer: 'using' },
    { id: 11, type: 'multiple-choice', question: 'The teacher advised us _______ our homework before the deadline.', options: ['finish', 'to finish', 'finishing', 'finished'], answer: 'to finish' },
    { id: 12, type: 'multiple-choice', question: 'I promised _______ you with your homework tonight.', options: ['helping', 'to help', 'help', 'helped'], answer: 'to help' },
    { id: 13, type: 'multiple-choice', question: 'The organization _______ we volunteered last year is very supportive.', options: ['which', 'where', 'when', 'who'], answer: 'where' },
    { id: 14, type: 'multiple-choice', question: 'If it hadn\'t rained, we _______ camping.', options: ['would go', 'would have gone', 'had gone', 'went'], answer: 'would have gone' },
    { id: 15, type: 'multiple-choice', question: 'The manager encouraged the employees _______ ideas.', options: ['contribute', 'to contribute', 'contributing', 'contributed'], answer: 'to contribute' },
  ],
  wordForms: [
    { id: 1, type: 'word-form', question: 'Smoking is strictly _______ in this area.', baseWord: 'PROHIBIT', answer: 'prohibited' },
    { id: 2, type: 'word-form', question: 'The recent floods caused severe _______ to the town\'s infrastructure.', baseWord: 'DAMAGE', answer: 'damage' },
    { id: 3, type: 'word-form', question: 'The use of social media has become increasingly _______ in daily life.', baseWord: 'CONVENIENCE', answer: 'convenient' },
    { id: 4, type: 'word-form', question: 'This device is small and _______, easy to carry around.', baseWord: 'PORT', answer: 'portable' },
    { id: 5, type: 'word-form', question: 'She felt _______ after working ten hours straight.', baseWord: 'EXHAUST', answer: 'exhausted' },
    { id: 6, type: 'word-form', question: 'The children need a lot of _______ and support from their parents.', baseWord: 'ENCOURAGE', answer: 'encouragement' },
    { id: 7, type: 'word-form', question: 'The scientist\'s discovery was an important _______ for the whole academic community.', baseWord: 'ACHIEVE', answer: 'achievement' },
    { id: 8, type: 'word-form', question: 'We must work together to find a _______ to the climate change problem.', baseWord: 'SOLVE', answer: 'solution' },
    { id: 9, type: 'word-form', question: 'He is a very _______ student; you can always trust his work.', baseWord: 'RELY', answer: 'reliable' },
    { id: 10, type: 'word-form', question: 'The campaign aims to raise public _______ about wildlife protection.', baseWord: 'AWARE', answer: 'awareness' },
    { id: 11, type: 'word-form', question: 'The team celebrated their _______ victory in the final match.', baseWord: 'WONDER', answer: 'wonderful' },
    { id: 12, type: 'word-form', question: 'You should listen to her because her advice is always _______.', baseWord: 'ESSENCE', answer: 'essential' },
    { id: 13, type: 'word-form', question: 'The school decided to make English a _______ subject for all grades.', baseWord: 'COMPEL', answer: 'compulsory' },
    { id: 14, type: 'word-form', question: 'They moved to a different country to experience a more _______ culture.', baseWord: 'DIVERSIFY', answer: 'diverse' },
    { id: 15, type: 'word-form', question: 'It takes great _______ to give up a comfortable life and become a volunteer.', baseWord: 'DETERMINE', answer: 'determination' },
  ]
};
