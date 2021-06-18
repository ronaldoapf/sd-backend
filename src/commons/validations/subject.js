import * as yup from 'yup';

export default yup.object().shape({
  subjectCode: yup.string().required(),
  subjectName: yup.string().required(),
});
